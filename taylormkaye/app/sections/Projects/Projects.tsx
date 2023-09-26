import { getProjects } from '@/sanity/sanity-utils';
import ProjectItem from '@/app/components/ProjectItem/ProjectItem';
import Parallax from '@/app/components/Parallax/Parallax';

const Projects = async () => {
    const projects = await getProjects();

    return (
        <Parallax
            speedCoef={-0.1}
            className="flex min-h-screen flex-col gap-10"
        >
            <h2>WORK</h2>
            <ul className="gap-28">
                {projects.map((project) => (
                    <ProjectItem project={project} key={project._id} />
                ))}
            </ul>
        </Parallax>
    );
};

export default Projects;
