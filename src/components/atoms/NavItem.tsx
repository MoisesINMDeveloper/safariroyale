import Link from 'next/link';

interface NavItemProps {
  text: string;
  href: string;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ text, href }) => (
  <Link className='text-white text-xs' href={href}>
    {text}
  </Link>
);

export default NavItem;
