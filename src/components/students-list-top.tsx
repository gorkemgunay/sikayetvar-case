import { useState } from "react";
import Button from "./button";
import SearchIcon from "./icons/search";
import Input from "./input";
import Modal from "./modal";
import { IUser } from "@/utils/types";
import Label from "./label";
import AddStudentForm from "./add-student-form";

interface IProps {
  users: IUser[];
  setUsers: React.Dispatch<React.SetStateAction<IUser[] | []>>;
  filteredUsers: IUser[];
  setFilteredUsers: React.Dispatch<React.SetStateAction<IUser[] | []>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function StudentsListTop({
  users,
  setUsers,
  filteredUsers,
  setFilteredUsers,
  search,
  setSearch,
  setCurrentPage,
}: IProps) {
  const [addNewStudentModal, setAddNewStudentModal] = useState<boolean>(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [domain, setDomain] = useState("");
  const [companyName, setCompanyName] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleAddNewStudent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        domain,
        phone,
        company: { name: companyName },
        image: "https://robohash.org/hicveldicta.png",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers([...users, data]);
        setFilteredUsers([...filteredUsers, data]);
        setAddNewStudentModal(false);
      });
  };

  return (
    <>
      <Modal
        open={addNewStudentModal}
        setOpen={setAddNewStudentModal}
        modalTitle="Add New Student"
      >
        <AddStudentForm
          handleAddNewStudent={handleAddNewStudent}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          domain={domain}
          setDomain={setDomain}
          companyName={companyName}
          setCompanyName={setCompanyName}
        />
      </Modal>
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-[22px] font-bold">Students List</h3>
        <div className="flex items-center gap-6">
          <div className="relative">
            <Input
              value={search}
              onChange={handleSearch}
              placeholder="Search..."
              className="h-[37px] w-[212px] pr-[42px] text-sm"
            />
            <SearchIcon className="absolute text-[#C4C4C4] right-[14px] top-[50%] bottom-[50%] translate-y-[-50%]" />
          </div>
          <Button
            className="w-[199px]"
            onClick={() => setAddNewStudentModal(true)}
          >
            ADD NEW STUDENT
          </Button>
        </div>
      </div>
      <div className="w-full h-[1px] mt-3 mb-5 bg-[#E5E5E5]" />
    </>
  );
}
