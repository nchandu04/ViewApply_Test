import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ButtonProps } from "@radix-ui/react-button";

interface GradientButtonProps extends ButtonProps {
  variant?: "primary" | "secondary";
  className?: string;
}

export function GradientButton({
  variant = "primary",
  className,
  ...props
}: GradientButtonProps) {
  return (
    <Button
      className={cn(
        "rounded-xl transition-all duration-300",
        variant === "primary" &&
          "bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5",
        variant === "secondary" &&
          "bg-white text-[hsl(var(--primary))] border-2 border-[hsl(var(--primary))] hover:bg-gradient-to-r hover:from-[hsl(var(--primary))] hover:to-[hsl(var(--secondary))] hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-primary/25",
        className
      )}
      {...props}
    />
  );
}