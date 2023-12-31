import { PortableTextBlock } from 'sanity';

export type Project = {
    _id: string;
    _createdAt: Date;
    date: Date;
    name: string;
    banner: string[];
    slug: string;
    image: string;
    url: string;
    content: PortableTextBlock[];
    technologies: string[];
};
