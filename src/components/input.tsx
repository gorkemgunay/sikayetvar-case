import { twMerge } from "tailwind-merge";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={twMerge(
        "flex h-[44px] w-full px-[14px] text-[14px] border border-[#E5E5E5] text-black bg-white rounded placeholder:text-[#CDCDCD] focus:border-black focus:outline-none",
        className
      )}
      {...props}
    />
  );
}
