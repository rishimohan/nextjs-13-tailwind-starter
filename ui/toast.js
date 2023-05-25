import * as React from "react"
import * as RadixToast from "@radix-ui/react-toast";
import { motion } from "framer-motion"
import { X } from '@phosphor-icons/react'

const Toast = ({
  trigger,
  title,
  description,
  action,
  swipeDirection,
  duration,
  position
}) => {
  const [open, setOpen] = React.useState(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div>
      <RadixToast.Provider
        swipeDirection={swipeDirection ?? "right"}
        duration={duration ?? 5000}
      >
        <span
          onClick={() => {
            setOpen(false);
            window.clearTimeout(timerRef.current);
            timerRef.current = window.setTimeout(() => {
              eventDateRef.current = oneWeekAway();
              setOpen(true);
            }, 100);
          }}
        >
          {trigger ?? ""}
        </span>

        <RadixToast.Root
          className="z-[10] fixed top-0 left-[50%] translate-x-[-50%] w-full max-w-[300px] flex items-center justify-center mx-auto"
          open={open}
          onOpenChange={setOpen}
        >
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-[300px] mt-4 w-full shadow-[0_0_68px_rgba(0,0,0,0.2)] border border-gray-200 rounded-lg px-6 py-4 bg-white"
          >
            <div className="flex items-start">
              <div className="w-full">
                {title ? (
                  <RadixToast.Title className="font-semibold text-sm">
                    {title}
                  </RadixToast.Title>
                ) : (
                  ""
                )}
                {description ? (
                  <RadixToast.Description className="text-sm">
                    {description}
                  </RadixToast.Description>
                ) : (
                  ""
                )}
                {action ? (
                  <RadixToast.Action className="ToastAction" asChild>
                    {action}
                  </RadixToast.Action>
                ) : (
                  ""
                )}
              </div>
              <div className="ml-auto">
                <RadixToast.Close>
                  <X size={14} />
                </RadixToast.Close>
              </div>
            </div>
          </motion.div>
        </RadixToast.Root>
        <RadixToast.Viewport />
      </RadixToast.Provider>
    </div>
  );
};

function oneWeekAway(date) {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}

export default Toast;
