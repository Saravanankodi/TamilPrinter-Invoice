import * as React from "react";
import type { SVGProps } from "react";
const SvgReports = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#0F172A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M2.5 2.5v15h15M15 14.167V7.5m-4.167 6.667v-10m-4.166 10v-2.5"
    />
  </svg>
);
export default SvgReports;
