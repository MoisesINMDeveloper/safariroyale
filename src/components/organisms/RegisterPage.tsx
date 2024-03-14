import LogoRoyale from "../atoms/LogoRoyale";
import TextTitle from "../atoms/Text";
import Navbar from "@/components/molecules/Header";
import Form from "../molecules/Form";

const RegisterPage = () => {
  const fields = [
    { type: "text", name: "nombre", placeholder: "Nombre Completo" },
    { type: "password", name: "contraseña", placeholder: "Contraseña" },
    { type: "email", name: "correo", placeholder: "Correo Electrónico" },
    { type: "text", name: "identidad", placeholder: "Cedula" },
    { type: "text", name: "telefono", placeholder: "Numero de telefono" },
  ];

  const urlsLink = [
    { text: "<-", href: "/" },
    { text: "Ingresar", href: "/login" },
  ];

  return (
    <div className="flex flex-col items-center w-screen">
      <Navbar urlsLink={urlsLink} />
      <div className="w-[8rem] h-[8rem] box-shadow rounded-full">
        <LogoRoyale />
      </div>
      <TextTitle name="Crear cuenta" />
      <Form fields={fields} buttonName="Registro" />
    </div>
  );
};

export default RegisterPage;
