import * as React from "react"
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons"
import * as MenubarPrimitive from "@radix-ui/react-menubar"

import { cn } from "@/lib/utils"

const MenubarMenu = MenubarPrimitive.Menu

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "notflex noth-9 notitems-center notspace-x-1 notrounded-md notborder notbg-background notp-1 notshadow-sm",
      className
    )}
    {...props}
  />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "notflex notcursor-default notselect-none notitems-center notrounded-sm notpx-3 notpy-1 nottext-sm notfont-medium notoutline-none focus:notbg-accent focus:nottext-accent-foreground data-[state=open]:notbg-accent data-[state=open]:nottext-accent-foreground",
      className
    )}
    {...props}
  />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "notflex notcursor-default notselect-none notitems-center notrounded-sm notpx-2 notpy-1.5 nottext-sm notoutline-none focus:notbg-accent focus:nottext-accent-foreground data-[state=open]:notbg-accent data-[state=open]:nottext-accent-foreground",
      inset && "notpl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="notml-auto noth-4 notw-4" />
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "notz-50 notmin-w-[8rem] notoverflow-hidden notrounded-md notborder notbg-popover notp-1 nottext-popover-foreground notshadow-lg data-[state=open]:notanimate-in data-[state=closed]:notanimate-out data-[state=closed]:notfade-out-0 data-[state=open]:notfade-in-0 data-[state=closed]:notzoom-out-95 data-[state=open]:notzoom-in-95 data-[side=bottom]:notslide-in-from-top-2 data-[side=left]:notslide-in-from-right-2 data-[side=right]:notslide-in-from-left-2 data-[side=top]:notslide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "notz-50 notmin-w-[12rem] notoverflow-hidden notrounded-md notborder notbg-popover notp-1 nottext-popover-foreground notshadow-md data-[state=open]:notanimate-in data-[state=closed]:notfade-out-0 data-[state=open]:notfade-in-0 data-[state=closed]:notzoom-out-95 data-[state=open]:notzoom-in-95 data-[side=bottom]:notslide-in-from-top-2 data-[side=left]:notslide-in-from-right-2 data-[side=right]:notslide-in-from-left-2 data-[side=top]:notslide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "notrelative notflex notcursor-default notselect-none notitems-center notrounded-sm notpx-2 notpy-1.5 nottext-sm notoutline-none focus:notbg-accent focus:nottext-accent-foreground data-[disabled]:notpointer-events-none data-[disabled]:notopacity-50",
      inset && "notpl-8",
      className
    )}
    {...props}
  />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "notrelative notflex notcursor-default notselect-none notitems-center notrounded-sm notpy-1.5 notpl-8 notpr-2 nottext-sm notoutline-none focus:notbg-accent focus:nottext-accent-foreground data-[disabled]:notpointer-events-none data-[disabled]:notopacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="notabsolute notleft-2 notflex noth-3.5 notw-3.5 notitems-center notjustify-center">
      <MenubarPrimitive.ItemIndicator>
        <CheckIcon className="noth-4 notw-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "notrelative notflex notcursor-default notselect-none notitems-center notrounded-sm notpy-1.5 notpl-8 notpr-2 nottext-sm notoutline-none focus:notbg-accent focus:nottext-accent-foreground data-[disabled]:notpointer-events-none data-[disabled]:notopacity-50",
      className
    )}
    {...props}
  >
    <span className="notabsolute notleft-2 notflex noth-3.5 notw-3.5 notitems-center notjustify-center">
      <MenubarPrimitive.ItemIndicator>
        <DotFilledIcon className="noth-4 notw-4 notfill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      "notpx-2 notpy-1.5 nottext-sm notfont-semibold",
      inset && "notpl-8",
      className
    )}
    {...props}
  />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("not-mx-1 notmy-1 noth-px notbg-muted", className)}
    {...props}
  />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "notml-auto nottext-xs nottracking-widest nottext-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
MenubarShortcut.displayname = "MenubarShortcut"

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}
