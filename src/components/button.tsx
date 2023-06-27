import { twMerge } from "tailwind-merge";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "flex items-center justify-center h-[44px] text-sm px-6 py-3 font-medium text-white bg-[#FEAF00] rounded focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
