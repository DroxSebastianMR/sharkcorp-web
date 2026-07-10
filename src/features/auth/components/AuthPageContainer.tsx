import type { ReactNode } from "react";

interface AuthPageContainerProps {
  children: ReactNode;
}

export const AuthPageContainer = ({ children }: AuthPageContainerProps) => {
  return (
    <div className="mx-auto flex w-full max-w-[360px] flex-col">{children}</div>
  );
};
