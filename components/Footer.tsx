import { GENERAL_INFO } from '@/lib/data';

const Footer = async () => {
    const repoStats = await fetch('https://api.github.com/repos/kode412/portfolio', {
        next: {
            revalidate: 60 * 60, // 1 hour
        },
    })
   
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-2xl">Contact Me</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    EMAIL
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a
                    href="https://wa.me/6285752231685"
                    target='_blank'
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    WHATSAPP
                </a>

                <div className="">
                    <li className="leading-none text-gray-800">
                        Design & built With ReactJS

                        {/* <div className="flex items-center justify-center gap-5 pt-1">
                            <span className='flex items-center gap-2'>
                                <Star size={18} /> {stargazers_count}
                            </span>
                            <span className='flex items-center gap-2'>
                                <GitFork size={18} /> {forks_count}
                            </span>
                        </div> */}
                    </li>

                    {/* Note: If you are not Purwanto, use this copyright message instead */}
                    {/* <a href='https://github.com/kode412/portfolio' className="leading-none text-muted-foreground hover:underline hover:text-white">
                        Design & built by Purwanto <br />
                        Revised by YOUR NAME

                        <div className="flex items-center justify-center gap-5 pt-1">
                            <span className='flex items-center gap-2'>
                                <Star size={14} /> {stargazers_count}
                            </span>
                            <span className='flex items-center gap-2'>
                                <GitFork size={14} /> {forks_count}
                            </span>
                        </div>
                    </a> */}
                </div>

                
            </div>
        </footer>
    );
};

export default Footer;
