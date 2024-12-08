import { ReactNode } from "react";
import "./PageContainer.css";

interface PageContainerProps {
  children: ReactNode;
  className: string;
}

export default function PageContainer({
  children,
  className,
}: PageContainerProps) {
  return <div className={`${className} page-container`}>{children}</div>;
}
