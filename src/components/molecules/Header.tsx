import Button from '../atoms/Button';
import NavItem from '../atoms/NavItem';

const Navbar: React.FC = () => {
  const urlsLink = [
    { text: 'Otro Link', href: '/ruleta' },
    { text: 'Tambien este', href: '/profile' },
   
  ];

  return (
    <nav className='flex justify-between items-center'>
      <NavItem className='text-2xl' text='<-' href='/' />
      <ul className='flex justify-end items-center gap-4'>
        {urlsLink.map((urlLink) => (
          <li key={urlLink.text}>
            <NavItem text={urlLink.text} href={urlLink.href} />
          </li>
        ))}
        <Button
          type='submit'
          name='Login'
          className=' text-white text-xs mt-1 bg-blue-800 h-6 w-12 rounded-full'
        />
      </ul>
    </nav>
  );
};

export default Navbar;
