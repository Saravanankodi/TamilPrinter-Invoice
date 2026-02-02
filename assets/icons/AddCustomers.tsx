import * as React from "react";
import type { SVGProps } from "react";
const SvgAddCustomers = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.334 17.5v-1.667A3.333 3.333 0 0 0 10 12.5H5a3.333 3.333 0 0 0-3.333 3.333V17.5M4.167 5.833A3.335 3.335 0 0 0 7.5 9.167a3.335 3.335 0 0 0 3.334-3.334A3.335 3.335 0 0 0 7.5 2.5a3.335 3.335 0 0 0-3.333 3.333M15.833 6.666v5m2.5-2.5h-5"
    />
  </svg>
);
export default SvgAddCustomers;
