import './landing.scss';
import Shutter from '../../components/Parallax/Parallax';

const Landing = () => {
    return (
        <div className="landing">
            <h3>Hello My Name Is:</h3>
            <div className="landing__name-container" id="name-container">
                <h1>Taylor&nbsp;</h1>
                <h1>Kaye</h1>
            </div>
            <Shutter startingYPos={60} />
        </div>
    );
};

export default Landing;
