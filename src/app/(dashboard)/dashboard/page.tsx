import BookmarkIcon from "@/components/icons/bookmark";
import GraduationIcon from "@/components/icons/graduation";
import USDIcon from "@/components/icons/usd";
import UserIcon from "@/components/icons/user";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-4 gap-[30px]">
      <div className="flex flex-col p-[20px] rounded-lg bg-[#F0F9FF]">
        <GraduationIcon className="w-[48px] h-[38px] text-[#74C1ED]" />
        <p className="text-sm text-[#6C6C6C] mt-4 mb-[10px] font-medium">
          Students
        </p>
        <p className="text-[30px] font-bold self-end">243</p>
      </div>
      <div className="flex flex-col p-[20px] rounded-lg bg-[#FEF6FB]">
        <BookmarkIcon className="w-[48px] h-[38px] text-[#EE95C5]" />
        <p className="text-sm text-[#6C6C6C] mt-4 mb-[10px] font-medium">
          Course
        </p>
        <p className="text-[30px] font-bold self-end">13</p>
      </div>
      <div className="flex flex-col p-[20px] rounded-lg bg-[#FEFBEC]">
        <USDIcon className="w-[48px] h-[38px] text-[#F6C762]" />
        <p className="text-sm text-[#6C6C6C] mt-4 mb-[10px] font-medium">
          Payments
        </p>
        <p className="text-[30px] font-bold self-end"> 556,000₺</p>
      </div>
      <div className="flex flex-col p-[20px] rounded-lg bg-gradient-to-r rotate-134 from-[#FEAF00] from-0% to-[#F8D442] to-100">
        <UserIcon className="w-[48px] h-[38px] text-white" />
        <p className="text-sm text-white mt-4 mb-[10px] font-medium">Users</p>
        <p className="text-[30px] font-bold self-end">3</p>
      </div>
    </div>
  );
}
