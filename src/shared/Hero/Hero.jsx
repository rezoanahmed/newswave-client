import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-[70vh]" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                <div className="hero-overlay bg-black bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-4xl">
                        <h1 className="mb-5 text-5xl font-bold">News <span className="bg-blue px-4 rounded-md">Wave</span></h1>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'News Wave | Unfolding Stories, One Key at a Time!',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'News Wave | Reacting to News in Real Time with News Wave!',
                                1000,
                                'News Wave | Breaking News, Breaking Style!',
                                1000,
                                'News Wave | Typing the Future at News Wave!',
                                1000,
                                'News Wave | Dynamic Headlines, Dynamic Typing!',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;