import React, {useEffect, useRef} from 'react';
import Lottie from 'lottie-web';

// @ts-ignore
import {WOW} from 'wowjs';
import animationData from './animationData.json'; // 动画数据JSON

export default function Home() {
    const animationContainer = useRef(null);

    useEffect(() => {
        const animation = Lottie.loadAnimation({
            container: animationContainer.current as unknown as HTMLElement,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData // 动画数据
        });
        if (typeof window !== "undefined") {
            const wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 40,
                mobile: false,
                live: false,
            });
            wow.init();
        }
        return () => {
            animation.destroy(); // 清理动画资源
        };
    }, []);

    return (
        <main className='page'>
            <section className='section'>
                <div className="introduced">
                    <p className='wow flip-horizontal-bottom'>Hello, my</p>
                    <p className='wow flip-horizontal-bottom'  data-wow-delay="0.4s">name&apos;s Faisal.</p>
                    <p className='wow flip-horizontal-bottom'  data-wow-delay="0.8s">I&apos;m a Full</p>
                    <p className='wow flip-horizontal-bottom'  data-wow-delay="1.2s">Stack Developer.</p>
                </div>
                <div className="animation_box">
                    <div ref={animationContainer}/>
                </div>
            </section>
            <section className='section_other'>
                <div className='introduction_info'>
                    <div className='wow fade-in-top'>
                        <p className='sm:text-[18px] text-[14px] text-base-content uppercase tracking-wider'>Introduction</p>
                        <h2 className='text-accent font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Hello.</h2>
                    </div>
                    <div className='mt-4 text-base-content text-[17px] max-w-3xl leading-[30px]'>
                        <p>Welcome to my profile! My name is David, a software
                            developer dedicated to guiding you through the perils of the web and tech. Technology can be
                            scary,
                            but it doesn&apos;t have to be. Let me help you.</p>
                        <br/>
                        <p>I am currently pursuing a
                            <span>Master of Computer Science from the University of Pennsylvania</span>
                            , and have expertise in
                            <span className='text-accent'>full-stack web development and software engineering.</span>
                        </p><br/><p>I come from a unique background with a Bachelor&apos;s of Science in Kinesiology
                        from the
                        University of
                        Alberta. As I pursued my studies, I explored my passion for tech by self-teaching myself web
                        development, diving into Linux/Unix, and using cool tools like Vim.</p>
                        <br/>
                        <p>I am passionate, and love continuous learning. Don&apos;t be afraid to reach out!</p>
                    </div>

                </div>
                <div className='field_list'>
                    <div className='green-pink-gradient bg-base-200 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'></div>
                    <div className='green-pink-gradient bg-base-200 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'></div>
                    <div className='green-pink-gradient bg-base-200 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'></div>
                    <div className='green-pink-gradient bg-base-200 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'></div>
                </div>
            </section>
        </main>
    );
}
