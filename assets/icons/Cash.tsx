import * as React from "react";
import type { SVGProps } from "react";
const Cash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.175}
      d="M2.676 3.525h12a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-12a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.175}
      d="M5.876 7.375a1.5 1.5 0 1 0 3.001-.001 1.5 1.5 0 0 0-3.001.001M3.526 7.05h.008m8.992 0h.008"
    />
  </svg>
);
export default Cash;
