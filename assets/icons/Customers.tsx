import * as React from "react";
import type { SVGProps } from "react";
const SvgCustomers = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.334 17.5v-1.666A3.333 3.333 0 0 0 10 12.501H5a3.333 3.333 0 0 0-3.333 3.333v1.667M13.334 2.607a3.333 3.333 0 0 1 0 6.454m5 8.44v-1.667a3.33 3.33 0 0 0-2.5-3.225M4.167 5.833A3.335 3.335 0 0 0 7.5 9.167a3.335 3.335 0 0 0 3.334-3.334A3.335 3.335 0 0 0 7.5 2.5a3.335 3.335 0 0 0-3.333 3.333"
    />
  </svg>
);
export default SvgCustomers;
