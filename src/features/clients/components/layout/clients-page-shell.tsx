import type { PropsWithChildren } from "react";

export const ClientsPageShell = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-[calc(100vh-5rem)] max-w-full overflow-x-hidden px-5 py-5 lg:px-10">
      {children}
    </div>
  );
};
