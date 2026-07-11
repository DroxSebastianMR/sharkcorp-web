import {
  Code2,
  Database,
  Landmark,
  LayoutTemplate,
  Megaphone,
  Paintbrush,
  PackageCheck,
  Server,
  UserCog,
  Users,
} from "lucide-react";

import type {
  DirectoryDepartment,
  DirectoryNode,
} from "@/features/directory/types/directory.types";
import { IMAGES } from "@/shared/constants/images";

const mascotImage = IMAGES.auth.login;

export const organizationChart: DirectoryNode = {
  id: "general-management",
  title: "Gerencia general",
  subtitle: "Direccion ejecutiva",
  acronym: "GG",
  icon: UserCog,
  accentClass: "bg-[#0757ff] text-white",
  children: [
    {
      id: "chro",
      title: "Chief Human Resources Officer",
      subtitle: "CHRO",
      acronym: "CHRO",
      icon: Users,
      accentClass: "bg-emerald-50 text-emerald-600",
      children: [
        {
          id: "rrhh",
          title: "RRHH",
          subtitle: "Capital humano",
          icon: Users,
          accentClass: "bg-emerald-50 text-emerald-600",
        },
      ],
    },
    {
      id: "cdo",
      title: "Chief Design Officer",
      subtitle: "CDO",
      acronym: "CDO",
      icon: Paintbrush,
      accentClass: "bg-violet-50 text-violet-600",
      children: [
        {
          id: "web-design",
          title: "Diseno web",
          subtitle: "UI/UX strategy",
          icon: Paintbrush,
          accentClass: "bg-violet-50 text-violet-600",
        },
      ],
    },
    {
      id: "cto",
      title: "Chief Technology Officer",
      subtitle: "CTO",
      acronym: "CTO",
      icon: Server,
      accentClass: "bg-blue-50 text-[#0757ff]",
      children: [
        {
          id: "technology",
          title: "Tecnologia",
          subtitle: "Core engineering",
          icon: Server,
          accentClass: "bg-blue-50 text-[#0757ff]",
          children: [
            {
              id: "frontend",
              title: "Frontend",
              subtitle: "Interfaces internas",
              icon: LayoutTemplate,
              accentClass: "bg-sky-50 text-sky-600",
            },
            {
              id: "backend",
              title: "Backend",
              subtitle: "Servicios y API",
              icon: Code2,
              accentClass: "bg-indigo-50 text-indigo-600",
            },
            {
              id: "database",
              title: "Base de datos",
              subtitle: "Datos y respaldo",
              icon: Database,
              accentClass: "bg-slate-100 text-slate-700",
            },
          ],
        },
      ],
    },
    {
      id: "cpo",
      title: "Chief Product Officer",
      subtitle: "CPO",
      acronym: "CPO",
      icon: PackageCheck,
      accentClass: "bg-sky-50 text-sky-600",
      children: [
        {
          id: "products",
          title: "Productos",
          subtitle: "Product strategy",
          icon: PackageCheck,
          accentClass: "bg-sky-50 text-sky-600",
        },
      ],
    },
    {
      id: "cfo",
      title: "Chief Financial Officer",
      subtitle: "CFO",
      acronym: "CFO",
      icon: Landmark,
      accentClass: "bg-amber-50 text-amber-600",
      children: [
        {
          id: "finance",
          title: "Finanzas",
          subtitle: "Gestion contable",
          icon: Landmark,
          accentClass: "bg-amber-50 text-amber-600",
        },
      ],
    },
    {
      id: "cmo",
      title: "Chief Marketing Officer",
      subtitle: "CMO",
      acronym: "CMO",
      icon: Megaphone,
      accentClass: "bg-rose-50 text-rose-600",
      children: [
        {
          id: "marketing",
          title: "Marketing",
          subtitle: "Growth strategy",
          icon: Megaphone,
          accentClass: "bg-rose-50 text-rose-600",
        },
      ],
    },
  ],
};

