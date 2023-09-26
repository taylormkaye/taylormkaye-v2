import Landing from './sections/Landing/Landing';
import About from './sections/About/About';
import Nav from './sections/Nav';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';

const Home = async () => {
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

export default Home;
