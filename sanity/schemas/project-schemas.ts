const project = {
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        { name: 'date', title: 'Date', type: 'date' },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'banner',
            title: 'Banner',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            option: { source: 'name' },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [{ name: 'alt', type: 'string' }],
        },
        { name: 'url', title: 'URL', type: 'url' },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{ type: 'string' }],
        },
    ],
};

export default project;
