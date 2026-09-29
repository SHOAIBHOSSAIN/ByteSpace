import { useId } from "react";

type CustomInputboxProps = {
  label: string;
  placeholder: string;
  type?: "text" | "email" | "password";
  name?: string;
  autoComplete?: string;
  required?: boolean;
};

const CustomInputbox = ({
  label,
  placeholder,
  type = "text",
  name,
  autoComplete,
  required = true,
}: CustomInputboxProps) => {
  const id = useId();

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-[#292a2e] sm:text-base">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="h-[58px] w-full rounded-2xl border border-[#e1e3e8] bg-white px-5 text-base text-[#222328] outline-none transition placeholder:text-[#999da7] focus:border-[#1647f5] focus:ring-4 focus:ring-[#1647f5]/10 sm:h-[68px] sm:px-[30px] sm:text-lg"
      />
    </div>
  );
};

export default CustomInputbox;
