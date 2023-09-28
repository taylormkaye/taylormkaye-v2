import Line from '@/app/components/Line';
import Parallax from '@/app/components/Parallax/Parallax';

const About = () => {
    return (
        <section className="flex min-h-[75vh] flex-col justify-center text-xl md:text-2xl">
            <Parallax speedCoef={-0.3}>
                <div className="flex flex-col justify-between gap-12 sm:flex-row">
                    <div className="flex flex-col gap-10 sm:w-[48%]">
                        <h2>ABOUT</h2>
                        <div className="flex flex-col gap-6">
                            <p>
                                I am a software developer based in Saskatoon,
                                Saskatchewan specializing in building dynamic
                                web experiences.
                            </p>
                            <p>
                                I make maintainable software by using battle
                                tested and well supported tooling to meet client
                                needs and ensure your website is designed with
                                the future in mind.
                            </p>
                            <p>
                                My work includes web development with partner
                                businesses, developing the Sous Chef design
                                system at 7shifts, AI applications in
                                agricultural research, and modeling / mapping of
                                plant and insects populations.
                            </p>
                            <p>
                                Lets work together - inquiries by{' '}
                                <a
                                    className="underline"
                                    href="mailto: hello@taylormkaye.com"
                                >
                                    email
                                </a>{' '}
                                / socials.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between sm:w-[48%]">
                        <div className="flex flex-col gap-10">
                            <h2>SERVICES</h2>
                            <ul>
                                <li>&#8227; Web design</li>
                                <li>&#8227; Static websites</li>
                                <li>
                                    &#8227; Dynamic websites with Sanity CMS
                                </li>
                                <li>&#8227; eCommerce via Shopify</li>
                                <li>&#8227; Website hosting & management</li>
                            </ul>
                        </div>
                        <img
                            src="computer.png"
                            alt="sketch of a computer"
                            className="ml-auto w-1/2"
                        />
                    </div>
                </div>
            </Parallax>
            <Parallax speedCoef={-0.2}>
                <Line />
            </Parallax>
        </section>
    );
};

export default About;
