import * as React from 'react';
const IconCheck = (props: any) => (
  <svg
    className="[&>g>circle:not(:last-of-type)]:hover:fill-primary mx-auto"
    xmlns="http://www.w3.org/2000/svg"
    width={70}
    height={75}
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <circle cx={35} cy={35} r={35} fill="#000" />
      <circle cx={35} cy={40} r={35} fill="#000" />
      <circle cx={35} cy={35} r={32} fill="#FD6687" />
      <path
        stroke="#FFF"
        strokeWidth={3}
        d="m20 34.582 10.264 10.264L50.11 25"
      />
    </g>
  </svg>
);
export default IconCheck;
