import Link from "next/link";

const NavItem: React.FC<NavItemProps> = ({ text, href }) => (
  <Link className="text-white" href={href}>
    {text}
  </Link>
);
export default NavItem;