export const directoryDepartments: DirectoryDepartment[] = [
  {
    id: "general-management",
    eyebrow: "Direccion ejecutiva",
    title: "Gerencia general",
    description:
      "Coordina la vision empresarial, prioriza objetivos estrategicos y supervisa los indicadores clave de SharkCorp.",
    members: "3 lideres",
    activeProjects: "12 iniciativas",
    image: mascotImage,
    initials: "GG",
    parent: "Directorio corporativo",
    leaders: [
      {
        initials: "GG",
        name: "Gerencia General",
        role: "Direccion ejecutiva",
        badge: "Titular",
        colorClass: "bg-[#0757ff]",
      },
    ],
    collaborators: [],
  },
  {
    id: "chro",
    eyebrow: "Direccion de talento",
    title: "Chief Human Resources Officer",
    description:
      "Dirige la estrategia de talento, cultura, bienestar y desarrollo organizacional.",
    members: "6 personas",
    activeProjects: "03 activos",
    image: mascotImage,
    initials: "CHRO",
    parent: "Gerencia general",
    leaders: [
      {
        initials: "BM",
        name: "Beatriz Moreno",
        role: "Chief Human Resources Officer",
        badge: "CHRO",
        colorClass: "bg-emerald-600",
      },
    ],
    collaborators: [],
  },
  {
    id: "cdo",
    eyebrow: "Direccion de diseno",
    title: "Chief Design Officer",
    description:
      "Define la estrategia visual, experiencia de usuario, identidad digital y consistencia del ecosistema.",
    members: "5 personas",
    activeProjects: "04 activos",
    image: mascotImage,
    initials: "CDO",
    parent: "Gerencia general",
    leaders: [
      {
        initials: "EV",
        name: "Elena Vance",
        role: "Chief Design Officer",
        badge: "CDO",
        colorClass: "bg-violet-600",
      },
    ],
    collaborators: [],
  },
  {
    id: "cfo",
    eyebrow: "Direccion financiera",
    title: "Chief Financial Officer",
    description:
      "Supervisa gestion financiera, control presupuestal y salud administrativa de la organizacion.",
    members: "7 personas",
    activeProjects: "04 activos",
    image: mascotImage,
    initials: "CFO",
    parent: "Gerencia general",
    leaders: [
      {
        initials: "CF",
        name: "Camila Fuentes",
        role: "Chief Financial Officer",
        badge: "CFO",
        colorClass: "bg-amber-600",
      },
    ],
    collaborators: [],
  },
  {
    id: "rrhh",
    eyebrow: "Capital humano",
    title: "RRHH",
    description:
      "Gestiona talento, asistencia, bienestar, documentacion laboral y comunicacion interna.",
    members: "6 personas",
    activeProjects: "03 activos",
    image: mascotImage,
    initials: "RH",
    parent: "CHRO",
    leaders: [
      {
        initials: "BM",
        name: "Beatriz Moreno",
        role: "People Operations Lead",
        badge: "Lider de area",
        colorClass: "bg-emerald-600",
      },
    ],
    collaborators: [
      {
        initials: "JS",
        name: "Javier Solis",
        role: "Analista de talento",
        colorClass: "bg-[#2e4a93]",
      },
      {
        initials: "AT",
        name: "Ana Torres",
        role: "Coordinacion interna",
        colorClass: "bg-slate-600",
      },
    ],
  },
  {
    id: "web-design",
    eyebrow: "UI/UX strategy",
    title: "Diseno web",
    description:
      "Define experiencias visuales, prototipos, flujos de usuario y consistencia de componentes.",
    members: "5 personas",
    activeProjects: "04 activos",
    image: mascotImage,
    initials: "DW",
    parent: "CDO",
    leaders: [
      {
        initials: "EV",
        name: "Elena Vance",
        role: "Sr. Design Systems Engineer",
        badge: "Lider de area",
        colorClass: "bg-violet-600",
      },
    ],
    collaborators: [
      {
        initials: "MO",
        name: "Marta Ortiz",
        role: "Web animations",
        colorClass: "bg-[#0757ff]",
      },
    ],
  },
  {
    id: "cto",
    eyebrow: "Direccion tecnologica",
    title: "Chief Technology Officer",
    description:
      "Lidera arquitectura, infraestructura, seguridad tecnica y evolucion de plataformas empresariales.",
    members: "21 personas",
    activeProjects: "08 activos",
    image: mascotImage,
    initials: "CTO",
    parent: "Gerencia general",
    leaders: [
      {
        initials: "MR",
        name: "Marco Antonio Rossi",
        role: "Chief Technology Officer",
        badge: "CTO",
        colorClass: "bg-[#0757ff]",
      },
    ],
    collaborators: [],
  },
  {
    id: "technology",
    eyebrow: "Core engineering",
    title: "Tecnologia",
    description:
      "Agrupa equipos tecnicos responsables de infraestructura, desarrollo, datos y continuidad operativa.",
    members: "18 personas",
    activeProjects: "06 activos",
    image: mascotImage,
    initials: "TE",
    parent: "CTO",
    leaders: [
      {
        initials: "LS",
        name: "Luis Salazar",
        role: "Engineering Manager",
        badge: "Lider tecnico",
        colorClass: "bg-[#0757ff]",
      },
    ],
    collaborators: [],
  },
  {
    id: "cpo",
    eyebrow: "Direccion de producto",
    title: "Chief Product Officer",
    description:
      "Prioriza la estrategia de producto, roadmap, descubrimiento de necesidades y alineacion con negocio.",
    members: "7 personas",
    activeProjects: "05 activos",
    image: mascotImage,
    initials: "CPO",
    parent: "Gerencia general",
    leaders: [
      {
        initials: "AD",
        name: "Ana Duarte",
        role: "Chief Product Officer",
        badge: "CPO",
        colorClass: "bg-sky-600",
      },
    ],
    collaborators: [],
  },
  {
    id: "products",
    eyebrow: "Product strategy",
    title: "Productos",
    description:
      "Gestiona roadmap, prioridades, validacion de iniciativas y coordinacion de entregables con tecnologia.",
    members: "7 personas",
    activeProjects: "05 activos",
    image: mascotImage,
    initials: "PR",
    parent: "CPO",
    leaders: [
      {
        initials: "AD",
        name: "Ana Duarte",
        role: "Product Lead",
        badge: "Lider de area",
        colorClass: "bg-sky-600",
      },
    ],
    collaborators: [
      {
        initials: "CP",
        name: "Carlos Paredes",
        role: "Product analyst",
        colorClass: "bg-[#2e4a93]",
      },
    ],
  },
  {
    id: "cmo",
    eyebrow: "Direccion de marketing",
    title: "Chief Marketing Officer",
    description:
      "Lidera posicionamiento, crecimiento, campanas, comunicacion externa y analisis de mercado.",
    members: "5 personas",
    activeProjects: "04 activos",
    image: mascotImage,
    initials: "CMO",
    parent: "Gerencia general",
    leaders: [
      {
        initials: "LC",
        name: "Lucia Castillo",
        role: "Chief Marketing Officer",
        badge: "CMO",
        colorClass: "bg-rose-600",
      },
    ],
    collaborators: [],
  },
  {
    id: "marketing",
    eyebrow: "Growth strategy",
    title: "Marketing",
    description:
      "Ejecuta campanas, medicion de alcance, comunicacion comercial y seguimiento de oportunidades.",
    members: "5 personas",
    activeProjects: "04 activos",
    image: mascotImage,
    initials: "MK",
    parent: "CMO",
    leaders: [
      {
        initials: "LC",
        name: "Lucia Castillo",
        role: "Marketing Lead",
        badge: "Lider de area",
        colorClass: "bg-rose-600",
      },
    ],
    collaborators: [
      {
        initials: "MS",
        name: "Marcos Silva",
        role: "Growth analyst",
        colorClass: "bg-[#2e4a93]",
      },
    ],
  },
  {
    id: "frontend",
    eyebrow: "Frontend engineering",
    title: "Frontend",
    description:
      "Construye interfaces empresariales, experiencias internas, rendimiento visual y componentes reutilizables.",
    members: "8 personas",
    activeProjects: "06 activos",
    image: mascotImage,
    initials: "FE",
    parent: "Tecnologia",
    leaders: [
      {
        initials: "JR",
        name: "Julian Soto",
        role: "React Specialist",
        badge: "Lider de area",
        colorClass: "bg-[#0757ff]",
      },
    ],
    collaborators: [
      {
        initials: "SM",
        name: "Sofia Mendez",
        role: "Vue Developer",
        colorClass: "bg-[#2e4a93]",
      },
      {
        initials: "KS",
        name: "Kenji Sato",
        role: "Next.js Expert",
        colorClass: "bg-slate-700",
      },
    ],
  },
  {
    id: "backend",
    eyebrow: "Servicios y API",
    title: "Backend",
    description:
      "Administra servicios, integraciones, reglas de negocio, APIs internas y procesos transaccionales.",
    members: "6 personas",
    activeProjects: "05 activos",
    image: mascotImage,
    initials: "BE",
    parent: "Tecnologia",
    leaders: [
      {
        initials: "CP",
        name: "Carlos Paredes",
        role: "Backend Lead",
        badge: "Lider de area",
        colorClass: "bg-indigo-600",
      },
    ],
    collaborators: [
      {
        initials: "RG",
        name: "Roberto Gomez",
        role: "API engineer",
        colorClass: "bg-[#2e4a93]",
      },
    ],
  },
  {
    id: "database",
    eyebrow: "Datos y respaldo",
    title: "Base de datos",
    description:
      "Gestiona modelos de datos, rendimiento, respaldos, disponibilidad y auditoria de informacion critica.",
    members: "3 personas",
    activeProjects: "04 activos",
    image: mascotImage,
    initials: "BD",
    parent: "Tecnologia",
    leaders: [
      {
        initials: "ER",
        name: "Elena Ruiz",
        role: "Data Lead",
        badge: "Lider de area",
        colorClass: "bg-slate-800",
      },
    ],
    collaborators: [
      {
        initials: "DM",
        name: "Diego Martinez",
        role: "Database admin",
        colorClass: "bg-[#0757ff]",
      },
    ],
  },
  {
    id: "finance",
    eyebrow: "Gestion contable",
    title: "Finanzas",
    description:
      "Controla flujos contables, reportes financieros, conciliaciones, presupuestos y cumplimiento fiscal.",
    members: "4 personas",
    activeProjects: "03 activos",
    image: mascotImage,
    initials: "FI",
    parent: "CFO",
    leaders: [
      {
        initials: "EO",
        name: "Elena Okoro",
        role: "Financial controller",
        badge: "Lider de area",
        colorClass: "bg-amber-600",
      },
    ],
    collaborators: [
      {
        initials: "RM",
        name: "Ricardo Mendoza",
        role: "Analista financiero",
        colorClass: "bg-[#2e4a93]",
      },
    ],
  },
];
