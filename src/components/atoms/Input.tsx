const Input: React.FC<InputProps> = ({
  type,
  name,
  value,
  checked,
  placeholder,
}) => {
  return (
    <input
      className="text-sm px-4 w-auto text-white border rounded-full h-[39px] mb-4 border-blue-800 outline-none  placeholder:text-gray-500 bg-transparent placeholder:text-sm "
      type={type}
      name={name}
      value={value}
      checked={checked}
      placeholder={placeholder}
    />
  );
};
export default Input;
