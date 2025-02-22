import { Link } from "react-router-dom";
import Button from "../../../components/button/Button";
import ButtonSocial from "../../../components/button/ButtonSocial";
import Input from "../../../components/Input";
import * as yup from "yup";
import { emailRegex, passwordRegex } from "../../../ultils/regex";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IAccount } from "../../../types/auth.type";
import MessageForm from "../../../components/message/MessageForm";

const schema = yup.object({
  email: yup
    .string()
    .trim()
    .required("Trường này là bắt buộc !")
    .matches(emailRegex, { message: "Email không đúng định dạng !" }),
  password: yup
    .string()
    .trim()
    .required("Trường này là bắt buộc !")
    .matches(passwordRegex, {
      message: "Mật khẩu ít nhất 1 chữ cái viết hoa và 1 ký tự đặt biệt!",
    }),
});

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const handleLogin: SubmitHandler<IAccount> = async (data) => {
    console.log(data);
  };

  return (
    <div className="size-full pt-[100px]">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="w-[90%] sm:w-[450px] bg-[#000000c2] backdrop-opacity-50 mx-auto text-white py-[48px] px-[64px]"
      >
        <h1 className="text-[32px] font-medium mb-[40px]">Đăng nhập</h1>
        <div className="flex flex-col gap-[20px] mb-[40px]">
          <div>
            <Input
              name="email"
              className="bg-[#38373777]"
              type="text"
              content="Email"
              control={control}
            />
            <MessageForm error={errors.email?.message} />
          </div>
          <div>
            <Input
              name="password"
              className="bg-[#38373777]"
              type="password"
              content="Mật khẩu"
              control={control}
            />
            <MessageForm error={errors.password?.message} />
          </div>
        </div>
        <Button
          type="submit"
          children="Đăng nhập"
          className="!w-full !h-[40px]"
        />
        <h1 className="text-[#b7b7b7] uppercase text-[15px] text-center my-[20px]">
          Hoặc
        </h1>
        <div className="flex flex-col gap-[10px] mb-[20px]">
          <ButtonSocial path="#" logoSocial="/public/images/google.png">
            Đăng nhập Google
          </ButtonSocial>
          <ButtonSocial path="#" logoSocial="/public/images/facebook.png">
            Đăng nhập Facebook
          </ButtonSocial>
        </div>
        <div className="w-full text-center mb-[20px]">
          <Link
            to={"#"}
            className="text-white font-light text-[15px]  underline tracking-[0.2px]"
          >
            Bạn quên mật khẩu?
          </Link>
        </div>
        <div className="flex gap-2 mb-[20px]">
          <input
            className="tracking-[0.2px]"
            type="checkbox"
            name="forgetMe"
            id="forgetMe"
          />
          <label htmlFor="forgetMe">Ghi nhớ tôi</label>
        </div>
        <div className="text-[#b7b7b7] text-[15px] tracking-[0.2px] mb-[20px]">
          Bạn mới sử dụng MotPhim?{" "}
          <Link
            className="text-white font-medium text-[16px] hover:underline"
            to={"/auth/register"}
          >
            Đăng ký ngay.
          </Link>
        </div>
        <div className="text-[#b7b7b7] text-[12px] tracking-[0.2px] ">
          Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là
          robot.{" "}
          <Link to={"#"} className="text-blue-500 hover:underline">
            Tìm hiểu thêm.
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
