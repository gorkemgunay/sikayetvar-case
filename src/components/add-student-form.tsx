import Button from "./button";
import Input from "./input";
import Label from "./label";

interface IProps {
  handleAddNewStudent: (e: React.FormEvent<HTMLFormElement>) => void;
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  domain: string;
  setDomain: React.Dispatch<React.SetStateAction<string>>;
  companyName: string;
  setCompanyName: React.Dispatch<React.SetStateAction<string>>;
}

export default function AddStudentForm({
  handleAddNewStudent,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phone,
  setPhone,
  domain,
  setDomain,
  companyName,
  setCompanyName,
}: IProps) {
  return (
    <form
      className="flex flex-col gap-[20px] w-full"
      onSubmit={handleAddNewStudent}
    >
      <div className="flex flex-col gap-[10px]">
        <Label htmlFor="firstName">First Name</Label>
        <Input
          id="firstName"
          placeholder="Enter first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-[10px]">
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          id="lastName"
          placeholder="Enter last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-[10px]">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-[10px]">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          placeholder="Enter phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-[10px]">
        <Label htmlFor="domain">Website</Label>
        <Input
          id="domain"
          placeholder="Enter website"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-[10px]">
        <Label htmlFor="companyName">Company Name</Label>
        <Input
          id="companyName"
          placeholder="Enter company name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
      <Button
        className="mt-[10px]"
        disabled={
          !firstName || !lastName || !email || !phone || !domain || !companyName
        }
      >
        ADD NEW STUDENT
      </Button>
    </form>
  );
}
