import Button from "./button";
import ArrowLeftIcon from "./icons/arrow-left";
import ArrowRightIcon from "./icons/arrow-right";
import DropdownIcon from "./icons/dropdown";
import { IUser } from "@/utils/types";

interface IProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  rowsPerPage: number;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
  filteredUsers: IUser[];
}

export default function StudentsListBottom({
  currentPage,
  setCurrentPage,
  totalPages,
  rowsPerPage,
  setRowsPerPage,
  filteredUsers,
}: IProps) {
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="self-end flex items-center mt-[30px] text-sm text-[#9FA2B4]">
      <div className="flex items-center gap-1">
        <p>Rows per page:</p>
        <div className="flex items-center">
          <select
            className=" min-w-[24px] min-h-[24px] text-center bg-transparent appearance-none cursor-pointer focus:outline-none"
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            {Array.from(Array(6), (_, i) => i + 1).map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <DropdownIcon />
        </div>
      </div>
      <div className="ml-[48px] mr-[24px]">
        <p>
          {filteredUsers.length > 0 &&
            `${(currentPage - 1) * Number(rowsPerPage) + 1}-${Math.min(
              currentPage * Number(rowsPerPage),
              filteredUsers.length
            )} of ${filteredUsers.length}`}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Button
          className="bg-transparent text-[#9FA2B4] p-0"
          onClick={goToPreviousPage}
        >
          <ArrowLeftIcon />
        </Button>
        <Button
          className="bg-transparent text-[#9FA2B4] p-0"
          onClick={goToNextPage}
        >
          <ArrowRightIcon />
        </Button>
      </div>
    </div>
  );
}
