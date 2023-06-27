import { twMerge } from "tailwind-merge";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export default function Label({ className, children, ...props }: LabelProps) {
  return (
    <label
      className={twMerge("text-[#6C6C6C] text-sm font-medium", className)}
      {...props}
    >
      {children}
    </label>
  );
}
