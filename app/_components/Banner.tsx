import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-primary">WEB & MOBILE</span>
                        <br /> <span className="ml-4 text-gray-700">DEVELOPER</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-gray-900 text-lg text-muted-foreground">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Purwanto
                        </span>
                        . A creative Programmer with 4+ years of
                        experience in building Interactive and responsive Web solutions.
                    </p>
                    <Button
                        as="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${GENERAL_INFO.email}&su=${GENERAL_INFO.emailSubject}&body=${GENERAL_INFO.emailBody}`}
                        variant="primary"
                        className="mt-9 text-white text-xl rounded-2xl banner-button slide-up-and-fade hover:text-slate-700 hover:bg-blue-200"
                    >
                        Hire Me
                    </Button>
                </div>

                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-6 text-center md:text-center">
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            3+
                        </h5>
                        <p className="text-gray-800">
                            Years of Experience
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            7+
                        </h5>
                        <p className="text-gray-800">
                            Completed Projects
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            10K+
                        </h5>
                        <p className="text-gray-800">Hours Worked</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
