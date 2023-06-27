import Link from "next/link";
import Image from "next/image";
import BookmarkIcon from "./icons/bookmark";
import FileChartIcon from "./icons/file-chart";
import GraduationIcon from "./icons/graduation";
import HomeIcon from "./icons/home";
import SlidersVIcon from "./icons/sliders-v";
import USDIcon from "./icons/usd";
import Logo from "./logo";
import SignOutIcon from "./icons/sign-out";

export default function DashboardSidebar() {
  const navLinks = [
    {
      id: "home",
      href: "/dashboard",
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      id: "course",
      href: "/dashboard",
      text: "Course",
      icon: <BookmarkIcon />,
    },
    {
      id: "students",
      href: "/dashboard/students",
      text: "Students",
      icon: <GraduationIcon />,
    },
    {
      id: "payment",
      href: "/dashboard",
      text: "Payment",
      icon: <USDIcon />,
    },
    {
      id: "report",
      href: "/dashboard",
      text: "Report",
      icon: <FileChartIcon />,
    },
    {
      id: "settings",
      href: "/dashboard",
      text: "Settings",
      icon: <SlidersVIcon />,
    },
  ];

  return (
    <aside className="flex flex-col shrink-0 w-[270px] bg-[#F2EAE1] px-[24px] py-[18px]">
      <Logo className="text-[20px]" />
      <div className="flex items-center justify-center flex-col text-center mt-[36px]">
        <Image
          src="/images/avatar.png"
          alt="John Doe"
          className="rounded-full object-cover"
          width={128}
          height={128}
          priority
        />
        <div className="text-align mt-4">
          <h4 className="text-[17px] font-bold">John Doe</h4>
          <p className="text-[#FEAF00] text-sm font-medium mt-[10px]">Admin</p>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <nav className="flex flex-col justify-center gap-2 mt-20">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="flex items-center gap-4 h-[41px] px-[40px] font-medium text-sm transition-colors hover:bg-[#FEAF00] hover:rounded"
            >
              {link.icon}
              {link.text}
            </Link>
          ))}
        </nav>
        <Link
          href="/sign-in"
          className="flex items-center justify-center mt-auto gap-4 h-[41px] px-[40px] font-medium text-sm transition-colors hover:bg-[#FEAF00] hover:rounded"
        >
          Logout
          <SignOutIcon />
        </Link>
      </div>
    </aside>
  );
}
