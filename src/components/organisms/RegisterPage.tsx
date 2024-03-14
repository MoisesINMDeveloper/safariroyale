"use client";
import LogoRoyale from "../atoms/LogoRoyale";
import TextTitle from "../atoms/Text";
import Header from "@/components/molecules/Header";
import Form from "../molecules/Form";
const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <Header />
      <div className="w-[8rem] h-[8rem] box-shadow rounded-full">
        <LogoRoyale />
      </div>
      <TextTitle name="Crear cuenta" />
      <Form />
    </div>
  );
};
export default RegisterPage;
