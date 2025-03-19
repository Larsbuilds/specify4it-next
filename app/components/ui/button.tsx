import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-[color:oklch(var(--primary))] text-[color:oklch(var(--primary-foreground))] shadow-xs hover:bg-[color:oklch(var(--primary)/.9)]",
        destructive:
          "bg-[color:oklch(var(--destructive))] text-white shadow-xs hover:bg-[color:oklch(var(--destructive)/.9)] focus-visible:ring-[color:oklch(var(--destructive)/.2)] dark:focus-visible:ring-[color:oklch(var(--destructive)/.4)] dark:bg-[color:oklch(var(--destructive)/.6)]",
        outline:
          "border bg-[color:oklch(var(--background))] shadow-xs hover:bg-[color:oklch(var(--accent))] hover:text-[color:oklch(var(--accent-foreground))] dark:bg-[color:oklch(var(--input)/.3)] dark:border-[color:oklch(var(--input))] dark:hover:bg-[color:oklch(var(--input)/.5)]",
        secondary:
          "bg-[color:oklch(var(--secondary))] text-[color:oklch(var(--secondary-foreground))] shadow-xs hover:bg-[color:oklch(var(--secondary)/.8)]",
        ghost:
          "hover:bg-[color:oklch(var(--accent))] hover:text-[color:oklch(var(--accent-foreground))] dark:hover:bg-[color:oklch(var(--accent)/.5)]",
        link: "text-[color:oklch(var(--primary))] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
      asChild?: boolean
    }
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
