import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

// Register the ScrollTrigger plugin from GSAP
gsap.registerPlugin(ScrollTrigger);

/**
 * GsapScrollTrigger Component
 * This component demonstrates the use of GSAP's ScrollTrigger plugin to create animations triggered by scrolling.
 */
const GsapScrollTrigger = () => {
  const scrollRef = React.useRef(null);

  // TODO: Implement the gsap scroll trigger

  // Use the useGSAP hook to apply animations when the component mounts
  useGSAP(
    () => {
      // Get an array of all the child elements of the scrollRef
      const boxes = gsap.utils.toArray(scrollRef.current.children);
      
      // Apply animations to each box element
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 200 * boxes.indexOf(box), // Move elements horizontally based on index
          rotation: 360, // Rotate elements 360 degrees
          borderRadius: "100%", // Make elements fully rounded
          scale: 1.5, // Scale elements by 1.5
          ease: "power1.inOut", // Apply easing for smooth animation
          scrollTrigger: {
            trigger: box, // Element that triggers the animation
            start: "bottom bottom", // Start the animation when the bottom of the element hits the bottom of the viewport
            end: "top 20%", // End the animation when the top of the element is 20% from the top of the viewport
            scrub: true, // Smoothly scrub through the animation as the user scrolls
          },
        });
      });
    },
    { scope: scrollRef }, // Set the scope for the animations
    [scrollRef] // Dependencies for the hook
  );

  return (
    <main>
      <h1>GsapScrollTrigger</h1>

      <p className="mt-5 text-gray-500">
        Gsap Scroll Trigger is a plugin that allows you to create animations that are triggered by
        the scroll position of the page.
      </p>

      <p className="mt-5 text-gray-500">
        With ScrollTrigger, you can define various actions to be triggered at specific scroll
        points, such as starting or ending an animation, scrubbing through animations as the user
        scrolls, pinning elements to the screen, and more.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap scroll trigger
        </a>{" "}
        method.
      </p>

      <div className="w-full h-[70vh] flex justify-center items-center flex-col">
        <p className="text-center text-gray-500">Scroll down to see the animation</p>

        <svg
          className="animate-bounce mt-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7 7 7-7" />
        </svg>
      </div>

      <div className="mt-20 w-full h-screen" ref={scrollRef}>
        <div id="scroll-pink" className="scroll-box w-20 h-20 rounded-lg bg-pink-500" />
        <div id="scroll-orange" className="scroll-box w-20 h-20 rounded-lg bg-orange-500" />
        <div id="scroll-red" className="scroll-box w-20 h-20 rounded-lg bg-red-500" />
        <div id="scroll-blue" className="scroll-box w-20 h-20 rounded-lg bg-blue-500" />
        <div id="scroll-purple" className="scroll-box w-20 h-20 rounded-lg bg-purple-500" />
        <div id="scroll-green" className="scroll-box w-20 h-20 rounded-lg bg-green-500" />
      </div>
    </main>
  );
};

export default GsapScrollTrigger;