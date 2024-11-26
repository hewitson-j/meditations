import "./Header.css";

type size = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeaderProps {
  size?: size;
  children: string;
}

export default function Header({ size = "h1", children }: HeaderProps) {
  const HeaderTag = size;
  return <HeaderTag className="header">{children}</HeaderTag>;
}
