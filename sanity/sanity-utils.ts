import { createClient, groq } from 'next-sanity';
import { Project } from './types';

export const getProjects = async (): Promise<Project[]> => {
    const client = createClient({
        projectId: 't4txo4o6',
        dataset: 'production',
    });

    return client.fetch(
        groq`*[_type == "project"]{
        __id,
        __createdAt, 
        date,
        name, 
        banner,
        "slug": slug.current, 
        "image": image.asset->url,
        url,
        content,
        technologies,
    } | order(date desc) `, 
    {cache: 'no-store'}
    );
};
