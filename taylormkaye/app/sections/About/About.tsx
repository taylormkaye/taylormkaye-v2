import Line from '@/app/components/Line';
import Parallax from '@/app/components/Parallax/Parallax';

const About = () => {
    return (
        <div className="flex h-[66vh] flex-col justify-center text-xl md:text-2xl">
            <Parallax speedCoef={-0.3}>
                <div className="flex flex-col gap-10">
                    <p>
                        I am a software developer based in Saskatoon,
                        Saskatchewan specializing in building dynamic web
                        experiences.
                    </p>
                    <p>
                        My work includes developing the Sous Chef design system
                        at 7shifts, web projects with partner businesses, AI
                        applications in agricultural research, and modelling /
                        mapping of plant and insects populations.
                    </p>
                    <p>
                        Lets work together, inquiries by{' '}
                        <a
                            className="underline"
                            href="mailto: hello@taylormkaye.com"
                        >
                            email
                        </a>{' '}
                        / socials.
                    </p>
                </div>
            </Parallax>
            <Parallax speedCoef={-0.2}>
                <Line />
            </Parallax>
        </div>
    );
};

export default About;
