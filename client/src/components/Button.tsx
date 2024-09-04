import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`border ${className}`}>
      {children}
    </button>
  );
};

export default Button;
