import { useState } from "react";
import axios from "axios";
import Image from "next/image";

import { ScatteredSpheres } from "../svg/ScatteredSpheres";
import MacBarSrc from "../public/images/mac-bar.png";

// Built with Vivid (https://vivid.lol) ⚡️

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailSubmitted(true);
    const res = await axios.post("/api/waitlist", { email });
    setEmail("");
    window.alert(`Email "${res.data.email}" submitted!`);
  };

  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="absolute inset-0 z-10 backdrop-blur-[200px]" />
      <div className="md:-left-[28rem] -left-40 -top-40 md:-top-[28rem] bg-neon-pink absolute opacity-60 dark:opacity-30 rounded-full w-96 h-96 md:w-[48rem] md:h-[48rem]" />
      <div className="md:-right-[28rem] -right-40 -bottom-40 md:-bottom-[28rem] bg-neon-blue absolute opacity-60 dark:opacity-30 rounded-full w-96 h-96 md:w-[48rem] md:h-[48rem]" />
      <div className="relative z-20 px-12 py-24 mx-auto flex flex-col max-w-7xl items-center justify-center min-h-screen 2xl:min-h-[1000px] h-fit gap-16">
        <div
          className="absolute inset-0 translate-y-32 pointer-events-none dark:invert dark:brightness-90"
          aria-hidden="true"
        >
          <ScatteredSpheres />
        </div>
        {/* Text */}
        <div className="z-10 flex flex-col gap-4 text-center">
          <h1
            data-aos="zoom-y-out"
            className="text-5xl font-bold leading-tight tracking-tighter text-gray-800 md:text-7xl dark:text-gray-100"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-blue">
              base case capital
            </span>
            <br />
          </h1>
          <p
            data-aos="zoom-y-out"
            data-aos-delay="150"
            className="text-lg text-gray-600 md:text-xl dark:text-gray-400"
          >
            an early-stage venture capital firm supporting the next generation of
            enterprise software
          </p>
          <div className="flex flex-col" data-aos="zoom-y-out" data-aos-delay="300">
            <form
              className="relative flex flex-row gap-2 md:gap-4"
              onSubmit={() => {
                window.location.href = "mailto:hi@basecase.vc";
              }}
            >
              {/* Line beneath label to hide outline */}
              <button
                type="submit"
                href="mailto:alana@basecase.vc"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                get in touch
              </button>
            </form>
          </div>
        </div>
        {/* Image */}
        <div
          data-aos="fade-left"
          className="relative flex flex-col justify-center w-full max-w-2xl overflow-hidden rounded-lg shadow-lg md:rounded-xl"
        ></div>
      </div>
    </section>
  );
};
