import {
  ChevronDown,
  KeyRound,
  LockKeyhole,
  Monitor,
  Save,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const activeSessions = [
  {
    device: "MacBook Pro 16",
    detail: "Chrome / macOS Sonoma",
    location: "Madrid, España",
    activity: "Ahora (Sesion actual)",
    icon: Monitor,
  },
  {
    device: "iPhone 15 Pro",
    detail: "App Mobile / iOS 17",
    location: "Madrid, España",
    activity: "Hace 2 horas",
    icon: Smartphone,
  },
  {
    device: "Dell XPS 13",
    detail: "Edge / Windows 11",
    location: "Barcelona, España",
    activity: "Ayer, 18:45",
    icon: Monitor,
  },
];

const hardeningItems = [
  "Bloqueo automatico tras intentos fallidos",
  "Caducidad de sesiones inactivas",
  "Registro de cambios en permisos",
  "Retencion de backups criticos",
];

export const SettingsGeneralManagerPage = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] max-w-full overflow-x-hidden px-5 py-5 lg:px-10">
      <section>
        <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">
          Seguridad y acceso
        </h2>
        <p className="mt-1 max-w-2xl text-sm font-medium leading-relaxed text-slate-500">
          Administra parametros de seguridad global, politicas de autenticacion
          y sesiones activas de la organizacion.
        </p>
      </section>

      <section className="mt-7">
        <main className="space-y-6">
          <section className="grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
            <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-[#0757ff]">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <button
                  aria-label="Activar autenticacion de dos pasos"
                  className="flex h-8 w-14 cursor-pointer items-center justify-end rounded-full bg-[#0757ff] p-1"
                  type="button"
                >
                  <span className="h-6 w-6 rounded-full bg-white shadow-sm" />
                </button>
              </div>
              <h3 className="mt-7 font-heading text-xl font-extrabold text-slate-950">
                Autenticacion de dos pasos
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">
                Añade una capa extra de seguridad para todos los usuarios de la plataforma.
              </p>
              <button
                className="mt-7 cursor-pointer font-button text-sm font-bold text-[#0757ff]"
                type="button"
              >
                Configurar metodos
              </button>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-[#0757ff]">
                  <LockKeyhole className="h-6 w-6" />
                </span>
                <h3 className="font-heading text-xl font-extrabold text-slate-950">
                  Politicas de contraseña
                </h3>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="font-heading text-sm font-bold text-slate-700">
                    Complejidad minima
                  </span>
                  <button
                    className="mt-2 flex h-14 w-full cursor-pointer items-center justify-between rounded-xl bg-slate-100 px-5 font-button text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-[#0757ff]"
                    type="button"
                  >
                    Fuerte (A-z, 0-9, !@#)
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </label>

                <label className="block">
                  <span className="font-heading text-sm font-bold text-slate-700">
                    Expiracion
                  </span>
                  <button
                    className="mt-2 flex h-14 w-full cursor-pointer items-center justify-between rounded-xl bg-slate-100 px-5 font-button text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-[#0757ff]"
                    type="button"
                  >
                    90 dias
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </label>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  className="flex h-12 cursor-pointer items-center gap-2 rounded-xl bg-[#0757ff] px-8 font-button text-sm font-bold text-white shadow-[0_14px_28px_rgba(7,87,255,0.22)] transition hover:bg-[#064be0]"
                  type="button"
                >
                  <Save className="h-4 w-4" />
                  Actualizar politicas
                </button>
              </div>
            </article>
          </section>

          <section className="space-y-6">
            <article className="overflow-hidden rounded-2xl bg-white shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-5">
                <h3 className="flex items-center gap-3 font-heading text-xl font-extrabold text-slate-950">
                  <Monitor className="h-5 w-5 text-[#0757ff]" />
                  Sesiones activas
                </h3>
                <span className="rounded-full bg-blue-50 px-4 py-1.5 text-xs font-extrabold text-[#0757ff]">
                  4 sesiones en curso
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[680px] text-left">
                  <thead>
                    <tr className="bg-slate-50 text-xs font-extrabold uppercase tracking-[0.08em] text-slate-500">
                      <th className="px-6 py-4">Dispositivo</th>
                      <th className="px-6 py-4">Ubicacion</th>
                      <th className="px-6 py-4">Ultima actividad</th>
                      <th className="px-6 py-4 text-right">Accion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeSessions.map(({ device, detail, location, activity, icon: Icon }) => (
                      <tr className="border-t border-slate-100" key={device}>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-4">
                            <Icon className="h-6 w-6 text-slate-600" />
                            <div>
                              <p className="font-heading text-sm font-extrabold text-slate-950">
                                {device}
                              </p>
                              <p className="text-xs font-medium text-slate-500">
                                {detail}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-sm font-medium text-slate-600">
                          {location}
                        </td>
                        <td className="px-6 py-5 text-sm font-medium text-slate-600">
                          {activity}
                        </td>
                        <td className="px-6 py-5 text-right">
                          <button
                            className="cursor-pointer font-button text-sm font-bold text-red-600 transition hover:text-red-700"
                            type="button"
                          >
                            Cerrar sesion
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <div className="grid gap-6 xl:grid-cols-2">
              <article className="rounded-2xl bg-[#0757ff] p-6 text-white shadow-[0_16px_32px_rgba(7,87,255,0.22)]">
                <KeyRound className="h-7 w-7 text-blue-100" />
                <h3 className="mt-5 font-heading text-xl font-extrabold">
                  Recomendaciones clave
                </h3>
                <div className="mt-4 space-y-3">
                  {hardeningItems.map((item) => (
                    <div className="rounded-xl bg-white/12 px-3 py-2 text-sm font-semibold" key={item}>
                      {item}
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
                <h3 className="font-heading text-xl font-extrabold text-slate-950">
                  Acceso a auditoria
                </h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-slate-500">
                  Consulta logs de acceso y actividad para complementar el
                  modulo de historial.
                </p>
                <button
                  className="mt-5 h-10 cursor-pointer rounded-xl bg-blue-50 px-5 font-button text-sm font-bold text-[#0757ff] transition hover:bg-blue-100"
                  type="button"
                >
                  Ver logs de acceso
                </button>
              </article>
            </div>
          </section>
        </main>
      </section>
    </div>
  );
};
