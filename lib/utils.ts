import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNow } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// format date to time ago
export function timeAgo(date: Date | number): string {
  return `${formatDistanceToNow(date, { addSuffix: true })}`;
}
