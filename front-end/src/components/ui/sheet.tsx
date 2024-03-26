import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { Cross2Icon } from "@radix-ui/react-icons"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "notfixed notinset-0 notz-50 notbg-black/80 not data-[state=open]:notanimate-in data-[state=closed]:notanimate-out data-[state=closed]:notfade-out-0 data-[state=open]:notfade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "notfixed notz-50 notgap-4 notbg-background notp-6 notshadow-lg nottransition notease-in-out data-[state=open]:notanimate-in data-[state=closed]:notanimate-out data-[state=closed]:notduration-300 data-[state=open]:notduration-500",
  {
    variants: {
      side: {
        top: "notinset-x-0 nottop-0 notborder-b data-[state=closed]:notslide-out-to-top data-[state=open]:notslide-in-from-top",
        bottom:
          "notinset-x-0 notbottom-0 notborder-t data-[state=closed]:notslide-out-to-bottom data-[state=open]:notslide-in-from-bottom",
        left: "notinset-y-0 notleft-0 noth-full notw-3/4 notborder-r data-[state=closed]:notslide-out-to-left data-[state=open]:notslide-in-from-left sm:notmax-w-sm",
        right:
          "notinset-y-0 notright-0 noth-full notw-3/4 notborder-l data-[state=closed]:notslide-out-to-right data-[state=open]:notslide-in-from-right sm:notmax-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="notabsolute notright-4 nottop-4 notrounded-sm notopacity-70 notring-offset-background nottransition-opacity hover:notopacity-100 focus:notoutline-none focus:notring-2 focus:notring-ring focus:notring-offset-2 disabled:notpointer-events-none data-[state=open]:notbg-secondary">
        <Cross2Icon className="noth-4 notw-4" />
        <span className="notsr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "notflex notflex-col notspace-y-2 nottext-center sm:nottext-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "notflex notflex-col-reverse sm:notflex-row sm:notjustify-end sm:notspace-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("nottext-lg notfont-semibold nottext-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("nottext-sm nottext-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
