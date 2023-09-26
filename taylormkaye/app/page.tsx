import Landing from './sections/Landing/Landing';
import About from './sections/About/About';
import Nav from './sections/Nav';
import Projects from './sections/Projects/projects';
import Contact from './sections/Contact/contact';

const Home = async () => {
    // const projects = await getProjects();

    return (
        <>
            <Nav />
            <main className="ml-auto mr-auto w-[95vw] min-w-[350px] max-w-5xl sm:w-[80vw]">
                <Landing />
                <About />
                <Projects />
                <Contact />
            </main>
        </>
    );
};

// max-width: 960px;
// min-width: 350px;
// width: 80vw;

export default Home;
