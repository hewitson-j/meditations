import { useNavigate } from "react-router-dom";
import "./NavButton.css";

type NavButtonType = "default" | "navigation";

interface NavButtonProps {
  to: string;
  children: string;
  type?: NavButtonType;
}

export default function NavButton({
  to,
  children,
  type = "default",
}: NavButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate(to);
      }}
      className={`navbutton-${type} navbutton`}
    >
      {children}
    </button>
  );
}
