import NavItem from "../atoms/NavItem";
const Navbar: React.FC = () => {
  const urlsLink = { text: "Login", href: "/login" };
  return (
    <nav className="flex justify-between items-center w-screen px-4 pt-3 mb-6">
      <ul className="w-screen flex justify-between items-center">
        <NavItem className="text-2xl" text="<-" href="/" />
        <li className="text-center flex flex-col items-center justify-center text-white text-xs mt-1 active:bg-blue-800 border border-blue-800 h-7 w-16 rounded-full">
          <NavItem text={urlsLink.text} href={urlsLink.href} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
