'use client';
import LogoRoyale from '../atoms/LogoRoyale';
import TextTitle from '../atoms/Text';
import Form from '../molecules/Form';
const RegisterPage = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-[8rem] h-[8rem] box-shadow rounded-full'>
        <LogoRoyale />
      </div>
      <TextTitle />
      <Form />
    </div>
  );
};
export default RegisterPage;