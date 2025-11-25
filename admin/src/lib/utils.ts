import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// cn class and name
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
