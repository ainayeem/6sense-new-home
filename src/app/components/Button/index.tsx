import { ReactNode } from "react";

const Button = ({
  text,
  className,
  icon,
  position,
  loading
}: {
  text: string;
  className?: string;
  icon?: ReactNode;
  position?: string;
  loading?: boolean
}): JSX.Element => {
  return (
    <button className={`flex items-center justify-center gap-2 ${className}`}>
      {position === "before" ? icon : ""}
      {loading ? icon : text}
      {position === "after" ? icon : ""}
      {!position && icon}
    </button>
  );
};

export default Button;
