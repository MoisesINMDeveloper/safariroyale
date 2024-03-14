"use client";
import LogoRoyale from "../atoms/LogoRoyale";
import TextTitle from "../atoms/Text";
import Header from "@/components/molecules/Header";
import Form from "../molecules/Form";
const LoginPage = () => {
  const name = "Ingresar Usuario";
  const fields = [
    { type: "email", name: "correo", placeholder: "Correo Electrónico" },
    { type: "password", name: "contraseña", placeholder: "Contraseña" },
  ];
  const urlsLink = [
    { text: "<-", href: "/" },
    { text: "Registro", href: "/signup" },
  ];
  return (
    <div className="flex flex-col items-center w-screen">
      <Header urlsLink={urlsLink} />
      <div className="w-[8rem] h-[8rem] box-shadow rounded-full">
        <LogoRoyale />
      </div>
      <TextTitle name={name} />
      <Form fields={fields} buttonName="Ingresar" />
    </div>
  );
};
export default LoginPage;
