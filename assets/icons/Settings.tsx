import * as React from "react";
import type { SVGProps } from "react";
const SvgSettings = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.06 3.447a1.95 1.95 0 0 1 3.882 0 1.95 1.95 0 0 0 2.765 1.596 1.95 1.95 0 0 1 1.942 3.36 1.95 1.95 0 0 0 0 3.193 1.95 1.95 0 0 1-1.942 3.361 1.95 1.95 0 0 0-2.765 1.596 1.95 1.95 0 0 1-3.883 0 1.95 1.95 0 0 0-2.767-1.596 1.95 1.95 0 0 1-1.941-3.36 1.95 1.95 0 0 0 0-3.193 1.95 1.95 0 0 1 1.94-3.361 1.95 1.95 0 0 0 2.766-1.596"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M7.5 10a2.501 2.501 0 0 0 5 0 2.501 2.501 0 0 0-5 0"
    />
  </svg>
);
export default SvgSettings;
