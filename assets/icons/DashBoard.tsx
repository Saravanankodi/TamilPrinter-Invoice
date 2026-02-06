import * as React from "react";
import type { SVGProps } from "react";
const SvgDashBoard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // height={24}
    // width={24}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M3.333 2.5H7.5c.46 0 .833.373.833.833v5.834c0 .46-.373.833-.833.833H3.333a.833.833 0 0 1-.833-.833V3.333c0-.46.373-.833.833-.833M12.5 2.5h4.167c.46 0 .833.373.833.833v2.5c0 .46-.373.834-.833.834H12.5a.833.833 0 0 1-.833-.834v-2.5c0-.46.373-.833.833-.833M12.5 10h4.167c.46 0 .833.373.833.833v5.834c0 .46-.373.833-.833.833H12.5a.833.833 0 0 1-.833-.833v-5.834c0-.46.373-.833.833-.833M3.333 13.334H7.5c.46 0 .833.373.833.833v2.5c0 .46-.373.834-.833.834H3.333a.833.833 0 0 1-.833-.834v-2.5c0-.46.373-.833.833-.833"
    />
  </svg>
);
export default SvgDashBoard;
