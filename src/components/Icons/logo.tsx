export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 44 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.0911 33.2766C20.3109 28.3792 20.5834 20.909 28.6998 16.5915V16.5915L34.7585 20.4052C39.3426 23.2908 39.1821 27.6922 34.3999 30.2361L28.3627 33.4476L28.0911 33.2766Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M23.2197 3.38433C26.7092 1.54367 29.427 3.24783 29.2901 7.19068L28.378 33.4503L19.1089 27.708C15.9491 25.7505 14.2886 21.6873 14.5014 16.4336V16.4336C14.6949 11.6553 18.2539 6.00366 22.4698 3.77987L23.2197 3.38433Z"
        fill="url(#paint1_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="42.6404"
          y1="25.8901"
          x2="28.7951"
          y2="25.4576"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4F4C4C" />
          <stop offset="0.0001" stopColor="#537982" stopOpacity="0.78" />
          <stop offset="0.0260417" stopColor="#04A2C7" />
          <stop offset="1" stopColor="#84CBDC" stopOpacity="0.84" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="22.8416"
          y1="9.41803"
          x2="14.9358"
          y2="20.5101"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#04A2C7" />
          <stop offset="1" stopColor="#7ECEE0" stopOpacity="0.99" />
        </linearGradient>
      </defs>
    </svg>
  );
}
