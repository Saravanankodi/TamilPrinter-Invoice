import * as React from "react";
import type { SVGProps } from "react";
const Filter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="M14.666 2H1.333l5.333 6.307v4.36L9.333 14V8.307z"
    />
  </svg>
);
export default Filter;
