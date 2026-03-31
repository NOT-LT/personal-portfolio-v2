import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

// ─── Types ──────────────────────────────────────────────────────────────────

export interface HeroContent {
    name: string;
    tagline: string;
    bioPart1: string;
    universityName: string;
    universityUrl: string;
    bioPart2: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
    avatar?: string;
}

export interface Award {
    title: string;
    org: string;
    desc: string;
}

export interface Education {
    degree: string;
    school: string;
    period: string;
}

export interface AboutContent {
    heading: string;
    bio: string[];
    skills: string[];
    awards: Award[];
    education: Education;
    cvHref: string;
}

export interface Job {
    date: string;
    title: string;
    shortTitle: string;
    company: string;
    location: string;
    range: string;
    url: string;
    bullets: string[];
}

export interface WorkContent {
    jobs: Job[];
}

export interface ProjectData {
    title: string;
    desc: string;
    tags: string[];
    github?: string;
    external?: string;
    order: number;
    icon: string;
}

export interface ProjectsContent {
    githubProfileUrl: string;
    projects: ProjectData[];
}

export interface SiteContent {
    siteUrl: string;
    siteName: string;
    jobTitle: string;
    description: string;
    ogImage: string;
    githubProfileUrl: string;
    sameAs: string[];
    socials: Socials;
}

export interface Socials {
    github: string;
    linkedin: string;
    instagram: string;
}

export interface ContactFooterContent {
    eyebrow: string;
    titleTop: string;
    titleBottom: string;
    description: string;
    primaryCta: { label: string };
    secondaryCta: { label: string; href: string };
    signature: string;
    copyright: string;
}

export interface ContactContent {
    email: string;
    message: string;
    socials: Socials;
    footer: ContactFooterContent;
}

// ─── Loaders ────────────────────────────────────────────────────────────────

export function getHeroContent(): HeroContent {
    const raw = fs.readFileSync(path.join(contentDir, 'hero.mdx'), 'utf-8');
    const { data } = matter(raw);
    return data as HeroContent;
}

export function getAboutContent(): AboutContent {
    const raw = fs.readFileSync(path.join(contentDir, 'about.mdx'), 'utf-8');
    const { data, content } = matter(raw);
    const bio = content
        .trim()
        .split(/\n\n+/)
        .map(p => p.replace(/\n/g, ' ').trim())
        .filter(Boolean);
    return { ...data, bio } as AboutContent;
}

export function getWorkContent(): WorkContent {
    const raw = fs.readFileSync(path.join(contentDir, 'work.mdx'), 'utf-8');
    const { data } = matter(raw);
    return data as WorkContent;
}

export function getProjectsContent(): ProjectsContent {
    const projectsDir = path.join(contentDir, 'projects');
    const files = fs.readdirSync(projectsDir).filter(f => f.endsWith('.mdx'));
    const site = getSiteContent();

    const projects: ProjectData[] = files.map(file => {
        const raw = fs.readFileSync(path.join(projectsDir, file), 'utf-8');
        const { data, content } = matter(raw);
        return {
            ...(data as Omit<ProjectData, 'icon'>),
            icon: content.trim(),
        };
    });

    projects.sort((a, b) => a.order - b.order);

    return {
        githubProfileUrl: site.githubProfileUrl,
        projects,
    };
}

export function getSiteContent(): SiteContent {
    const raw = fs.readFileSync(path.join(contentDir, 'site.mdx'), 'utf-8');
    const { data } = matter(raw);
    return data as SiteContent;
}

export function getContactContent(): ContactContent {
    const raw = fs.readFileSync(path.join(contentDir, 'contact.mdx'), 'utf-8');
    const { data, content } = matter(raw);
    const site = getSiteContent();
    return {
        ...(data as Omit<ContactContent, 'message' | 'socials'>),
        socials: site.socials,
        message: content.trim(),
    };
}
