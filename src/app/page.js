import { Instrument_Serif, PT_Mono } from "next/font/google";
import Link from "next/link";
const instrument = Instrument_Serif({ weight: ["400"], subsets: ["latin"] });
const pt_mono = PT_Mono({ weight: ["400"], subsets: ["latin"] });
import clsx from "clsx";

export default () => (
  <div className="min-w-screen min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 to-purple-400 p-5">
    <div className="bg-gradient-to-br from-white/40 to-white/50 border border-white/50 p-[8px] rounded-[20px] backdrop-blur shadow-[0_20px_280px_rgba(0,0,0,0.2)]">
      <div className="bg-white rounded-[12px] p-8 md:p-20 shadow-[0_0_12px_rgba(0,0,0,0.2)] max-w-[550px]">
        <h2 className={clsx("text-4xl font-bold mb-3", instrument.className)}>
          Contains →
        </h2>
        <ul className="list-disc list-inside text-gray-500 space-y-1">
          <li>Next.js 14</li>
          <li>TailwindCSS</li>
          <li>Radix UI components</li>
          <li>Framer motion</li>
          <li>Phosphor Icons</li>
        </ul>
        <h2
          className={clsx("text-4xl font-bold mb-3 mt-8", instrument.className)}
        >
          How to use →
        </h2>
        <ul className="list-disc list-inside text-gray-500 space-y-1">
          <li>
            Clone this repo or use as template
            <span
              className={clsx(
                pt_mono.className,
                "text-black border-b border-gray-200"
              )}
            >
              `git clone
              git@github.com:rishimohan/nextjs-13-tailwind-starter.git`
            </span>
          </li>
          <li>
            Get started by editing{" "}
            <span
              className={clsx(
                pt_mono.className,
                "text-black border-b border-gray-200"
              )}
            >
              `src/app/page.js`
            </span>
          </li>
          <li>
            All the UI components are at{" "}
            <span
              className={clsx(
                pt_mono.className,
                "text-black border-b border-gray-200"
              )}
            >
              `ui/index.js`
            </span>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center text-sm py-2 text-gray-500">
        By{" "}
        <Link
          target="_blank"
          href="https://twitter.com/thelifeofrishi"
          className="underline ml-1 text-gray-800 hover:text-purple-600"
        >
          @thelifeofrishi
        </Link>
      </div>
    </div>
  </div>
);
