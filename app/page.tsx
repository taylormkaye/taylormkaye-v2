import Landing from './sections/Landing/Landing';
import About from './sections/About/About';
import Nav from './sections/Nav';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
                theme="colored"
            />
        </>
    );
};

export default Home;
