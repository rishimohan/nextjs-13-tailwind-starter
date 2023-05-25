import * as RadixTooltip from "@radix-ui/react-tooltip";
import clsx from "clsx";
import { motion } from "framer-motion";

const Tooltip = ({
  children,
  text,
  delay,
  align,
  side,
  hasShortcut,
  triggerClass,
  noSpacing,
  sideOffset,
  alignOffset,
  show = true,
} = {}) => (
  <RadixTooltip.Provider>
    <RadixTooltip.Root delayDuration={delay ?? 200}>
      <RadixTooltip.Trigger
        className={`focus:outline-none ${triggerClass || ""}`}
        asChild
      >
        <div>{children}</div>
      </RadixTooltip.Trigger>

      {show ? (
        <RadixTooltip.Portal className="relative z-[99999]">
          <RadixTooltip.Content
            side={side ?? "top"}
            align={align ?? "center"}
            sideOffset={sideOffset ?? 5}
            alignOffset={alignOffset ?? 5}
            className="relative z-[110]"
          >
            <>
              <motion.div
                className={clsx(
                  "bg-gray-900 text-gray-200 text-[0.8rem] flex items-center rounded-lg dark:text-white dark:bg-gray-800 shadow-xl dark:shadow-black/20",
                  noSpacing ? "" : "px-2 py-1"
                )}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.2, type: "spring" },
                }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                {text}
                {hasShortcut ? (
                  <span className="font-mono text-[0.84rem] leading-none py-px ml-1 bg-gray-700 dark:bg-gray-700 rounded px-2 shadow-black/40 text-white">
                    {hasShortcut}
                  </span>
                ) : (
                  ""
                )}
                <RadixTooltip.Arrow className="dark:fill-gray-800" />
              </motion.div>
            </>
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      ) : (
        ""
      )}
    </RadixTooltip.Root>
  </RadixTooltip.Provider>
);

export default Tooltip;
