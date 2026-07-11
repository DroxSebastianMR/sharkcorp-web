import { Palette, UploadCloud } from "lucide-react";

type CompanyIdentityCardProps = {
  colors: string[];
};

export const CompanyIdentityCard = ({ colors }: CompanyIdentityCardProps) => {
  return (
    <aside className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
      <h3 className="font-heading text-xl font-extrabold text-slate-950">
        Identidad visual
      </h3>
      <p className="mt-3 text-sm font-medium leading-relaxed text-slate-500">
        Sube el logotipo oficial. Se recomienda SVG o PNG con fondo
        transparente.
      </p>
      <div className="mt-6 grid min-h-[210px] cursor-pointer place-items-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-center transition hover:border-[#0757ff] hover:bg-blue-50/40">
        <div>
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white text-[#0757ff] shadow-sm">
            <UploadCloud className="h-7 w-7" />
          </span>
          <p className="mt-4 font-button text-sm font-bold text-[#0757ff]">
            Actualizar logotipo
          </p>
          <p className="mt-1 text-xs font-medium text-slate-500">
            PNG, SVG. Max 5MB.
          </p>
        </div>
      </div>
      <div className="mt-6">
        <p className="font-heading text-sm font-bold text-slate-700">
          Colores corporativos
        </p>
        <div className="mt-3 flex gap-3">
          {colors.map((color) => (
            <span
              className="flex h-11 items-center gap-2 rounded-xl bg-slate-100 px-3 text-xs font-bold text-slate-600"
              key={color}
            >
              <span
                className="h-6 w-6 rounded-md"
                style={{ backgroundColor: color }}
              />
              {color}
            </span>
          ))}
        </div>
        <button
          className="mt-5 flex cursor-pointer items-center gap-2 font-button text-xs font-extrabold uppercase text-[#0757ff]"
          type="button"
        >
          <Palette className="h-4 w-4" />
          Personalizar paleta
        </button>
      </div>
    </aside>
  );
};
