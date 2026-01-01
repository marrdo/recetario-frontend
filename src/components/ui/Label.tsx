"use client";

import * as React from "react";
import clsx from "clsx";

type LabelProps = {
  id?: string;
  htmlFor?: string;
  className?: string;
  children: React.ReactNode;
};

export function Label({ id, htmlFor, className, children }: LabelProps) {
  return (
    <label
      id={id}
      htmlFor={htmlFor}
      className={clsx("text-foreground", className)}
    >
      {children}
    </label>
  );
}
