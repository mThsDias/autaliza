import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "notflex notmin-h-[60px] notw-full notrounded-md notborder notborder-input notbg-transparent notpx-3 notpy-2 nottext-sm notshadow-sm placeholder:nottext-muted-foreground focus-visible:notoutline-none focus-visible:notring-1 focus-visible:notring-ring disabled:notcursor-not-allowed disabled:notopacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
