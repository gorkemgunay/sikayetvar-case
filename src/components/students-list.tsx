"use client";

import Button from "./button";
import Image from "next/image";
import PenIcon from "./icons/pen";
import TrashIcon from "./icons/trash";
import { IUser } from "@/utils/types";
import Modal from "./modal";
import { useEffect, useState } from "react";
import EditStudentForm from "./edit-student-form";

interface IProps {
  users: IUser[];
  setUsers: React.Dispatch<React.SetStateAction<IUser[] | []>>;
  filteredUsers: IUser[];
  setFilteredUsers: React.Dispatch<React.SetStateAction<IUser[] | []>>;
  startIndex: number;
  endIndex: number;
}

export default function StudentsList({
  users,
  setUsers,
  filteredUsers,
  setFilteredUsers,
  startIndex,
  endIndex,
}: IProps) {
  const [editStudentModal, setEditStudentModal] = useState<boolean>(false);
  const [deleteStudentModal, setDeleteStudentModal] = useState<boolean>(false);

  const [selectedStudentId, setSelectedStudentId] = useState<number | null>(
    null
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [domain, setDomain] = useState("");
  const [companyName, setCompanyName] = useState("");

  useEffect(() => {
    if (!deleteStudentModal) {
      setSelectedStudentId(null);
    }
  }, [deleteStudentModal]);

  const handleDeleteStudent = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const response = await fetch(
      `https://dummyjson.com/users/${selectedStudentId}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();

    if (data) {
      const newUsers = users.filter((user) => user.id !== data.id);
      setUsers(newUsers);
      setFilteredUsers(newUsers);
      setSelectedStudentId(null);
      setDeleteStudentModal(false);
    }
  };

  const handleUpdateStudent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(
      `https://dummyjson.com/users/${selectedStudentId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          domain,
          phone,
          company: { name: companyName },
        }),
      }
    );
    const data = await response.json();

    if (data) {
      const newUsers = users.map((user) => {
        if (user.id === data.id) {
          return {
            ...user,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            domain: data.domain,
            phone: data.phone,
            company: { name: data.company.name },
          };
        }
        return user;
      });
      setUsers(newUsers);
      setFilteredUsers(newUsers);
      setSelectedStudentId(null);
      setEditStudentModal(false);
    }
  };

  return (
    <>
      <Modal
        open={editStudentModal}
        setOpen={setEditStudentModal}
        modalTitle="Edit Student"
      >
        <EditStudentForm
          handleEditStudent={handleUpdateStudent}
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
      <Modal
        open={deleteStudentModal}
        setOpen={setDeleteStudentModal}
        modalTitle="Are You Sure?"
      >
        <div className="flex flex-col gap-8">
          <p>The data will be permanently deleted, are you sure?</p>
          <div className="self-end flex items-center gap-4">
            <Button
              className="border border-[#F8D442] text-[#F8D442] bg-transparent"
              onClick={() => setDeleteStudentModal(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleDeleteStudent}>Delete Permanently</Button>
          </div>
        </div>
      </Modal>
      <div className="flex flex-col overflow-y-scroll">
        <div className="grid grid-cols-table items-center gap-4 text-xs font-semibold text-[#ACACAC] mb-5 px-3">
          <span />
          <h6>Name</h6>
          <h6>Email</h6>
          <h6>Phone</h6>
          <h6>Website</h6>
          <h6>Company Name</h6>
          <span />
        </div>
        <div className="flex flex-col gap-[10px] w-full">
          {filteredUsers?.slice(startIndex, endIndex).map((user) => (
            <div
              key={user.id}
              className="grid grid-cols-table items-center gap-4 bg-white rounded-lg h-[85px] px-3"
            >
              <div>
                <div className="relative w-[65px] h-[55px]">
                  <Image
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="line-clamp-1">
                {user.firstName} {user.lastName}
              </p>
              <p className="line-clamp-1">{user.email}</p>
              <p className="line-clamp-1">{user.phone}</p>
              <p className="line-clamp-1">{user.domain}</p>
              <p className="line-clamp-1">{user.company.name}</p>
              <div className="flex items-center gap-[33px]">
                <Button
                  className="bg-transparent text-[#FEAF00] w-[19px] h-[19px] p-0"
                  onClick={() => {
                    setSelectedStudentId(user.id);
                    setFirstName(user.firstName);
                    setLastName(user.lastName);
                    setEmail(user.email);
                    setPhone(user.phone);
                    setDomain(user.domain);
                    setCompanyName(user.company.name);
                    setEditStudentModal(true);
                  }}
                >
                  <PenIcon />
                </Button>
                <Button
                  className="bg-transparent text-[#FEAF00] p-0"
                  onClick={() => {
                    setSelectedStudentId(user.id);
                    setDeleteStudentModal(true);
                  }}
                >
                  <TrashIcon />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
