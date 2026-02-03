import * as React from "react";
import type { SVGProps } from "react";
const SvgNewFile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M3.333 18.333H15c.92 0 1.666-.746 1.666-1.667V5.833L12.5 1.666H5c-.92 0-1.667.746-1.667 1.667v3.333"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M11.667 1.666v3.333c0 .92.746 1.667 1.666 1.667h3.334M2.5 12.499h5M5 10v5"
    />
  </svg>
);
export default SvgNewFile;
