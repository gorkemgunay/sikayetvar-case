import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Link
        href="/sign-in"
        className="flex items-center justify-center h-[44px] text-sm px-6 py-3 font-medium text-white bg-[#FEAF00] rounded "
      >
        SIGN IN
      </Link>
    </div>
  );
}
