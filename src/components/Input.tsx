import { FC } from "react";
import { useController } from "react-hook-form";

type TInput = "text" | "email" | "password";

interface IInput {
  type: TInput;
  content: string;
  className?: string;
  name: string;
  control?: any;
  props?: any;
}

const Input: FC<IInput> = ({
  type,
  content,
  className,
  name,
  control,
  ...props
}) => {
  const { field } = useController({ control, name, defaultValue: "" });

  return (
    <input
      {...field}
      name={name}
      id={field.name}
      type={type}
      placeholder={content}
      className={`p-[16px] text-[14px] w-full placeholder:text-[#b7b7b7] border-[#b7b7b7] border-[0.1px] rounded-sm focus:border-white  ${className}`}
      {...props}
    />
  );
};

export default Input;
