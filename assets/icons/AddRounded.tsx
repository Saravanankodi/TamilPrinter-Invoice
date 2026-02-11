import * as React from "react";
import type { SVGProps } from "react";
const AddRounded = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M1.5 9c0 4.14 3.36 7.5 7.5 7.5s7.5-3.36 7.5-7.5S13.14 1.5 9 1.5 1.5 4.86 1.5 9M6 9h6M9 6v6"
    />
  </svg>
);
export default AddRounded;
