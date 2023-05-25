"use client"

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {motion} from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

const ITEM_CLASS =
  "focus:outline-none ring-1 ring-transparent focus:bg-white dark:focus:bg-gray-100 cursor-pointer flex items-center px-2 py-[5px] text-sm hover:bg-white hover:shadow-[0_1px_2px_rgba(0,0,0,0.15)] focus:shadow-[0_1px_3px_rgba(0,0,0,0.15)] dark:focus:shadow-[0_1px_2px_rgba(0,0,0,0.9)] dark:hover:shadow-[0_1px_2px_rgba(0,0,0,0.9)] dark:hover:bg-white dark:hover:text-gray-800 dark:text-gray-200 dark:focus:text-gray-800 rounded-lg mb-[2px]";

const RenderItem = ({ item }) => {
  switch (item?.as) {
    case "divider":
      return <hr className="my-2 border-gray-300/50 dark:border-gray-700/50" />;
    case "a":
      return (
        <Link href={item?.href} passHref>
          <a
            tabIndex="1"
            role="button"
            target={item?.newTab ? "_blank" : ""}
            className={clsx(
              ITEM_CLASS,
              item?.className,
              item?.disabled &&
                "opacity-50 !cursor-default hover:!bg-transparent dark:hover:!text-gray-300 hover:!shadow-none"
            )}
          >
            {item?.icon ? <span className="mr-2">{item?.icon}</span> : ""}
            {item?.title}
          </a>
        </Link>
      );
    default:
      return (
        <DropdownMenu.Item asChild disabled={item?.disabled}>
          <div
            className={clsx(
              ITEM_CLASS,
              item?.className,
              item?.disabled &&
                "opacity-50 !cursor-default hover:!bg-transparent dark:hover:!text-gray-300 hover:!shadow-none"
            )}
            onClick={item?.onClick}
          >
            {item?.icon ? <span className="mr-2">{item?.icon}</span> : ""}
            {item?.title}
          </div>
        </DropdownMenu.Item>
      );
  }
};

const Dropdown = ({ trigger, side, align, items } = {}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <div>{trigger}</div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal asChild>
        <DropdownMenu.Content
          sideOffset={10}
          side={side ?? "bottom"}
          align={align ?? "center"}
          className="z-[200] relative focus:outline-none"
        >
          <motion.div
            className={clsx(
              "shadow-[0_1px_10px_rgba(0,0,0,0.15)] dark:shadow-[0_2px_20px_rgba(0,0,0,0.5)] ring-1 ring-gray-400/20 dark:ring-gray-700 bg-gray-100/50 backdrop-blur-xl dark:bg-gray-900/80 rounded-xl relative z-[10] px-2 py-[8px] min-w-[200px]"
            )}
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 0.25, type: "spring" },
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
          >
            <>
              <div className="bg-gradient-to-b from-transparent to-white/[0.2] dark:to-black/10 absolute bottom-0 left-0 w-full h-[10px] rounded-b-lg z-0" />
              <DropdownMenu.Arrow className="fill-white/80 dark:fill-gray-800 drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_1px_0px_rgba(255,255,255,0.3)] w-3 h-2" />
              {items?.map((item, index) =>
                item?.hide ? (
                  ""
                ) : (
                  <RenderItem item={item} key={index + item?.title} />
                )
              )}
            </>
          </motion.div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
