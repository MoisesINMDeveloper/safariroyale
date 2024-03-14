const TextTitle: React.FC<TextTitleProps> = ({ name, className }) => {
  return <h1 className="text-2xl text-white font-semibold my-5">{name}</h1>;
};

export default TextTitle;
