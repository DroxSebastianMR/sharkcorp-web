import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface AuthBackButtonProps {
  to: string;
  text: string;
  className?: string;
}

export const AuthBackButton = ({
  to,
  text,
  className = "",
}: AuthBackButtonProps) => {
  return (
    <Link
      to={to}
      className={`
        inline-flex
        w-fit
        items-center
        gap-2
        text-sm
        font-medium
        text-slate-600
        transition-colors
        hover:text-slate-950
        ${className}
      `}
    >
      <ArrowLeft className="h-4 w-4" />
      {text}
    </Link>
  );
};
