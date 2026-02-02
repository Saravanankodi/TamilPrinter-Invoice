import * as React from "react";
import type { SVGProps } from "react";
const SvgProducts = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.167 18.108a1.67 1.67 0 0 0 1.666 0l5.834-3.333c.515-.298.832-.847.833-1.442V6.666c0-.595-.318-1.144-.833-1.441L10.833 1.89a1.67 1.67 0 0 0-1.666 0L3.333 5.225A1.67 1.67 0 0 0 2.5 6.666v6.667c0 .595.318 1.144.833 1.442zm.833.225V10"
    />
    <path
      stroke="#0F172A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M2.741 5.834 10 10l7.258-4.166M6.25 3.559l7.5 4.291"
    />
  </svg>
);
export default SvgProducts;
