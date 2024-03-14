import NavItem from "../atoms/NavItem";
const Navbar: React.FC = () => {
  const urlsLink = [
    { text: "<-", href: "/" },
    { text: "Ingresar", href: "/login" },
  ];
  return (
    <nav className="flex justify-between items-center w-screen px-4 pt-3 mb-6">
      <ul className="w-screen flex justify-between items-center">
        <NavItem
          className="text-2xl"
          text={urlsLink[0].text}
          href={urlsLink[0].href}
        />
        <li className="text-center flex flex-col items-center justify-center text-white text-xs mt-1 active:bg-blue-800 border border-blue-800 h-8 w-20 rounded-full">
          <NavItem text={urlsLink[1].text} href={urlsLink[1].href} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
