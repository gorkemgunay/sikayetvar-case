"use client";

import { useEffect, useState } from "react";
import StudentsList from "./students-list";
import StudentsListBottom from "./students-list-bottom";
import StudentsListTop from "./students-list-top";
import { IUser } from "@/utils/types";
import { useQueryParams } from "@/utils/hooks";

export default function Students() {
  const { queryParams, setQueryParams } = useQueryParams<{
    page: string;
    size: string;
    search: string;
  }>();

  const [users, setUsers] = useState<IUser[] | []>([]);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
  const [search, setSearch] = useState<string>(queryParams.search || "");
  const [currentPage, setCurrentPage] = useState<number>(
    Number(queryParams.page) || 1
  );
  const [totalPages, setTotalPages] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(
    Number(queryParams.size) || 6
  );

  const startIndex = (currentPage - 1) * Number(rowsPerPage);
  const endIndex = startIndex + Number(rowsPerPage);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      const usersData = data.users as IUser[];

      setUsers(usersData);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    setTotalPages(Math.ceil(filteredUsers.length / Number(rowsPerPage)));
  }, [filteredUsers.length, rowsPerPage]);

  useEffect(() => {
    const searchQuery = search.replace(/\s+/g, " ").trim().toLowerCase();
    const filtered = users.filter((user) => {
      const searchString = `${user.firstName} ${user.lastName}`.toLowerCase();
      return searchQuery.length === 0 || searchString.includes(searchQuery);
    });
    setFilteredUsers(filtered);
  }, [search, users]);

  useEffect(() => {
    let queryParams = { page: "", size: "", search: "" };

    if (currentPage > totalPages) {
      setCurrentPage(1);
      queryParams.page = "";
    } else if (currentPage > 1) {
      queryParams.page = String(currentPage);
    }

    if (search.length > 0) {
      queryParams.search = search;
    }

    if (rowsPerPage !== 6) {
      queryParams.size = String(rowsPerPage);
    }

    setQueryParams(queryParams);
  }, [currentPage, search, rowsPerPage, setQueryParams, totalPages]);

  return (
    <div className="flex flex-col">
      <StudentsListTop
        search={search}
        setSearch={setSearch}
        users={users}
        setUsers={setUsers}
        filteredUsers={filteredUsers}
        setFilteredUsers={setFilteredUsers}
        setCurrentPage={setCurrentPage}
      />
      <StudentsList
        users={users}
        setUsers={setUsers}
        filteredUsers={filteredUsers}
        setFilteredUsers={setFilteredUsers}
        startIndex={startIndex}
        endIndex={endIndex}
      />
      <StudentsListBottom
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
        totalPages={totalPages}
        filteredUsers={filteredUsers}
        setCurrentPage={setCurrentPage}
        setRowsPerPage={setRowsPerPage}
      />
    </div>
  );
}
