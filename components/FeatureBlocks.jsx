import {
  CardsIcon,
  MagicIcon,
  DoorIcon,
  ShuffleIcon,
  SignalIcon,
  TalkingIcon,
} from "../svg/FeatureIcons";

// Built with Vivid (https://vivid.lol) ⚡️

export const FeatureBlocks = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="relative z-20 gap-16 px-12 py-24 mx-auto text-center flex flex-col max-w-7xl">
        {/* Header */}
        <div className="gap-4 flex flex-col">
          <h2
            data-aos="zoom-y-out"
            className="font-bold leading-tight tracking-tighter text-4xl md:text-6xl text-gray-800 dark:text-gray-100"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-teal">
              portfolio
            </span>
          </h2>
          <p
            data-aos="zoom-y-out"
            data-aos-delay="150"
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400"
          >
            select portfolio companies
          </p>
        </div>
        {/* Blocks */}
        <div className="grid items-start gap-6 lg:grid-cols-3">
          {/* Block 1 */}
          <div className="relative items-center flex-1 gap-1 p-6 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex flex-col">
          <div className="flex justify-center">
            <img
              className="rounded-full"
              src="icons/supabase.jpg"
              alt="image"
              width="50"
              height="50"
            />
          </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              <a
                href="https://supabase.com"
                className="text-blue-500 hover:text-blue-800"
              >
                supabase
              </a>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              supabase is an open source firebase alternative. start your project with a
              postgres database, authentication, instant APIs, edge functions, realtime
              subscriptions, and storage.
            </p>
          </div>
          {/* Block 2 */}
          <div className="relative items-center flex-1 gap-1 p-6 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex flex-col">
          <div className="flex justify-center">
            <img
              className="rounded-full"
              src="icons/ashby.jpg"
              alt="image"
              width="50"
              height="50"
            />
          </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              <a href="https://ashbyhq.com" className="text-blue-500 hover:text-blue-800">
                ashby
              </a>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              ashby helps scaling companies achieve their ambitious growth targets. with
              ashby, teams of all sizes can run a fast and efficient hiring process.
            </p>
          </div>
          {/* Block 3 */}
          <div className="relative items-center flex-1 gap-1 p-6 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex flex-col">
          <div className="flex justify-center">
            <img
              className="rounded-full"
              src="icons/census.jpg"
              alt="image"
              width="50"
              height="50"
            />
          </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              <a
                href="https://getcensus.com"
                className="text-blue-500 hover:text-blue-800"
              >
                census
              </a>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              census delivers trusted data from the warehouse into all your operational
              tools, so every team can act on it. supercharge your automation, workflows,
              and personalization with operational analytics, no engineering favors or
              custom scripts required.
            </p>
          </div>
          {/* Block 4 */}
          <div className="relative items-center flex-1 gap-1 p-6 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex flex-col">
            <div className="flex justify-center">
              <img
                className="rounded-full"
                src="icons/bigeye.jpg"
                alt="image"
                width="50"
                height="50"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              <a
                href="https://bigeye.com"
                className="text-blue-500 hover:text-blue-800"
              >
                bigeye
              </a>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              bigeye is an industry-leading data observability platform that gives data
              engineering and science teams the tools they need to ensure their data is
              always fresh, accurate and reliable
            </p>
          </div>
          {/* Block 5 */}
          <div className="relative items-center flex-1 gap-1 p-6 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex flex-col">
          <div className="flex justify-center">
            <img
              className="rounded-full"
              src="icons/orb.png"
              alt="image"
              width="50"
              height="50"
            />
          </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              <a href="https://withorb.com" className="text-blue-500 hover:text-blue-800">
                orb
              </a>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              orb is developer-first billing infrastructure built to help companies
              succeed with usage-based pricing.
            </p>
          </div>
          {/* Block 6 */}
          <div className="relative items-center flex-1 gap-1 p-6 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex flex-col">
          <div className="flex justify-center">
            <img
              className="rounded-full"
              src="icons/graphite.jpg"
              alt="image"
              width="50"
              height="50"
            />
          </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              <a
                href="https://graphite.dev"
                className="text-blue-500 hover:text-blue-800"
              >
                graphite
              </a>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              graphite is a fast, simple code review platform designed for engineers who
              want to write and review smaller pull requests, stay unblocked, and ship
              faster
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
