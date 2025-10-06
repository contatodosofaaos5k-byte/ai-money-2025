import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Variantes do botão
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
    "disabled:opacity-50 disabled:pointer-events-none " +
    "select-none active:scale-[0.98] duration-150",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        hero:
          // gradiente visível em qualquer tema (light ou dark)
          "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg " +
          "hover:opacity-90 focus-visible:ring-indigo-500 focus-visible:ring-offset-gray-900",
        "hero-outline":
          "border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white " +
          "focus-visible:ring-purple-500",
      },
      size: {
        default: "h-10 px-4 py-2 text-base",
        sm: "h-9 px-3 text-sm",
        lg: "h-12 px-6 text-lg",
        icon: "h-10 w-10",
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
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
