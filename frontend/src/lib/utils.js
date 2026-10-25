import { BACKEND_URL } from "@/constants";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const generateImageURL = (id, size) => {
  return `${BACKEND_URL}/images/${id}-${size}.webp`
}
