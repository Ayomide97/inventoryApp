interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={` p-2 rounded-md font-semibold flex items-center justify-center gap-2 cursor-pointer hover:bg-blue-400 hover:text-gray-100 transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
