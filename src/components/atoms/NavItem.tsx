import Link from "next/link";

const NavItem: React.FC<NavItemProps> = ({ text, href, className }) => (
  <Link className="text-white text-xs" href={href}>
    {text}
  </Link>
);
export default NavItem;
