"use client";

import * as React from "react";
import clsx from "clsx";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>; // Esto que hace para que se usa donde me documento de esto??

export const Input = React.forwardRef<HTMLInputElement, InputProps>( // como se yo que eso de reactforward hace algo?? que es el input element e iunoutprops?? por que se declara const nombre =.... y hacemos el redturn? porquer no export default function??
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={clsx(
          "h-9 w-full rounded-md border border-input bg-background px-3 py-1",
          "text-sm text-foreground shadow-sm",
          "outline-none transition",
          "placeholder:text-muted-foreground",
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";