import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/**
 * GsapStagger Component
 * This component demonstrates the use of GSAP's stagger feature to animate a group of elements.
 */
const GsapStagger = () => {
  // Use the useGSAP hook to apply animations when the component mounts
  useGSAP(() => {
    gsap.to(".stagger-box", {
      y: 100, // Move elements 100px along the y-axis
      rotation: 360, // Rotate elements 360 degrees
      borderRadius: "100%", // Make elements fully rounded
      repeat: -1, // Repeat the animation indefinitely
      yoyo: true, // Reverse the animation on every alternate iteration
      ease: "power1.inOut", // Apply easing for smooth animation
      stagger: {
        each: 0.1, // Stagger the start of each animation by 0.1 seconds
        from: "center", // Start staggering from the center of the group
        grid: "auto", // Automatically arrange elements in a grid
      },
    });
  }, []);

  return (
    <main>
      <h1>GsapStagger</h1>

      <p className="mt-5 text-gray-500">
        GSAP stagger is a feature that allows you to apply animations with a staggered delay to a
        group of elements.
      </p>

      <p className="mt-5 text-gray-500">
        By using the stagger feature in GSAP, you can specify the amount of time to stagger the
        animations between each element, as well as customize the easing and duration of each
        individual animation. This enables you to create dynamic and visually appealing effects,
        such as staggered fades, rotations, movements, and more.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/resources/getting-started/Staggers"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          Gsap Stagger
        </a>{" "}
        feature.
      </p>

      <div className="mt-20">
        <div className="flex gap-5">
          {/* Elements to be animated with GSAP stagger */}
          <div className="w-20 h-20 bg-indigo-200 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-700 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-800 rounded-lg stagger-box" />
        </div>
      </div>
    </main>
  );
};

export default GsapStagger;