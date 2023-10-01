import { Project } from '@/sanity/types';
import { PortableText } from '@portabletext/react';

type Props = {
    project: Project;
};

const ProjectItem = ({ project }: Props) => {
    return (
        <li className="group flex flex-col justify-between gap-5 last:mb-0 md:flex-row md:gap-10 md:even:flex-row-reverse md:even:text-right">
            <a
                className="md:w-[48%]"
                target="_blank"
                rel="noreferrer"
                href={project.url}
            >
                <img
                    className="cursor-arrow transition-opacity ease-in hover:opacity-30"
                    src={project.image}
                    alt={''}
                />
            </a>
            <div className="relative h-full md:w-[48%]">
                <div className="absolute hidden h-full w-full flex-col transition duration-300 md:block md:opacity-100 md:group-hover:opacity-0">
                    {project.banner.map((bannerItem: any, index) => (
                        <span
                            key={index}
                            className="font-corben block text-6xl font-bold lg:text-7xl xl:text-8xl"
                        >
                            {bannerItem}
                        </span>
                    ))}
                </div>
                <div className="text-1xl flex h-full flex-col justify-between gap-6 text-xl md:opacity-0 md:group-hover:opacity-100 lg:text-2xl">
                    <a
                        className="font-semibold"
                        target="_blank"
                        rel="noreferrer"
                        href={project.url}
                    >
                        {project.name}
                    </a>
                    <PortableText value={project.content} />
                    <span>
                        {project.technologies.map((technology: any, index) =>
                            index === 0 ? `${technology}` : ` / ${technology}`
                        )}
                    </span>
                </div>
            </div>
        </li>
    );
};

export default ProjectItem;
