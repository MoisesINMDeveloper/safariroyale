import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const Form: React.FC = () => {
  const fields = [
    { type: 'text', name: 'nombre', placeholder: 'Nombre Completo' },
    { type: 'password', name: 'contraseña', placeholder: 'Contraseña' },
    { type: 'email', name: 'correo', placeholder: 'Correo Electrónico' },
    { type: 'text', name: 'identidad', placeholder: 'Cedula' },
    { type: 'text', name: 'telefono', placeholder: 'Numero de telefono' },
    
  ];

  return (
    <div className=' flex flex-col items-center justify-center h-contain'>
      <form className='flex flex-col justify-center mb-2 w-[80vw]'>
        {fields.map((field) => (
          <div className='w-[80vw] flex flex-col-reverse' key={field.name}>
            <Input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required
            />
          </div>
        ))}
        <div className='flex flex-wrap-reverse items-center justify-center'>
          <Input type='checkbox' name='verificacion' placeholder='' />
          <label className='mb-4 mx-2 text-white' htmlFor='checkbox'>
            Terminos y condiciones
          </label>
        </div>
        <div className='flex justify-center'>
          <Button type={'submit'} name='Registro' />
        </div>
      </form>
    </div>
  );
};

export default Form;
