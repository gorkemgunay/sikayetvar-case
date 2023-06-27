import DashboardHeader from "@/components/dashboard-header";
import DashboardSidebar from "@/components/dashboard-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex flex-col w-full">
        <DashboardHeader />
        <main className="h-full bg-[#F8F8F8] p-[30px]">{children}</main>
      </div>
    </div>
  );
}
