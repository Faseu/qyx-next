import React, {useEffect, useRef} from 'react';
import Lottie from 'lottie-web';
import  AOS from 'animate.css';

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
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 40, // distance to the element when triggering the animation (default is 0)
                mobile: false, // trigger animations on mobile devices (default is true)
                live: false, // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
        return () => {
            animation.destroy(); // 清理动画资源
        };
    }, []);

    return (
        <main className='page'>
            <section className='section1'>
                <div className="introduced">
                    <p className='flip-horizontal-bottom1'>Hello, my</p>
                    <p className='flip-horizontal-bottom2'>name&#x27;s zhang Xingxing.</p>
                    <p className='flip-horizontal-bottom3'>I&#x27;m a pharmacists</p>
                    <p className='flip-horizontal-bottom4'>Stack Developer.</p>
                </div>
                <div className="animation_box">
                    <div ref={animationContainer}/>
                </div>
            </section>
            <section>
                <div className="wow flip-horizontal-bottom1" data-wow-duration="1s" data-wow-delay="1s">
                    <div>
                        <p>Welcome to my profile! My name is David, a software
                            developer dedicated to guiding you through the perils of the web and tech. Technology can be
                            scary,
                            but it doesn't have to be. Let me help you.</p>
                        <br/>
                        <p>I am currently pursuing a
                            <span>Master of Computer Science from the University of Pennsylvania</span>
                            , and have expertise in
                            <span>full-stack web development and software engineering.</span>
                        </p><br/><p>I come from a unique background with a Bachelor's of Science in Kinesiology from the
                        University of
                        Alberta. As I pursued my studies, I explored my passion for tech by self-teaching myself web
                        development, diving into Linux/Unix, and using cool tools like Vim.</p>
                        <br/>
                        <p>I am passionate, and love continuous learning. Don't be afraid to reach out!</p>
                    </div>
                </div>
            </section>

        </main>
    );
}
