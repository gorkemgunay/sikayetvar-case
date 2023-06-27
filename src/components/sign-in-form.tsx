"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./button";
import Input from "./input";
import Label from "./label";
import Logo from "./logo";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify({ email, password }));

    router.push("/dashboard");
  };

  return (
    <div className="flex items-center justify-center flex-col w-[475px] px-[30px] py-[44px] bg-white rounded-[20px] shadow-custom">
      <Logo />
      <div className="text-center mt-[43px]">
        <h4 className="text-[22px] font-semibold">SIGN IN</h4>
        <p className="text-sm text-[#6C6C6C] mt-[9px]">
          Enter your credentials to access your account
        </p>
      </div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-[20px] mt-[50px] w-full"
      >
        <div className="flex flex-col gap-[10px]">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="text-[12px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="text-[12px]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          className="mt-[10px]"
          disabled={!email || !password}
        >
          SIGN IN
        </Button>
      </form>
      <p className="text-[#6C6C6C] text-sm mt-[27px]">
        Forgot your password?{" "}
        <Link href="/" className="text-[#FEAF00] underline">
          Reset Password
        </Link>
      </p>
    </div>
  );
}
