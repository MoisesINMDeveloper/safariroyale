"use client";
import LogoRoyale from "../atoms/LogoRoyale";
import TextTitle from "../atoms/Text";
import Header from "@/components/molecules/Header";
import FormLogin from "../molecules/FormLogin";
const LoginPage = () => {
  const name = "Ingresar usuario";
  return (
    <div className="flex flex-col items-center w-screen">
      <Header />
      <div className="w-[8rem] h-[8rem] box-shadow rounded-full">
        <LogoRoyale />
      </div>
      <TextTitle name={name} />
      <FormLogin />
    </div>
  );
};
export default LoginPage;
