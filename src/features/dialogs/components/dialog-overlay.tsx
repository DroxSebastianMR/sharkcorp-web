import type { ReactNode } from "react";

import { useLockBodyScroll } from "../hooks/use-lock-body-scroll";

type DialogOverlayProps = {
  children: ReactNode;
  onClose: () => void;
};

export const DialogOverlay = ({ children, onClose }: DialogOverlayProps) => {
  useLockBodyScroll();

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/45 px-4 py-4 backdrop-blur-[3px]">
      <button
        aria-label="Cerrar dialog"
        className="absolute inset-0 z-0 cursor-default"
        onClick={onClose}
        type="button"
      />
      <div className="relative z-10 flex w-full justify-center">{children}</div>
    </div>
  );
};
