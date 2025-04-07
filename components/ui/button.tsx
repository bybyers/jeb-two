import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "hover:scale-105 hover:border-indigo-700 min-w-44 lg:min-w-56 uppercase tracking-[5.6px] font-semibold inline-flex items-center justify-center whitespace-nowrap rounded-lg ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-b from-[#616ab3] to-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-gradient-to-b from-[#616ab3] to-primary",
        secondary:
          "bg-gradient-to-b from-[#f1f1f1] to-secondary text-secondary-foreground hover:bg-secondary/80",
        gradient: "bg-gradient-to-bl from-[#9c83fe] to-[#838383] text-secondary-foreground hover:bg-secondary/80",

        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-4 py-2",
        navigation: "w-full lg:w-auto h-16 lg:h-8 2xl:h-12 2xl:px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 2xl:h-20 px-10 ",
        icon: "h-10 w-10",
      },
      fontSize: {
        default: "text-xs 2xl:text-base",
        sm: "text-sm",
        lg: "text-sm lg:text-base 2xl:text-lg ",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fontSize: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fontSize, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, fontSize, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
