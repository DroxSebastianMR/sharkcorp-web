import { Archive } from "lucide-react";

export const DocumentStorageCard = () => {
  return (
    <article className="overflow-hidden rounded-2xl bg-[#061b63] text-white shadow-[0_16px_32px_rgba(14,43,92,0.1)]">
      <div className="h-28 bg-[linear-gradient(135deg,#0b3db8,#061b63)] p-5">
        <Archive className="h-7 w-7 text-blue-100" />
        <p className="mt-3 font-heading text-sm font-extrabold">
          Espacio de almacenamiento
        </p>
      </div>
      <div className="p-5">
        <div className="h-2 rounded-full bg-white/20">
          <div className="h-full w-[68%] rounded-full bg-white" />
        </div>
        <p className="mt-3 text-xs font-semibold text-blue-100">
          68% de 10TB utilizado
        </p>
      </div>
    </article>
  );
};
