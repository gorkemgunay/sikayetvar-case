import { twMerge } from "tailwind-merge";

export default function Logo({ className = "" }) {
  return (
    <div className={twMerge("relative space-x-[12px] text-[32px]", className)}>
      <span className="absolute top-0 left-0 bottom-0 h-full w-[6px] bg-[#F8D442]" />
      <p className="font-bold">MANAGE COURSES</p>
    </div>
  );
}
