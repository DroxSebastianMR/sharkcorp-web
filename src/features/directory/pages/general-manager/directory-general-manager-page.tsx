import {
  Code2,
  Database,
  Download,
  Edit3,
  Headphones,
  Landmark,
  LayoutTemplate,
  Paintbrush,
  Search,
  Server,
  UserCog,
  Users,
} from "lucide-react";

const areas = [
  {
    title: "RRHH",
    subtitle: "Capital humano",
    icon: Users,
    accent: "text-emerald-600 bg-emerald-50",
  },
  {
    title: "Finanzas",
    subtitle: "Gestion contable",
    icon: Landmark,
    accent: "text-amber-600 bg-amber-50",
  },
  {
    title: "Soporte",
    subtitle: "Mesa de ayuda",
    icon: Headphones,
    accent: "text-sky-600 bg-sky-50",
  },
  {
    title: "Tecnologia",
    subtitle: "Core engineering",
    icon: Server,
    accent: "text-[#0757ff] bg-blue-50",
    active: true,
  },
  {
    title: "Diseño web",
    subtitle: "UI/UX strategy",
    icon: Paintbrush,
    accent: "text-violet-600 bg-violet-50",
  },
];

const techTeams = [
  {
    title: "Frontend",
    subtitle: "8 desarrolladores",
    icon: LayoutTemplate,
    tags: ["React", "Tailwind"],
    border: "border-[#0757ff]",
  },
  {
    title: "Backend",
    subtitle: "6 desarrolladores",
    icon: Code2,
    tags: ["Go", "Python"],
    border: "border-[#2e4a93]",
  },
  {
    title: "Base de datos",
    subtitle: "3 administradores",
    icon: Database,
    tags: ["Postgres", "Redis"],
    border: "border-slate-900",
  },
];

const leadership = [
  {
    initials: "MR",
    name: "Marco Antonio Rossi",
    role: "Principal UI Architect",
    badge: "Lider de area",
    color: "bg-[#0757ff]",
  },
  {
    initials: "EV",
    name: "Elena Vance",
    role: "Sr. Design Systems Engineer",
    badge: "Colider",
    color: "bg-[#2e4a93]",
  },
];

const collaborators = [
  { initials: "JS", name: "Julian Soto", role: "React Specialist", level: "LVL 4" },
  { initials: "SM", name: "Sofia Mendez", role: "Vue Developer", level: "LVL 3" },
  { initials: "KS", name: "Kenji Sato", role: "Next.js Expert", level: "LVL 5" },
  { initials: "MO", name: "Marta Ortiz", role: "Web Animations", level: "LVL 3" },
];

const interns = [
  { initials: "LR", name: "Lucas Rivas", role: "Frontend trainee" },
  { initials: "AP", name: "Ana Paula G.", role: "UI junior intern" },
];

