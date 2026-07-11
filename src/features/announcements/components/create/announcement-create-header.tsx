import { ChevronLeft } from "lucide-react";

type AnnouncementCreateHeaderProps = {
  onBack: () => void;
};

export const AnnouncementCreateHeader = ({
  onBack,
}: AnnouncementCreateHeaderProps) => {
  return (
    <>
      <button
        className="mb-5 flex cursor-pointer items-center gap-2 font-button text-sm font-semibold text-slate-600 transition hover:text-[#0757ff]"
        onClick={onBack}
        type="button"
      >
        <ChevronLeft className="h-4 w-4" />
        Volver
      </button>

      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">
            Crear nuevo anuncio
          </h2>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Publica comunicados importantes para areas o toda la organizacion.
          </p>
        </div>
      </section>
    </>
  );
};
