type TextTitleProps = {
  name: string;
  className?: string;
};
type Field = {
  type: string;
  name: string;
  placeholder: string;
};
type Link = {
  text: string;
  href: string;
};

type NavbarProps = {
  urlsLink: Link[];
};

type FormProps = {
  fields: Field[];
  buttonName: string;
  text?:string
};
interface ButtonProps {
  type: "button" | "submit" | "reset";
  name: string;
  className?: string;
}
interface InputProps {
  type: string;
  name: string;
  value?: any;
  checked?: boolean;
  placeholder: string;
  className?: string;
  [key: string]: any;
}
interface NavItemProps {
  text: string;
  href: string;
  className?: string;
}