export const DirectoryGeneralManagerPage = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] max-w-full overflow-x-hidden px-5 py-5 lg:px-10">
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="max-w-2xl font-heading text-3xl font-extrabold leading-tight text-[#083da8]">
            Directorio corporativo - Organigrama general
          </h2>
          <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-slate-500">
            Visualiza la jerarquia de SharkCorp Enterprise desde gerencia general
            hasta las areas funcionales y departamentos tecnicos.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-white px-5 font-button text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-blue-50 hover:text-[#0757ff]"
            type="button"
          >
            <Download className="h-4 w-4" />
            Exportar PDF
          </button>
          <button
            className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-[#0757ff] px-6 font-button text-sm font-bold text-white shadow-[0_14px_28px_rgba(7,87,255,0.22)] transition hover:bg-[#064be0]"
            type="button"
          >
            <Edit3 className="h-4 w-4" />
            Gestionar
          </button>
        </div>
      </section>

      <section className="mt-8 overflow-x-auto rounded-3xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
        <div className="min-w-[920px]">
          <div className="mx-auto w-[330px] rounded-2xl border-2 border-[#0757ff] bg-white p-5 shadow-[0_16px_32px_rgba(7,87,255,0.12)]">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0757ff] text-white">
                <UserCog className="h-7 w-7" />
              </span>
              <div>
                <h3 className="font-heading text-lg font-extrabold text-[#0757ff]">
                  Gerencia general
                </h3>
                <p className="text-sm font-medium text-slate-500">
                  Direccion ejecutiva
                </p>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-xs font-extrabold text-slate-600">
                GG
              </span>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold text-[#0757ff]">
                1 titular
              </span>
            </div>
          </div>

          <div className="mx-auto h-12 w-px bg-slate-300" />
          <div className="mx-auto h-px w-[820px] bg-slate-300" />

          <div className="grid grid-cols-5 gap-4 pt-8">
            {areas.map(({ title, subtitle, icon: Icon, accent, active }) => (
              <article
                className={[
                  "relative rounded-xl border bg-white p-4 shadow-sm",
                  active
                    ? "border-[#0757ff] bg-blue-50/40"
                    : "border-slate-200",
                ].join(" ")}
                key={title}
              >
                <span className="absolute -top-8 left-1/2 h-8 w-px -translate-x-1/2 bg-slate-300" />
                <span className={`grid h-10 w-10 place-items-center rounded-xl ${accent}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <h4 className="mt-4 font-heading text-lg font-extrabold text-slate-950">
                  {title}
                </h4>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  {subtitle}
                </p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-10 h-10 w-px bg-slate-300" />
          <div className="mx-auto h-px w-[520px] bg-slate-300" />

          <div className="mx-auto grid max-w-2xl grid-cols-3 gap-4 pt-8">
            {techTeams.map(({ title, subtitle, icon: Icon, tags, border }) => (
              <article
                className={`rounded-xl border-t-4 ${border} bg-white p-4 shadow-[0_12px_24px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70`}
                key={title}
              >
                <Icon className="h-5 w-5 text-[#0757ff]" />
                <h4 className="mt-4 font-heading text-lg font-extrabold text-[#083da8]">
                  {title}
                </h4>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  {subtitle}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-extrabold text-slate-600"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-7 grid gap-5 xl:grid-cols-[minmax(0,1fr)_300px]">
        <article className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70">
          <div className="absolute right-8 top-8 font-heading text-8xl font-extrabold text-slate-100">
            FE
          </div>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold text-[#0757ff]">
            Frontend Engineering
          </span>
          <h3 className="mt-6 font-heading text-3xl font-extrabold text-slate-950">
            Frontend Department
          </h3>
          <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-slate-600">
            Responsable de construir interfaces empresariales, experiencias
            internas, rendimiento visual y componentes reutilizables para la intranet.
          </p>
          <div className="mt-6 flex gap-10">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.1em] text-slate-400">
                Miembros
              </p>
              <p className="font-heading text-2xl font-extrabold text-[#0757ff]">
                18 personas
              </p>
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.1em] text-slate-400">
                Proyectos activos
              </p>
              <p className="font-heading text-2xl font-extrabold text-[#0757ff]">
                06 activos
              </p>
            </div>
          </div>
        </article>

        <article className="rounded-2xl bg-[#0757ff] p-6 text-white shadow-[0_16px_32px_rgba(7,87,255,0.22)]">
          <h3 className="font-heading text-xl font-extrabold">Busqueda rapida</h3>
          <p className="mt-2 text-sm font-medium text-blue-100">
            Encuentra colaboradores por area, rol o habilidad.
          </p>
          <div className="mt-5 flex h-12 items-center gap-3 rounded-xl bg-white/12 px-4">
            <Search className="h-4 w-4" />
            <span className="text-sm font-semibold text-blue-100">
              Nombre o skill...
            </span>
          </div>
          <button
            className="mt-6 h-11 w-full cursor-pointer rounded-xl bg-white font-button text-sm font-bold text-[#0757ff] transition hover:bg-blue-50"
            type="button"
          >
            Configurar directorio
          </button>
        </article>
      </section>

      <section className="mt-7">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-1 w-8 rounded-full bg-[#0757ff]" />
          <h3 className="font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500">
            Leadership tier
          </h3>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {leadership.map((person) => (
            <article
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-[0_16px_32px_rgba(14,43,92,0.08)] ring-1 ring-slate-200/70"
              key={person.name}
            >
              <span className={`grid h-16 w-16 place-items-center rounded-2xl text-lg font-extrabold text-white ${person.color}`}>
                {person.initials}
              </span>
              <div>
                <span className="rounded-md bg-blue-50 px-2 py-1 text-[10px] font-extrabold uppercase text-[#0757ff]">
                  {person.badge}
                </span>
                <h4 className="mt-2 font-heading text-xl font-extrabold text-slate-950">
                  {person.name}
                </h4>
                <p className="text-sm font-medium text-slate-500">{person.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-7">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-1 w-8 rounded-full bg-slate-400" />
          <h3 className="font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500">
            Collaborators tier
          </h3>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {collaborators.map((person) => (
            <article
              className="rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-200/70"
              key={person.name}
            >
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border-2 border-[#0757ff] bg-blue-50 font-heading text-sm font-extrabold text-[#0757ff]">
                {person.initials}
              </span>
              <h4 className="mt-4 font-heading text-sm font-extrabold text-slate-950">
                {person.name}
              </h4>
              <p className="text-xs font-medium text-slate-500">{person.role}</p>
              <span className="mt-4 inline-flex rounded-md bg-slate-100 px-2 py-1 text-[10px] font-extrabold text-slate-600">
                {person.level}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-7">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-1 w-8 rounded-full bg-slate-400" />
          <h3 className="font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500">
            Interns tier
          </h3>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {interns.map((person) => (
            <article
              className="flex items-center gap-4 rounded-2xl border border-dashed border-slate-300 bg-white/70 p-4"
              key={person.name}
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-slate-200 font-heading text-xs font-extrabold text-slate-600">
                {person.initials}
              </span>
              <div>
                <h4 className="font-heading text-sm font-extrabold text-slate-950">
                  {person.name}
                </h4>
                <p className="text-xs font-medium uppercase text-slate-500">
                  {person.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
