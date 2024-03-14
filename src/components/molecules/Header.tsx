import NavItem from "../atoms/NavItem";

const Navbar: React.FC<NavbarProps> = ({ urlsLink }) => {
  return (
    <nav className="flex justify-between items-center w-screen px-4 pt-3 mb-6">
      <ul className="w-screen text-2xl flex justify-between items-center">
        {urlsLink.map((link, index) => (
          <li
            key={index}
            className={`${
              index === 1
                ? "text-center flex flex-col items-center justify-center text-white text-xs mt-1 active:bg-blue-800 border border-blue-800 h-8 w-20 rounded-full"
                : ""
            }`}
          >
            <NavItem text={link.text} href={link.href} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
