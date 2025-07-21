import * as React from "react";
import { cn } from "@/components/lib/utils";

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
        "border border-[#498efb] bg-transparent px-3 py-2 text-base w-full h-10 rounded-xs shadow-xs",
        "transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
        "focus:outline-none",
        "focus:border-[#498efb]",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        className
      )}
      {...props}
    />
  );
}

export { Input };
