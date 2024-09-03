import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import Image from 'next/image';
import 'hover.css/css/hover-min.css';

// @ts-ignore
import { WOW } from 'wowjs';
import animationData from './animationData.json'; // 动画数据JSON

export default function Home() {
  const animationContainer = useRef(null);

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: animationContainer.current as unknown as HTMLElement,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData, // 动画数据
    });
    if (typeof window !== 'undefined') {
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
    <main className="page">
      <section className="section">
        <div className="introduced">
          <p className="wow flip-horizontal-bottom">Hello, my</p>
          <p className="wow flip-horizontal-bottom" data-wow-delay="0.4s">
            name&apos;s Faisal.
          </p>
          <p className="wow flip-horizontal-bottom" data-wow-delay="0.8s">
            I&apos;m a Full
          </p>
          <p className="wow flip-horizontal-bottom" data-wow-delay="1.2s">
            Stack Developer.
          </p>
        </div>
        <div className="animation_box">
          <div ref={animationContainer} />
        </div>
      </section>
      <section className="section_other">
        <div className="introduction_info">
          <div className="wow fade-in-top">
            <p className="sm:text-[18px] text-[14px] text-base-content uppercase tracking-wider">
              Introduction
            </p>
            <h2 className="text-accent font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
              Hello.
            </h2>
          </div>
          <div className="mt-4 text-base-content text-[17px] max-w-3xl leading-[30px]">
            <p>
              Welcome to my profile! My name is David, a software developer
              dedicated to guiding you through the perils of the web and tech.
              Technology can be scary, but it doesn&apos;t have to be. Let me
              help you.
            </p>
            <br />
            <p>
              I am currently pursuing a
              <span>
                Master of Computer Science from the University of Pennsylvania
              </span>
              , and have expertise in
              <span className="text-accent">
                full-stack web development and software engineering.
              </span>
            </p>
            <br />
            <p>
              I come from a unique background with a Bachelor&apos;s of Science
              in Kinesiology from the University of Alberta. As I pursued my
              studies, I explored my passion for tech by self-teaching myself
              web development, diving into Linux/Unix, and using cool tools like
              Vim.
            </p>
            <br />
            <p>
              I am passionate, and love continuous learning. Don&apos;t be
              afraid to reach out!
            </p>
          </div>
        </div>
        <div className="field_list">
          <div className="hvr-grow-shadow">
            <div className="green-pink-gradient rounded-[20px]  fade-in-left wow">
              <div className="bg-base-200 rounded-[20px] py-5 px-12 w-[248px] min-h-[280px] flex justify-evenly items-center flex-col ">
                <Image
                  className="field_list_item_img"
                  src="/img/home/field1.png"
                  alt=""
                  width={64}
                  height={64}
                  priority
                />
                <h3 className="text-accent text-[20px] font-bold text-center">
                  Full-Stack Web Developer
                </h3>
                <p className="text-base-content text-[15px] text-center py-2">
                  Beautiful dynamic websites
                </p>
              </div>
            </div>
          </div>
          <div className="hvr-grow-shadow">
            <div
              className="green-pink-gradient rounded-[20px]  fade-in-left wow"
              data-wow-delay="0.4s"
            >
              <div className="bg-base-200 rounded-[20px] py-5 px-12 w-[248px] min-h-[280px] flex justify-evenly items-center flex-col ">
                <Image
                  className="field_list_item_img"
                  src="/img/home/field2.png"
                  alt=""
                  width={64}
                  height={64}
                  priority
                />
                <h3 className="text-accent text-[20px] font-bold text-center">
                  Full-Stack Web Developer
                </h3>
                <p className="text-base-content text-[15px] text-center py-2">
                  Beautiful dynamic websites
                </p>
              </div>
            </div>
          </div>
          <div className="hvr-grow-shadow">
            <div
              className="green-pink-gradient rounded-[20px]  fade-in-left wow"
              data-wow-delay="0.8s"
            >
              <div className="bg-base-200 rounded-[20px] py-5 px-12 w-[248px] min-h-[280px] flex justify-evenly items-center flex-col ">
                <Image
                  className="field_list_item_img"
                  src="/img/home/field3.png"
                  alt=""
                  width={64}
                  height={64}
                  priority
                />
                <h3 className="text-accent text-[20px] font-bold text-center">
                  Full-Stack Web Developer
                </h3>
                <p className="text-base-content text-[15px] text-center py-2">
                  Beautiful dynamic websites
                </p>
              </div>
            </div>
          </div>
          <div className="hvr-grow-shadow">
            <div
              className="green-pink-gradient rounded-[20px]  fade-in-left wow"
              data-wow-delay="1.2s"
            >
              <div className="bg-base-200 rounded-[20px] py-5 px-12 w-[248px] min-h-[280px] flex justify-evenly items-center flex-col ">
                <Image
                  className="field_list_item_img"
                  src="/img/home/field4.png"
                  alt=""
                  width={64}
                  height={64}
                  priority
                />
                <h3 className="text-accent text-[20px] font-bold text-center">
                  Full-Stack Web Developer
                </h3>
                <p className="text-base-content text-[15px] text-center py-2">
                  Beautiful dynamic websites
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="experience py-10 sm:px-16 px-6 sm:py-16 max-w-7xl mx-auto z-0 flex-col">
          <div className="experience_header">
            <p className="sm:text-[18px] text-[14px] text-base-content uppercase tracking-wider">
              What I have done so far
            </p>
            <h2 className="text-accent font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
              Learning Journey.
            </h2>
            <p className="mt-3 text-base-content text-[17px] max-w-2xl leading-[30px]">
              I started my journey as a self-taught developer, and then pivoted
              to formal education. I continue to learn outside of school.
            </p>
          </div>
          <div className="vertical-timeline">
            <div className="vertical-timeline-element">
              <div className="vertical-timeline-element-icon bounce-in-fwd wow">
                <div className="flex justify-center items-center w-full h-full rounded-[50%]  bg-black">
                  <Image
                    className="field_list_item_img"
                    src="/img/home/experience1.png"
                    alt=""
                    width={64}
                    height={64}
                    priority
                  />
                </div>
              </div>
              <div className="vertical-timeline-element-content fade-in-left wow">
                <div className="vertical-timeline-element-content-arrow"></div>
                <div className="bg-base-300">
                  <h3 className="text-accent text-[24px] font-bold">
                    Software Developer
                  </h3>
                  <p className="text-base-content text-[16px] font-semibold">
                    Michetti Information Solutions Inc.
                  </p>
                  <ul className="mt-5 list-disc ml-5 space-y-2">
                    <li className="text-base-content text-[14px] pl-1 tracking-wider">
                      .NET developer working on cloud computing, Azure, Windows
                      Applications, and web applications utilizing the .NET Core
                      framework from Microsoft.
                    </li>
                    <li className="text-base-content text-[14px] pl-1 tracking-wider">
                      Working on database management and document generation for
                      multiple law firms across Canada.
                    </li>
                    <li className="list-none">
                      <a
                        className="btn text-accent"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.cis.upenn.edu/ta-information/"
                      >
                        Source Link
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="vertical-timeline-element-date">
                  August 2024 - Present
                </div>
              </div>
            </div>
            <div className="vertical-timeline-element vertical-timeline-element-right">
              <div className="vertical-timeline-element-icon bounce-in-fwd wow">
                <div className="flex justify-center items-center w-full h-full rounded-[50%]  bg-white">
                  <Image
                    className="field_list_item_img"
                    src="/img/home/experience2.png"
                    alt=""
                    width={64}
                    height={64}
                    style={{ width: '60%', height: 'auto' }}
                  />
                </div>
              </div>
              <div className="vertical-timeline-element-content fade-in-right wow">
                <div className="vertical-timeline-element-content-arrow-left"></div>
                <div className="bg-base-300">
                  <h3 className="text-accent text-[24px] font-bold">
                    Teaching Assistant
                  </h3>
                  <p className="text-base-content text-[16px] font-semibold">
                    University of Pennsylvania
                  </p>
                  <ul className="mt-5 list-disc ml-5 space-y-2">
                    <li className="text-base-content text-[14px] pl-1 tracking-wider">
                      Helped students solidify their understanding of data
                      structures and algorithms through interactive weekly
                      office hours and student forums, assisting an average of
                      20+ students per week.
                    </li>
                    <li className="text-base-content text-[14px] pl-1 tracking-wider">
                      Led an engaging open recitation session for key topics,
                      fostering active student participation and potentially
                      contributing to improved exam performance.
                    </li>
                    <li className="text-base-content text-[14px] pl-1 tracking-wider">
                      Provided constructive feedback on graded assignments and
                      exams for a class of 100+ students, maintaining a
                      consistent grading rubric and facilitating student
                      improvement.
                    </li>
                    <li className="list-none">
                      <a
                        className="btn text-accent"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.cis.upenn.edu/ta-information/"
                      >
                        Source Link
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="vertical-timeline-element-date-left">
                  May 2024 - Present
                </div>
              </div>
            </div>
            <div className="vertical-timeline-element">
              <span className="vertical-timeline-element-icon bounce-in-fwd wow">
                <div className="flex justify-center items-center w-full h-full rounded-[50%]  bg-black">
                  <Image
                    className="field_list_item_img"
                    src="/img/home/experience3.png"
                    alt=""
                    width={64}
                    height={64}
                    priority
                  />
                </div>
              </span>
              <div className="vertical-timeline-element-content fade-in-left wow">
                <div className="vertical-timeline-element-content-arrow"></div>
                <div className="bg-base-300">
                  <h3 className="text-accent text-[24px] font-bold">
                    Engineer Manager (Mobile App Development)
                  </h3>
                  <p className="text-base-content text-[16px] font-semibold">
                    Develop for Good | Firm Collective
                  </p>
                  <ul className="mt-5 list-disc ml-5 space-y-2">
                    <li className="text-base-content text-[14px] pl-1 tracking-wider">
                      Applied full-stack development skills to research, scope,
                      develop, and demo a real-world solution for a non-profit
                      organization within a compressed 16-week timeframe.
                    </li>
                    <li className="text-base-content text-[14px] pl-1 tracking-wider">
                      Implemented a React Native multi-platform mobile diary app
                      whose purpose is to bring people together.
                    </li>
                    <li className="text-base-content text-[14px] pl-1 tracking-wider">
                      Responsibilities include task delegation, code review,
                      conflict resolution, communication, and project vision.
                    </li>
                    <li className="list-none">
                      <a
                        className="btn text-accent"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.developforgood.org/?gad_source=1"
                      >
                        Source Link
                      </a>
                    </li>
                  </ul>
                </div>
                <span className="vertical-timeline-element-date">
                  May 2024 - September 2024
                </span>
              </div>
            </div>
            <div className="vertical-timeline-element vertical-timeline-element-right">
              <span className="vertical-timeline-element-icon bounce-in-fwd wow">
                <div className="flex justify-center items-center w-full h-full rounded-[50%]  bg-white">
                  <Image
                    className="field_list_item_img"
                    src="/img/home/experience4.jpg"
                    alt=""
                    width={64}
                    height={64}
                    priority
                    style={{ width: '60%', height: 'auto' }}
                  />
                </div>
              </span>
              <div className="vertical-timeline-element-content fade-in-right wow">
                <div className="vertical-timeline-element-content-arrow-left"></div>
                <div className="bg-base-300">
                  <h3 className="text-accent text-[24px] font-bold">
                    React Developer, Front-end Team Lead
                  </h3>
                  <p className="text-base-content text-[16px] font-semibold">
                    SkyIT Services
                  </p>
                  <ul className="mt-5 list-disc ml-5 space-y-2">
                    <li className="text-base-content text-[14px] pl-1 tracking-wider">
                      Led the successful migration of 3 complex React projects
                      into a single, streamlined monorepo, improving code
                      maintainability and collaboration
                    </li>
                    <li className="text-base-content text-[14px] pl-1 tracking-wider">
                      Collaborated with the cybersecurity team to implement
                      multi-factor authentication, enhancing login security for
                      all users
                    </li>
                    <li className="text-base-content text-[14px] pl-1 tracking-wider">
                      Boosted team productivity by 15% through the creation of
                      video tutorials, comprehensive documentation updates in
                      READMEs, and ongoing mentorship programs.
                    </li>
                    <li className="list-none">
                      <a
                        className="btn text-accent"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.skyit.services/"
                      >
                        Source Link
                      </a>
                    </li>
                  </ul>
                </div>
                <span className="vertical-timeline-element-date-left">
                  Feb 2024 - May 2024
                </span>
              </div>
            </div>
            <div className="vertical-timeline-element">
              <span className="vertical-timeline-element-icon bounce-in-fwd wow">
                <div className="flex justify-center items-center w-full h-full rounded-[50%]  bg-white">
                  <Image
                    className="field_list_item_img"
                    src="/img/home/experience1.png"
                    alt=""
                    width={64}
                    height={64}
                    priority
                  />
                </div>
              </span>
              <div className="vertical-timeline-element-content fade-in-left wow">
                <div className="vertical-timeline-element-content-arrow"></div>
                <div className="bg-base-300">
                  <h3 className="text-accent text-[24px] font-bold">
                    Master of Computer Science
                  </h3>
                  <p className="text-base-content text-[16px] font-semibold">
                    University of Pennsylvania
                  </p>
                  <ul className="mt-5 list-disc ml-5 space-y-2">
                    <li className="text-base-content text-[14px] pl-1 tracking-wider">
                      A Master&apos;s degree from the Ivy league University of
                      Pennsylvania, providing foundational knowledge in computer
                      science and math concepts as well as higher level
                      knowledge based on chosen electives
                    </li>
                    <li className="text-base-content text-[14px] pl-1 tracking-wider">
                      Courses taken so far: Software Development, Discrete Math,
                      Computer Systems, Data Structures &amp; Software Design
                    </li>
                    <li className="text-base-content text-[14px] pl-1 tracking-wider">
                      Gained expertise in Python, Java, and C
                    </li>
                    <li className="list-none">
                      <a
                        className="btn text-accent"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.upenn.edu/"
                      >
                        Source Link
                      </a>
                    </li>
                  </ul>
                </div>
                <span className="vertical-timeline-element-date">
                  Sept 2023 - Present
                </span>
              </div>
            </div>
            <div className="vertical-timeline-element vertical-timeline-element-right">
              <span className="vertical-timeline-element-icon bounce-in-fwd wow">
                <div className="flex justify-center items-center w-full h-full rounded-[50%]  bg-white">
                  <Image
                    className="field_list_item_img"
                    src="/img/home/experience5.png"
                    alt=""
                    width={64}
                    height={64}
                    priority
                  />
                </div>
              </span>
              <div className="vertical-timeline-element-content fade-in-right wow">
                <div className="vertical-timeline-element-content-arrow-left"></div>
                <div className="bg-base-300">
                  <h3 className="text-accent text-[24px] font-bold">
                    Bachelor&apos;s of Science in Kinesiology
                  </h3>
                  <p className="text-base-content text-[16px] font-semibold">
                    University of Alberta
                  </p>
                  <ul className="mt-5 list-disc ml-5 space-y-2">
                    <li className="text-base-content text-[14px] pl-1 tracking-wider">
                      A 4-year bachelors degree focusing on human movement,
                      health, anatomy, physiology, and rehabilitation.
                    </li>
                    <li className="text-base-content text-[14px] pl-1 tracking-wider">
                      Completed a 4 month practicum at end of year working with
                      clients, performing trigger-point release and going
                      through rehabilitation exercises.
                    </li>
                    <li className="text-base-content text-[14px] pl-1 tracking-wider">
                      Participated in multiple Kinesiology competitions and was
                      awarded $3500 total.
                    </li>
                    <li className="text-base-content text-[14px] pl-1 tracking-wider">
                      Worked with the Bears Hockey team and was awarded the
                      Exceptional Varsity Therapist Scholarship.
                    </li>
                    <li className="list-none">
                      <a
                        className="btn text-accent"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.ualberta.ca/kinesiology-sport-recreation/programs/undergraduate-programs/bachelor-of-science-in-kinesiology.html"
                      >
                        Source Link
                      </a>
                    </li>
                  </ul>
                </div>
                <span className="vertical-timeline-element-date-left">
                  Sept 2018 - May 2022
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
