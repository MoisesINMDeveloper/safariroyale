import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Link from "next/link";

const Form: React.FC = () => {
  const fields = [
    { type: "text", name: "nombre", placeholder: "Correo electronico" },
    { type: "password", name: "contraseña", placeholder: "Contraseña" },
  ];
  const fieldsLink = [
    {
      text: "¿Olvidaste contraseña?",
      href: "/forgot-password",
    },
    { text: "Registrate gratis", href: "/signup" },
  ];

  return (
    <div className=" flex flex-col items-center justify-center">
      <form className="flex flex-col justify-center mb-2 w-[80vw]">
        {fields.map((field) => (
          <div className="w-[80vw] flex flex-col-reverse" key={field.name}>
            <Input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required
            />
          </div>
        ))}
        <div className="flex justify-between px-2">
          {fieldsLink.map((fieldLink) => (
            <Link
              key={fieldLink.text}
              className="text-white text-xs "
              href={fieldLink.href}
            >
              {fieldLink.text}
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button type={"submit"} name="Ingresar" />
        </div>
      </form>
    </div>
  );
};

export default Form;
