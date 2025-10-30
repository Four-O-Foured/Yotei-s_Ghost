import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";

const App = () => {
  const [showContent, setshowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", {
      rotate: 88,
      duration: 2,
      transformOrigin: "50% 50%",
      ease: "Power3.easeInOut",
    }).to(".vi-mask-group", {
      y: -75,
      scale: 20,
      duration: 2,
      transformOrigin: "50% 50%",
      ease: "expo.easeInOut",
      delay: -1.8,
      opacity: 0,
      onUpdate: () => {
        if (tl.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          tl.kill();
          setshowContent(true);
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".landing", {
      rotate: 0,
      duration: 2,
      scale: 1,
      delay: -0.5,
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      rotate: 0,
      duration: 2,
      scale: 1.2,
      delay: -0.5,
      ease: "Expo.easeInOut",
    });
    gsap.to(".txt", {
      opacity: 1,
      delay: 0.5,
      ease: "Expo.easeInOut",
    });
    gsap.to(".samurai", {
      y: 0,
      delay: -0.2,
      ease: "power1.out",
    });

    gsap.to(".logos", {
      x: 0,
      delay: 0.8,
      ease: "power1.out",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", (e) => {
      const xAxis = (e.clientX / window.innerWidth - 0.5) * 40;
      const yAxis = (e.clientY / window.innerHeight - 0.5) * 40;

      gsap.to(".texts", {
        x: `${-50 - xAxis * 0.2}%`,
      });

      gsap.to(".bg", {
        x: xAxis * 1.3,
      });
      gsap.to(".leaves", {
        x: xAxis * 1.5,
        y: yAxis,
      });
      gsap.to(".samurai", {
        x: xAxis * 0.3,
      });
      gsap.to(".bloodscatter", {
        x: xAxis * 1.5,
        y: yAxis,
      });
    });
  }, [showContent]);
  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-100 w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="100"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="ghost"
                >
                  GHOST
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className="main w-full  overflow-hidden relative h-min-screen ">
          <div className="landing w-full  h-screen rotate-[-10deg] scale-[1.5]">
            <div className=" absolute top-0 left-0 z-20 navBar w-full px-8 py-4">
              <div className="logos flex gap-3 items-center -translate-x-80">
                <div className="ham flex flex-col gap-[5px] cursor-pointer w-fit ">
                  <div className="lines w-12 h-1.5 bg-[#493E2B]"></div>
                  <div className="lines w-8 h-1.5 bg-[#493E2B]"></div>
                  <div className="lines w-5 h-1.5 bg-[#493E2B]"></div>
                </div>
                <div className="w-fit">
                  <h1 className="text-xl text-[#493E2B]">Sucker Punch</h1>
                </div>
              </div>
            </div>

            <div className="images w-full h-screen overflow-hidden relative">
              <img
                className=" absolute bg top-0 left-0 w-full h-full object-cover rotate-[-10deg] scale-[1.5]"
                src="./bg2.jpg"
                alt=""
              />

              <div className="texts absolute left-1/2 text-[#493E2B] top-30 -translate-x-1/2">
                <h1 className="txt opacity-0 text-[10rem] leading-none ">
                  Ghost
                </h1>
                <h1 className="txt opacity-0 text-[10rem] leading-none ml-75 ">
                  of
                </h1>
                <h1 className="txt opacity-0 text-[10rem] leading-none ml-18 ">
                  Yotei
                </h1>
              </div>

              <img
                className=" absolute leaves scale-105 top-0 left-0 w-full h-full object-cover"
                src="./leaves3.png"
                alt=""
              />
              <img
                className=" absolute samurai top-0 left-[50%] w-170 translate-y-300 h-full object-cover translate-x-[-50%]"
                src="./samurai.png"
                alt=""
              />
            </div>

            <div className="absolute bottomBar h-25 overflow-hidden w-full bottom-0 left-0 px-8 py-4 z-20 bg-linear-to-t from-black to-transparent">
              <div className="flex scrollDown gap-3 items-center">
                <i className="ri-arrow-down-line text-4xl animate-bounce"></i>
                <h1 className="text-black text-2xl">Scroll Down</h1>
              </div>
            </div>
          </div>

          <div className="page2 w-full h-screen bg-black">
            <div className="w-full h-screen flex relative overflow-hidden">
              <div className="h-screen flex items-center w-1/2">
                <img src="./samurai_2.png" alt="" />
              </div>
              <div className="h-screen w-1/2 flex flex-col justify-center items-center">
                <div className="w-2/3 h-2/3 cntnr flex flex-col gap-5 justify-center relative ">
                  <div className="w-full flex items-center">
                    <img src="./ps5.png" className="w-1/2 " alt="" />
                    <h1 className="text-[2.5rem] text-shadow-white text-amber-50 ">
                      Exclusive
                    </h1>
                  </div>

                  <h4 className="text-2xl text-shadow-white text-amber-50">
                    Unleash your vengeance in Ghost of Yotei, an epic tale where
                    loss, honor, and legend collide. Roam misty Hokkaido as
                    Atsu, the Onryo, and carve your destiny through breathtaking
                    landscapes, relentless foes, and the haunting secrets of a
                    spirit torn between revenge and redemption.
                  </h4>

                  <Link
                    to="https://www.playstation.com/en-in/games/ghost-of-yotei/"
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-25 bg-amber-200 active:scale-90 hover:bg-amber-400 text-black font-bold py-2 px-4 rounded shadow-md shadow-amber-200"
                  >
                    <button className="btn btn-primary">Play Now</button>
                  </Link>
                </div>
              </div>

              <img
                className="w-full h-screen scale-105 absolute bloodscatter top-0 left-0 object-cover"
                src="./bloodScatter.png"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
