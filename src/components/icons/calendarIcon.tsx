import { SVGProps } from "react";

export default function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 6H5C3.89543 6 3 6.89543 3 8V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V8C21 6.89543 20.1046 6 19 6Z"
        stroke="currentColor"
      />
      <path
        d="M3 10C3 8.114 3 7.172 3.586 6.586C4.172 6 5.114 6 7 6H17C18.886 6 19.828 6 20.414 6.586C21 7.172 21 8.114 21 10H3Z"
        fill="currentColor"
      />
      <path d="M7 3V6M17 3V6" stroke="currentColor" strokeLinecap="round" />
      <path
        d="M10.5 12H7.5C7.22386 12 7 12.2239 7 12.5V13.5C7 13.7761 7.22386 14 7.5 14H10.5C10.7761 14 11 13.7761 11 13.5V12.5C11 12.2239 10.7761 12 10.5 12Z"
        fill="currentColor"
      />
      <path
        d="M10.5 16H7.5C7.22386 16 7 16.2239 7 16.5V17.5C7 17.7761 7.22386 18 7.5 18H10.5C10.7761 18 11 17.7761 11 17.5V16.5C11 16.2239 10.7761 16 10.5 16Z"
        fill="currentColor"
      />
      <path
        d="M16.5 12H13.5C13.2239 12 13 12.2239 13 12.5V13.5C13 13.7761 13.2239 14 13.5 14H16.5C16.7761 14 17 13.7761 17 13.5V12.5C17 12.2239 16.7761 12 16.5 12Z"
        fill="currentColor"
      />
      <path
        d="M16.5 16H13.5C13.2239 16 13 16.2239 13 16.5V17.5C13 17.7761 13.2239 18 13.5 18H16.5C16.7761 18 17 17.7761 17 17.5V16.5C17 16.2239 16.7761 16 16.5 16Z"
        fill="currentColor"
      />
    </svg>
  );
}
