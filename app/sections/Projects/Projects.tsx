import { getProjects } from '@/sanity/sanity-utils';
import ProjectItem from '@/app/components/ProjectItem/ProjectItem';

const Projects = async () => {
    const projects = await getProjects();

    return (
        <div className="relative mt-24">
            <div className="absolute top-[-100px]" id="projects" />
            <h2 className="mb-10">WORK</h2>
            <ul className="flex flex-col gap-20">
                {projects.map((project) => (
                    <ProjectItem project={project} key={project._id} />
                ))}
            </ul>
        </div>
    );
};

export default Projects;
