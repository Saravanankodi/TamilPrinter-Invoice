import * as React from "react";
import type { SVGProps } from "react";
const SvgPrint = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 15H3.334c-.92 0-1.667-.747-1.667-1.667V9.166c0-.92.746-1.667 1.667-1.667h13.333c.92 0 1.667.747 1.667 1.667v4.167c0 .92-.747 1.666-1.667 1.666H15M5 7.5v-5c0-.46.373-.833.834-.833h8.333c.46 0 .833.373.833.833v5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M5.833 11.666h8.334c.46 0 .833.373.833.833v5c0 .46-.373.834-.833.834H5.833A.833.833 0 0 1 5 17.499v-5c0-.46.373-.833.833-.833"
    />
  </svg>
);
export default SvgPrint;
