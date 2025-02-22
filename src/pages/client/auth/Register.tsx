import { Link } from "react-router-dom";
import Button from "../../../components/button/Button";
import Input from "../../../components/Input";
import * as yup from "yup";
import { emailRegex, numberRegex, passwordRegex } from "../../../ultils/regex";
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
  tel: yup
    .string()
    .trim()
    .required("Trường này là bắt buộc !")
    .matches(numberRegex, { message: "Số điện thoại không đúng định dạng" }),
  password: yup
    .string()
    .trim()
    .required("Trường này là bắt buộc !")
    .matches(passwordRegex, {
      message: "Mật khẩu ít nhất 1 chữ cái viết hoa và 1 ký tự đặt biệt!",
    }),
  confirmPassword: yup
    .string()
    .trim()
    .required("Trường này là bắt buộc !")
    .oneOf(
      [yup.ref("password")],
      "Mật khẩu xác nhận phải khớp với mật khẩu đã nhập !"
    ),
});

const Register = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const handleRegister: SubmitHandler<IAccount> = async (data) => {
    try {
      console.log(data);
      reset();
    } catch (error) {}
  };

  return (
    <div className="sm:size-full h-max pt-[100px]">
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="w-[90%] mx-auto sm:w-[450px] bg-[#000000c2] backdrop-opacity-50 text-white sm:py-[48px] sm:px-[64px]"
      >
        <h1 className="text-[32px] font-medium mb-[40px]">Đăng ký</h1>
        <div className="flex flex-col gap-[20px] mb-[40px]">
          <div>
            <Input
              name={"email"}
              className="bg-[#38373777]"
              type="text"
              content="Email"
              control={control}
            />
            <MessageForm error={errors.email?.message} />
          </div>

          <div>
            <Input
              name={"tel"}
              className="bg-[#38373777]"
              type="text"
              content="Số điện thoại"
              control={control}
            />
            <MessageForm error={errors.tel?.message} />
          </div>

          <div>
            <Input
              name={"password"}
              className="bg-[#38373777]"
              type="password"
              content="Mật khẩu"
              control={control}
            />
            <MessageForm error={errors.password?.message} />
          </div>

          <div>
            <Input
              name={"confirmPassword"}
              className="bg-[#38373777]"
              type="password"
              content="Xác nhận mật khẩu"
              control={control}
            />
            <MessageForm error={errors.confirmPassword?.message} />
          </div>
        </div>
        <Button
          type="submit"
          children="Đăng ký"
          className="!w-full !h-[40px] mb-[40px]"
        />
        <div className="w-full text-center mb-[20px]">
          <Link
            to={"#"}
            className="text-white font-light text-[15px]  underline tracking-[0.2px]"
          >
            Bạn quên mật khẩu?
          </Link>
        </div>
        <div className="text-[#b7b7b7] text-[15px] tracking-[0.2px] mb-[20px]">
          Bạn đã có tài khoản?{" "}
          <Link
            className="text-white font-medium text-[16px] hover:underline"
            to={"/auth/login"}
          >
            Đăng nhập ngay.
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

export default Register;
