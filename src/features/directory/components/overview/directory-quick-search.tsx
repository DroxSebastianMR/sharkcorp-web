import { Search } from "lucide-react";

export const DirectoryQuickSearch = () => {
  return (
    <article className="rounded-2xl bg-[#0757ff] p-6 text-white shadow-[0_16px_32px_rgba(7,87,255,0.22)]">
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_420px_220px] xl:items-center">
        <div>
          <h3 className="font-heading text-2xl font-extrabold">
            Busqueda rapida
          </h3>
          <p className="mt-2 text-sm font-medium text-blue-100">
            Encuentra colaboradores por area, rol o habilidad.
          </p>
        </div>

        <div className="flex h-12 items-center gap-3 rounded-xl bg-white/12 px-4">
          <Search className="h-4 w-4" />
          <span className="text-sm font-semibold text-blue-100">
            Nombre o skill...
          </span>
        </div>

        <button
          className="h-11 w-full cursor-pointer rounded-xl bg-white font-button text-sm font-bold text-[#0757ff] transition hover:bg-blue-50"
          type="button"
        >
          Configurar directorio
        </button>
      </div>
    </article>
  );
};
