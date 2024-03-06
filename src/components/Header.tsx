import { ReactNode } from "react";

type HeaderProps = {
  title: string;
  level: number;
  children: ReactNode;
};

const Header = ({ title, level, children }: HeaderProps) => {
  return (
    <div>
      <h1>
        {children}
        {title} Level: {level}
      </h1>
    </div>
  );
};

export default Header;
