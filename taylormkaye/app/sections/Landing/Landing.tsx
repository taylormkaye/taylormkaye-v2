'use client';

import Parallax from '@/app/components/Parallax/Parallax';
import Line from '@/app/components/Line';
import Button from '@/app/components/Button/Button';
import IconArrowDown from '@/app/components/Icons/IconArrowDown';

const Landing = () => {
    const onClick = () => {
        document.getElementById('about')?.scrollIntoView();
    };
    return (
        <div className="flex h-screen min-h-[550px] flex-col justify-center">
            <div className="ml-1 mt-[20%]">
                <h3 className="text-2xl md:text-3xl">Hello My Name Is:</h3>
                <div
                    className="flex flex-row pl-1 text-6xl sm:text-7xl md:text-8xl  lg:text-9xl"
                    id="name-container"
                >
                    <h1 className="animate-bounce opacity-0 delay-75 [--delay:50ms]">
                        Taylor&nbsp;
                    </h1>
                    <h1 className="animate-bounce opacity-0 delay-300 [--delay:350ms]">
                        Kaye
                    </h1>
                </div>
            </div>
            <Parallax
                speedCoef={-0.3}
                className="mt-[1.5vw] h-[25vh] bg-bg-primary"
            >
                <Line />
            </Parallax>
            <Button
                onClick={onClick}
                className="absolute bottom-10 left-[47.5%] ml-[-12.5px] h-[25px] w-[25px] bg-transparent"
            >
                <IconArrowDown />
            </Button>
        </div>
    );
};

export default Landing;
