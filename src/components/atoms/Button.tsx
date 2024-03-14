const Button: React.FC<ButtonProps> = ({ type, name, ...rest }) => {
  return (
    <button
      className="bg-blue-800 font-bold text-white w-[7rem] rounded-full h-10"
      type={type}
      {...rest}
    >
      {name}
    </button>
  );
};

export default Button;
