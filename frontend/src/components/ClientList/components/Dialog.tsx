import React, { Ref } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface DialogContentProps
  extends DialogPrimitive.DialogContentProps,
    React.RefAttributes<HTMLDivElement> {}

const DialogContent = React.forwardRef(
  (
    { children, ...props }: DialogContentProps,
    forwardedRef: Ref<HTMLDivElement>
  ) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="bg-black-50 data-[state=open]:animate-overlayShow fixed inset-0" />
      <DialogPrimitive.Content
        {...props}
        ref={forwardedRef}
        className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[90vh] w-[90vw] max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-lg bg-black-50 p-6 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none overflow-auto"
      >
        {children}
        <DialogPrimitive.Close asChild>
          <button
            type="button"
            className="text-valencia-600 hover:bg-valencia-200 active:bg-valencia-300 absolute top-[10px] right-[10px] p-1 appearance-none rounded-md focus:outline-none focus:ring-2 focus:ring-valencia-600"
            aria-label="Close"
          >
            <X />
          </button>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
);

DialogContent.displayName = "DialogContent";

export const Dialog = {
  Root: DialogPrimitive.Root,
  Trigger: DialogPrimitive.Trigger,
  Content: DialogContent,
  Close: DialogPrimitive.Close,
  Title: DialogPrimitive.Title,
  Description: DialogPrimitive.Description,
};
