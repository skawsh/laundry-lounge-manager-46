
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        success: "bg-[#D1FFCE] text-[#007E12] hover:bg-[#B9EAB6]",
        info: "bg-primary text-white rounded-md hover:bg-primary/90",
        danger: "bg-red-500 text-white hover:bg-red-600",
        cancel: "bg-background text-foreground border border-input hover:bg-accent hover:text-accent-foreground",
        addSubService: "bg-blue-50 text-blue-500 hover:bg-blue-100 rounded-md",
        removeSubService: "text-red-500 border border-red-100 bg-white hover:bg-red-50 w-full rounded-md",
        iconButton: "p-2 rounded-full bg-transparent hover:bg-gray-100",
        deleteIcon: "p-2 rounded-full bg-transparent hover:bg-red-50 text-red-500",
        editIcon: "p-2 rounded-full bg-transparent hover:bg-blue-50 text-blue-500",
        serviceIcon: "h-8 w-8 p-1.5 text-blue-500",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-9 w-9 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
