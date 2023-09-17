import React from "react";
export interface ButtonType {
  label: string;
  icon?: React.ReactNode;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

export const Button: React.FC<ButtonType> = ({
  label,
  onClick,
  icon,
  type = "submit",
  children,
}) => {
  return (
    <button
      type={type}
      className={`flex itmes-center justify-center rounded text-white text-md p-2 bg-primary`}
      onClick={onClick}
    >
      {icon && <span className="mr-2 text-red">{icon}</span>}
      {children && <p className="text-black">{children}</p>}
      {label}
    </button>
  );
};
