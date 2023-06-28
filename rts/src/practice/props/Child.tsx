import React from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
  children: React.ReactNode;
}

export const Child: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
      {children}
    </div>
  );
};
