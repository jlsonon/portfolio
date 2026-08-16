export type Next_Page_Url = string;

export type Variant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
    | 'no-color';

export interface IProject {
    title: string;
    year: number;
    description: string;
    role: string;
    techStack: string[];
    thumbnail: string;
    longThumbnail: string;
    images: string[];
    slug: string;
    liveUrl?: string;
    status?: 'completed' | 'ongoing';
    category?: 'saas' | 'ai' | 'business' | 'all';
    clientName?: string;
    userBase?: string;
    problem?: string;
    solution?: string;
    architecture?: string[];
    outcomes?: string[];
}

export interface IExperience {
    title: string;
    company: string;
    duration: string;
    description?: string;
}

export interface IService {
    number: string;
    title: string;
    tagline: string;
    description: string;
    deliverables: string[];
    timeline: string;
    badge: string;
}

export interface IClient {
    name: string;
    category: string;
    description: string;
    badge: string;
    location?: string;
    projectSlug?: string;
    metrics?: string;
}


