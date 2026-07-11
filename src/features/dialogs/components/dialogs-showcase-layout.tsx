import { Clock, Eye, Info, ListFilter } from "lucide-react";

import dialogImage from "@/assets/img/intranet/login.png";

import { DialogPreview } from "./dialog-preview";
import { dialogIntentStyles } from "../config/dialog-showcase.config";
import { useDialogShowcase } from "../hooks/use-dialog-showcase";

export const DialogsShowcaseLayout = () => {
  const {
    activeDialog,
    activeDialogId,
    activeStyles,
    ActiveActionIcon,
    groupedDialogs,
    previewDialog,
    setActiveDialogId,
    setPreviewDialogId,
  } = useDialogShowcase();

  return (
    <div className="min-h-[calc(100vh-5rem)] px-5 py-5 lg:px-10">
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">
            Biblioteca de dialogs
          </h2>
          <p className="mt-1 max-w-2xl text-sm font-medium leading-relaxed text-slate-500">
            Espacio de prueba para validar modales reutilizables antes de
            conectarlos a cada modulo de la intranet.
          </p>
        </div>
        <button
          className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-[#0757ff] px-6 font-button text-sm font-bold text-white shadow-[0_14px_28px_rgba(7,87,255,0.22)] transition hover:bg-[#064be0]"
          onClick={() => setPreviewDialogId(activeDialog.id)}
          type="button"
        >
          <Eye className="h-4 w-4" />
          Probar dialog activo
        </button>
      </section>

      <section className="mt-7 grid gap-6 xl:grid-cols-[minmax(0,1fr)_430px]">
        <div className="space-y-6">
          {Object.entries(groupedDialogs).map(([group, groupDialogs]) => (
            <article
              className="rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70"
              key={group}
            >
              <div className="mb-4 flex items-center gap-2">
                <ListFilter className="h-4 w-4 text-[#0757ff]" />
                <h3 className="font-heading text-lg font-extrabold text-slate-950">
                  {group}
                </h3>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {groupDialogs.map((dialog) => {
                  const Icon = dialog.icon;
                  const isActive = activeDialogId === dialog.id;
                  const styles = dialogIntentStyles[dialog.intent];

                  return (
                    <button
                      className={[
                        "group cursor-pointer rounded-2xl bg-slate-50 p-4 text-left ring-1 transition duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_34px_rgba(14,43,92,0.1)]",
                        isActive ? styles.border : "ring-slate-200/80",
                      ].join(" ")}
                      key={dialog.id}
                      onClick={() => setActiveDialogId(dialog.id)}
                      type="button"
                    >
                      <span className={`grid h-11 w-11 place-items-center rounded-xl ${styles.soft}`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="mt-4 block font-heading text-base font-extrabold text-slate-950">
                        {dialog.title}
                      </span>
                      <span className="mt-2 line-clamp-2 block text-sm font-medium leading-relaxed text-slate-500">
                        {dialog.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </article>
          ))}
        </div>

        <aside className="space-y-5">
          <article className="rounded-[28px] bg-white p-6 text-center shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
            <span
              className={`mx-auto inline-flex rounded-full px-3 py-1 text-xs font-extrabold ${activeStyles.badge}`}
            >
              {activeDialog.group}
            </span>
            <div className="mx-auto mt-4 grid h-28 w-28 place-items-center overflow-visible">
              <img
                src={dialogImage}
                alt=""
                className="h-28 w-28 object-contain drop-shadow-[0_14px_18px_rgba(15,23,42,0.12)]"
              />
            </div>
            <h3 className="mt-5 font-heading text-2xl font-extrabold text-slate-950">
              {activeDialog.title}
            </h3>
            <p className="mx-auto mt-3 max-w-[330px] text-sm font-semibold leading-relaxed text-slate-500">
              {activeDialog.description}
            </p>
            <button
              className={`mt-6 flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-2xl font-button text-sm font-extrabold transition ${activeStyles.action}`}
              onClick={() => setPreviewDialogId(activeDialog.id)}
              type="button"
            >
              <ActiveActionIcon className="h-4 w-4" />
              Abrir este dialog
            </button>
          </article>

          <article className="rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-5 w-5 text-[#0757ff]" />
              <div>
                <h3 className="font-heading text-lg font-extrabold text-slate-950">
                  Uso sugerido
                </h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-slate-500">
                  Estos dialogs cubren confirmaciones, formularios rapidos,
                  seleccion, archivos, resultados y bloqueos criticos.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl bg-[#0757ff] p-5 text-white shadow-[0_18px_36px_rgba(7,87,255,0.18)]">
            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5" />
              <div>
                <h3 className="font-heading text-lg font-extrabold">
                  Siguiente paso
                </h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-white/80">
                  Cuando tengas los bocetos finales, podemos conectar cada uno a
                  acciones reales por modulo.
                </p>
              </div>
            </div>
          </article>
        </aside>
      </section>

      {previewDialog ? (
        <DialogPreview
          dialog={previewDialog}
          onClose={() => setPreviewDialogId(null)}
        />
      ) : null}
    </div>
  );
};
