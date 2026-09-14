'use client';

// Lightweight Web Audio API synthesis for Jericho's signature "Keebs" mechanical keyboard engine
let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    try {
        if (!audioCtx) {
            const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
            if (AudioCtxClass) {
                audioCtx = new AudioCtxClass();
            }
        }
        if (audioCtx && audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        return audioCtx;
    } catch {
        return null;
    }
}

export function isKeebsSoundEnabled(): boolean {
    if (typeof window === 'undefined') return false;
    try {
        return localStorage.getItem('keebs-sound') === 'true';
    } catch {
        return false;
    }
}

export function setKeebsSoundEnabled(enabled: boolean): void {
    if (typeof window === 'undefined') return;
    try {
        localStorage.setItem('keebs-sound', enabled ? 'true' : 'false');
        window.dispatchEvent(new CustomEvent('keebs-sound-change', { detail: { enabled } }));
    } catch {
        // localStorage not available
    }
}

export function playKeebsClick(pitchMod: number = 1): void {
    if (!isKeebsSoundEnabled()) return;

    try {
        const ctx = getAudioContext();
        if (!ctx) return;

        const now = ctx.currentTime;

        // 1. Initial crisp transient "snap"
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        const baseFreq = (650 + Math.random() * 80) * pitchMod;
        osc.frequency.setValueAtTime(baseFreq, now);
        osc.frequency.exponentialRampToValueAtTime(120, now + 0.04);

        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.05);

        // 2. High-frequency tactile "clack" impulse (Holy Panda / Blue switch bottom-out)
        const bufferSize = ctx.sampleRate * 0.02; // 20ms of noise
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.2));
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(2800 * pitchMod, now);
        filter.Q.setValueAtTime(3.5, now);

        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.06, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);

        noise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(ctx.destination);

        noise.start(now);
        noise.stop(now + 0.03);
    } catch {
        // Audio playback failed or blocked by autoplay policy
    }
}
