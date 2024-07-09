import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/**
 * GsapTimeline Component
 * 
 * This component demonstrates the usage of GSAP timeline for creating
 * complex, sequenced animations. It animates a yellow box through
 * various transformations in a repeating cycle.
 * 
 * @returns {JSX.Element} The rendered GsapTimeline component
 */
const GsapTimeline = () => {
  // Create a GSAP timeline with repeat and yoyo effect
  const timeline = gsap.timeline({
    repeat: -1, // Infinite repeat
    repeatDelay: 1,
    yoyo: true, // Reverse the animation on alternate cycles
  });

  useGSAP(() => {
    // First animation: Move right and rotate
    timeline.to("#yellow-box", {
      x: 250,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "power1.inOut",
    });

    // Second animation: Move down, scale up, and rotate
    timeline.to("#yellow-box", {
      y: 100,
      scale: 1.5,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });

    // Third animation: Move further right and change shape
    timeline.to("#yellow-box", {
      x: 500,
      rotation: 360,
      borderRadius: "8px",
      duration: 2,
      ease: "back.inOut",
    });
  }, [timeline]);

  return (
    <main>
      <h1>GsapTimeline</h1>

      {/* Explanatory text about GSAP timeline */}

      <p className="mt-5 text-gray-500">
        The <code>gsap.timeline()</code> method is used to create a timeline instance that can be
        used to manage multiple animations.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.timeline()</code> method is similar to the <code>gsap.to()</code>,{" "}
        <code>gsap.from()</code>, and <code>gsap.fromTo()</code> methods, but the difference is that
        the <code>gsap.timeline()</code> method is used to create a timeline instance that can be
        used to manage multiple animations, while the <code>gsap.to()</code>,{" "}
        <code>gsap.from()</code>, and <code>gsap.fromTo()</code> methods are used to animate
        elements from their current state to a new state, from a new state to their current state,
        and from a new state to a new state, respectively.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.timeline()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.timeline()
        </a>{" "}
        method.
      </p>

      <div className="mt-20 space-y-10">
        {/* Play/Pause button for the animation */}
        <button
          onClick={() => {
            timeline.paused() ? timeline.play() : timeline.pause();
          }}
        >
          Play/Pause
        </button>

        {/* The animated yellow box */}
        <div id="yellow-box" className="w-20 h-20 bg-yellow-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTimeline;
