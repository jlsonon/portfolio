'use client';

import React, { useState } from 'react';
import {
    Zap,
    XCircle,
    Database,
    Smartphone,
    Activity,
    TrendingUp,
    FileSpreadsheet,
    FileWarning,
    Receipt,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SystemsArchitectureCard() {
    const [mode, setMode] = useState<'automated' | 'manual'>('automated');
    const [selectedNode, setSelectedNode] = useState<number | null>(null);

    return (
        <div className="w-full rounded-3xl border border-border/40 bg-background-light/35 backdrop-blur-md p-6 sm:p-8 relative overflow-hidden shadow-xl">
            {/* Ambient Background Gradient Wash */}
            <div
                className={cn(
                    'absolute top-0 right-0 w-96 h-96 blur-[120px] rounded-full pointer-events-none transition-all duration-700 -z-10',
                    mode === 'automated' ? 'bg-primary/10' : 'bg-red-500/10'
                )}
            />

            {/* Header: Title + Interactive Mode Switcher Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/30 mb-6">
                <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-1">
                        <Activity size={15} />
                        <span>Interactive Systems Architecture</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-anton text-foreground">
                        {mode === 'automated'
                            ? 'How My Custom Systems Run in Production'
                            : 'The Cost of Manual Paper & Spreadsheet Chaos'}
                    </h4>
                </div>

                {/* Mode Switcher Tabs */}
                <div className="inline-flex p-1 rounded-2xl bg-background border border-border/50 shrink-0 self-start sm:self-auto shadow-inner">
                    <button
                        onClick={() => {
                            setMode('automated');
                            setSelectedNode(null);
                        }}
                        className={cn(
                            'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer',
                            mode === 'automated'
                                ? 'bg-primary text-black shadow-md shadow-primary/20 scale-100'
                                : 'text-muted-foreground hover:text-foreground'
                        )}
                    >
                        <Zap size={13} />
                        <span>Jericho&apos;s Cloud Engine</span>
                    </button>

                    <button
                        onClick={() => {
                            setMode('manual');
                            setSelectedNode(null);
                        }}
                        className={cn(
                            'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer',
                            mode === 'manual'
                                ? 'bg-red-500/90 text-white shadow-md shadow-red-500/20 scale-100'
                                : 'text-muted-foreground hover:text-foreground'
                        )}
                    >
                        <XCircle size={13} />
                        <span>Manual Legacy Process</span>
                    </button>
                </div>
            </div>

            {/* Visual Pipeline Canvas */}
            {mode === 'automated' ? (
                <div className="space-y-6">
                    {/* 3-Node Architecture Flow */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
                        {/* Node 1: Fast Frontend / POS */}
                        <div
                            onClick={() => setSelectedNode(0)}
                            className={cn(
                                'p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden',
                                selectedNode === 0
                                    ? 'border-primary bg-primary/10 shadow-lg shadow-primary/10'
                                    : 'border-border/40 bg-background/50 hover:border-primary/40 hover:bg-background/80'
                            )}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="size-8 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                                    <Smartphone size={16} />
                                </div>
                                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                                    &lt; 50ms Input
                                </span>
                            </div>
                            <h5 className="font-anton text-base text-foreground mb-1">
                                1. Touch POS &amp; Client Web Apps
                            </h5>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Offline-first cashier UI, QR scanner, and self-service portals with zero input lag.
                            </p>
                        </div>

                        {/* Node 2: Next.js + Cloud Core */}
                        <div
                            onClick={() => setSelectedNode(1)}
                            className={cn(
                                'p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden',
                                selectedNode === 1
                                    ? 'border-primary bg-primary/10 shadow-lg shadow-primary/10'
                                    : 'border-border/40 bg-background/50 hover:border-primary/40 hover:bg-background/80'
                            )}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="size-8 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                                    <Database size={16} />
                                </div>
                                <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                                    Next.js 15 + Postgres
                                </span>
                            </div>
                            <h5 className="font-anton text-base text-foreground mb-1">
                                2. Automated Cloud Core &amp; APIs
                            </h5>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Atomic transactions, row-level security, automated receipt generation, and real-time syncing.
                            </p>
                        </div>

                        {/* Node 3: Live Executive Analytics */}
                        <div
                            onClick={() => setSelectedNode(2)}
                            className={cn(
                                'p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden',
                                selectedNode === 2
                                    ? 'border-primary bg-primary/10 shadow-lg shadow-primary/10'
                                    : 'border-border/40 bg-background/50 hover:border-primary/40 hover:bg-background/80'
                            )}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="size-8 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                                    <TrendingUp size={16} />
                                </div>
                                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                                    Live Sync
                                </span>
                            </div>
                            <h5 className="font-anton text-base text-foreground mb-1">
                                3. Real-Time Operations Hub
                            </h5>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Multi-branch live revenue metrics, inventory alerts, and instant audit trails for owners.
                            </p>
                        </div>
                    </div>

                    {/* Operational KPIs Row */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-border/20">
                        <div className="p-3 rounded-xl bg-background/40 border border-border/30">
                            <span className="text-[10px] uppercase font-bold text-muted-foreground block">System Latency</span>
                            <span className="text-lg font-anton text-emerald-400">&lt; 180ms</span>
                        </div>
                        <div className="p-3 rounded-xl bg-background/40 border border-border/30">
                            <span className="text-[10px] uppercase font-bold text-muted-foreground block">Manual Time Saved</span>
                            <span className="text-lg font-anton text-primary">15+ hrs/week</span>
                        </div>
                        <div className="p-3 rounded-xl bg-background/40 border border-border/30">
                            <span className="text-[10px] uppercase font-bold text-muted-foreground block">Double-Entry Error</span>
                            <span className="text-lg font-anton text-emerald-400">0.00%</span>
                        </div>
                        <div className="p-3 rounded-xl bg-background/40 border border-border/30">
                            <span className="text-[10px] uppercase font-bold text-muted-foreground block">Uptime Reliability</span>
                            <span className="text-lg font-anton text-primary">99.9% Cloud</span>
                        </div>
                    </div>
                </div>
            ) : (
                /* Manual Process Chaos View */
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Manual Step 1 */}
                        <div className="p-5 rounded-2xl border border-red-500/30 bg-red-950/10 relative">
                            <div className="flex items-center justify-between mb-3">
                                <div className="size-8 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400">
                                    <Receipt size={16} />
                                </div>
                                <span className="text-[10px] font-mono font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">
                                    High Risk
                                </span>
                            </div>
                            <h5 className="font-anton text-base text-red-200 mb-1">
                                1. Paper Logbooks &amp; Slips
                            </h5>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Handwritten receipts, physical punch cards, and lost records during busy operational rushes.
                            </p>
                        </div>

                        {/* Manual Step 2 */}
                        <div className="p-5 rounded-2xl border border-red-500/30 bg-red-950/10 relative">
                            <div className="flex items-center justify-between mb-3">
                                <div className="size-8 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400">
                                    <FileSpreadsheet size={16} />
                                </div>
                                <span className="text-[10px] font-mono font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">
                                    48hr Delay
                                </span>
                            </div>
                            <h5 className="font-anton text-base text-red-200 mb-1">
                                2. Manual Excel Reconciliation
                            </h5>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Staff re-typing numbers into disparate spreadsheets, formula corruption, and untracked edits.
                            </p>
                        </div>

                        {/* Manual Step 3 */}
                        <div className="p-5 rounded-2xl border border-red-500/30 bg-red-950/10 relative">
                            <div className="flex items-center justify-between mb-3">
                                <div className="size-8 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400">
                                    <FileWarning size={16} />
                                </div>
                                <span className="text-[10px] font-mono font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">
                                    Blind Spots
                                </span>
                            </div>
                            <h5 className="font-anton text-base text-red-200 mb-1">
                                3. Delayed Business Decisions
                            </h5>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Owners don&apos;t know daily profits until end-of-month; inventory stockouts happen unexpectedly.
                            </p>
                        </div>
                    </div>

                    {/* Manual Inefficiencies Summary */}
                    <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                        <div className="flex items-center gap-2 text-red-300 font-medium">
                            <XCircle size={16} className="text-red-400 shrink-0" />
                            <span>Estimated loss: 12–20 staff hours weekly lost to manual data entry &amp; reconciliation mistakes.</span>
                        </div>
                        <button
                            onClick={() => setMode('automated')}
                            className="px-3.5 py-1.5 rounded-xl bg-primary text-black font-bold text-xs hover:bg-primary-hover transition-colors shrink-0 cursor-pointer"
                        >
                            See Software Solution →
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
