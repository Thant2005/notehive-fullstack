function Logo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="36" height="36" rx="11" fill="#685CF6"></rect>

      <path
        d="M20 9L28.5 14V24L20 29L11.5 24V14L20 9Z"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      ></path>

      <path
        d="M15.5 16.5L20 19L24.5 16.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>

      <path
        d="M20 19V25"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
    </svg>
  );
}

export default Logo;
