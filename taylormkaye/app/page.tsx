import { getProjects } from '@/sanity/sanity-utils';
import Landing from './sections/Landing/Landing';
import About from './sections/About/About';

const Home = async () => {
    const projects = await getProjects();

    return (
        <main>
            <Landing />
            <About />
            {projects.map((project: any) => (
                <div key={project.id}>{project.name}</div>
            ))}
        </main>
    );
};

export default Home;
