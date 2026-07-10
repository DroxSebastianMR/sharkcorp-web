import {
  Building2,
  ChevronDown,
  Fingerprint,
  Globe2,
  Mail,
  MapPin,
  Palette,
  Phone,
  Save,
  UploadCloud,
} from "lucide-react";

const companyFields = [
  {
    label: "Nombre de la empresa",
    value: "SharkCorp Enterprise",
    icon: Building2,
  },
  {
    label: "NIT / ID fiscal",
    value: "900.456.789-1",
    icon: Fingerprint,
  },
];

export const SettingsCompanyPage = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] max-w-full overflow-x-hidden px-5 py-5 lg:px-10">
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-3xl font-extrabold text-[#083da8]">
            Configuracion de empresa
          </h2>
          <p className="mt-1 max-w-2xl text-sm font-medium leading-relaxed text-slate-500">
            Gestiona identidad visual, informacion legal y datos oficiales de contacto.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="h-11 cursor-pointer rounded-xl border border-slate-200 bg-white px-6 font-button text-sm font-bold text-slate-700 transition hover:border-[#0757ff] hover:text-[#0757ff]" type="button">
            Descartar
          </button>
          <button className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-[#0757ff] px-6 font-button text-sm font-bold text-white shadow-[0_14px_28px_rgba(7,87,255,0.22)] transition hover:bg-[#064be0]" type="button">
            <Save className="h-4 w-4" />
            Guardar cambios
          </button>
        </div>
      </section>

      <section className="mt-7 grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
          <h3 className="font-heading text-xl font-extrabold text-slate-950">
            Identidad visual
          </h3>
          <p className="mt-3 text-sm font-medium leading-relaxed text-slate-500">
            Sube el logotipo oficial. Se recomienda SVG o PNG con fondo transparente.
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
              {["#003EC7", "#061B63"].map((color) => (
                <span className="flex h-11 items-center gap-2 rounded-xl bg-slate-100 px-3 text-xs font-bold text-slate-600" key={color}>
                  <span className="h-6 w-6 rounded-md" style={{ backgroundColor: color }} />
                  {color}
                </span>
              ))}
            </div>
            <button className="mt-5 flex cursor-pointer items-center gap-2 font-button text-xs font-extrabold uppercase text-[#0757ff]" type="button">
              <Palette className="h-4 w-4" />
              Personalizar paleta
            </button>
          </div>
        </aside>

        <main className="space-y-6">
          <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
            <h3 className="flex items-center gap-3 font-heading text-xl font-extrabold text-slate-950">
              <Building2 className="h-5 w-5 text-[#0757ff]" />
              Informacion general
            </h3>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {companyFields.map(({ label, value, icon: Icon }) => (
                <label className="block" key={label}>
                  <span className="font-heading text-sm font-bold text-slate-600">{label}</span>
                  <div className="mt-2 flex h-12 items-center gap-3 rounded-xl bg-slate-100 px-4">
                    <Icon className="h-4 w-4 text-slate-500" />
                    <input className="h-full flex-1 bg-transparent font-body text-sm font-medium text-slate-700 outline-none" defaultValue={value} />
                  </div>
                </label>
              ))}
              <label className="block md:col-span-2">
                <span className="font-heading text-sm font-bold text-slate-600">Direccion de sede principal</span>
                <div className="mt-2 flex h-12 items-center gap-3 rounded-xl bg-slate-100 px-4">
                  <MapPin className="h-4 w-4 text-slate-500" />
                  <input className="h-full flex-1 bg-transparent font-body text-sm font-medium text-slate-700 outline-none" defaultValue="Av. El Dorado #69-76, Edificio Central, Bogota, Colombia" />
                </div>
              </label>
              {["Tecnologia y software", "501 - 1,000 empleados"].map((value, index) => (
                <button className="flex h-12 cursor-pointer items-center justify-between rounded-xl bg-slate-100 px-4 font-button text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-[#0757ff]" key={value} type="button">
                  {index === 0 ? "Sector: " : "Tamano: "}
                  {value}
                  <ChevronDown className="h-4 w-4" />
                </button>
              ))}
            </div>
          </article>

          <article className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
            <h3 className="flex items-center gap-3 font-heading text-xl font-extrabold text-slate-950">
              <Mail className="h-5 w-5 text-[#0757ff]" />
              Datos de contacto oficiales
            </h3>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="flex h-12 items-center gap-3 rounded-xl bg-slate-100 px-4">
                <Mail className="h-4 w-4 text-slate-500" />
                <span className="text-sm font-medium text-slate-700">contact@sharkcorp.com</span>
              </div>
              <div className="flex h-12 items-center gap-3 rounded-xl bg-slate-100 px-4">
                <Phone className="h-4 w-4 text-slate-500" />
                <span className="text-sm font-medium text-slate-700">+57 (601) 456-7890</span>
              </div>
              <div className="flex h-12 items-center gap-3 rounded-xl bg-slate-100 px-4 md:col-span-2">
                <Globe2 className="h-4 w-4 text-slate-500" />
                <span className="text-sm font-medium text-slate-700">https://sharkcorp-enterprise.com</span>
              </div>
            </div>
          </article>
        </main>
      </section>
    </div>
  );
};
