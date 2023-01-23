import Image from "next/image";

import { Quote } from "../svg/Quote";

// Built with Vivid (https://vivid.lol) ⚡️

export const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-gray-100 dark:bg-gray-800">
      <div className="relative z-20 flex flex-col gap-24 px-12 py-24 mx-auto text-center max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h2
            data-aos="zoom-y-out"
            className="text-4xl font-bold leading-tight tracking-tighter text-gray-800 md:text-6xl dark:text-gray-100"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-amber to-neon-red">
              loved
            </span>{" "}
            by founders
          </h2>
        </div>
        {/* Testimonials */}
        <div className="flex flex-col gap-20 md:gap-6 md:flex-row">
          {/* Testimonial 1 */}
          <div className="relative flex flex-col items-center flex-1 gap-6 p-12 pt-20 text-lg text-gray-700 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-50 dark:bg-gray-900 md:text-xl dark:text-gray-300">
            <div className="absolute mx-auto -top-10">
              <Quote />
              <Image
                className="rounded-full"
                src="/images/benji.jpg"
                width="96"
                height="96"
                alt="Will Gao"
              />
            </div>
            <blockquote className="font-medium">
            &quot;Alana has a reputation for truly providing hands on help with recruiting
              which is frankly the most valuable thing any investor could do. That&apos;s the
              reason we added her to the round and she's been living up to these
              expectations!&quot;
            </blockquote>
            <div className="">
              <cite className="not-italic font-bold">— Benji Encz</cite>
              <div className="text-base text-gray-600 dark:text-gray-400">
                <span>Founder & CEO</span>{" "}
                <a
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                  href="https://www.ashbyhq.com"
                >
                  @Ashby
                </a>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="relative flex flex-col items-center flex-1 gap-6 p-12 pt-20 text-lg text-gray-700 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-50 dark:bg-gray-900 md:text-xl dark:text-gray-300">
            <div className="absolute mx-auto -top-10">
              <Quote />
              <Image
                className="rounded-full"
                src="/images/marie.png"
                width="96"
                height="96"
                alt="Tejal Patwardhan"
              />
            </div>
            <blockquote className="font-medium">
            &quot;Alana and the base case community feel like family. From the customer
              introductions that led to our first paying customers, to the founding
              engineer dinners that connected us with our strongest candidates, to the
              product feedback that has helped shape our roadmap, she&apos;s there where we
              need it the most.&quot;
            </blockquote>
            <div className="">
              <cite className="not-italic font-bold">— Marie Schneegans</cite>
              <div className="text-base text-gray-600 dark:text-gray-400">
                <span>Founder & CEO</span>{" "}
                <a
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                  href="https://motif.land"
                >
                  @Motif
                </a>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="relative flex flex-col items-center flex-1 gap-6 p-12 pt-20 text-lg text-gray-700 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-50 dark:bg-gray-900 md:text-xl dark:text-gray-300">
            <div className="absolute mx-auto -top-10">
              <Quote />
              <Image
                className="rounded-full"
                src="/images/kshitij.jpg"
                width="96"
                height="96"
                alt="Veljko Muratovic"
              />
            </div>
            <blockquote className="font-medium">
            &quot;Alana has been an incredibly helpful investor and friend to us; her ability
              to be resourceful and persistent continues to be invaluable. We&apos;re extremely
              lucky to have her as an investor and friend of Orb.&quot;
            </blockquote>
            <div className="">
              <cite className="not-italic font-bold">— Kshitij Grover</cite>
              <div className="text-base text-gray-600 dark:text-gray-400">
                <span>Founder & CTO</span>{" "}
                <a
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                  href="https://www.withorb.com"
                >
                  @Orb
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
