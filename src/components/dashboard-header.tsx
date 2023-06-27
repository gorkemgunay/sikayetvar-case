import BellIcon from "./icons/bell";
import CaretCircleIcon from "./icons/caret-circle";

export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between h-[60px] text-[#C4C4C4] px-[30px]">
      <CaretCircleIcon />
      <BellIcon />
    </header>
  );
}
