import * as RadixDialog from "@radix-ui/react-dialog";
import { X } from '@phosphor-icons/react'

export default ({ trigger, content, title, hideClose }) => (
  <RadixDialog.Root>
    <RadixDialog.Trigger asChild>{trigger ?? ""}</RadixDialog.Trigger>
    <RadixDialog.Portal>
      <RadixDialog.Overlay className="bg-black/50 fixed inset-0" />
      <RadixDialog.Content className="top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[500px] w-full bg-white/90 backdrop-blur rounded-lg px-6 py-4 z-20 fixed shadow-[0_0_40px_rgba(0,0,0,0.3)]">
        {hideClose ? (
          ""
        ) : (
          <RadixDialog.Close className="absolute top-4 right-6">
            <div className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200">
              <X size={14} />
            </div>
          </RadixDialog.Close>
        )}
        {title ? (
          <RadixDialog.Title className="font-semibold text-sm opacity-50 mb-4">
            {title}
          </RadixDialog.Title>
        ) : (
          ""
        )}
        {content ?? ""}
      </RadixDialog.Content>
    </RadixDialog.Portal>
  </RadixDialog.Root>
);
