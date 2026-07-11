import { AlertCircle, ArrowUpRight, FolderKanban, Users } from "lucide-react";

import type {
  Project,
  ProjectClientOption,
  ProjectPriority,
  ProjectStat,
  ProjectTeamMember,
} from "@/features/projects/types/projects.types";

export const projectStats: ProjectStat[] = [
  { label: "Proyectos totales", value: "12", icon: FolderKanban },
  { label: "Progreso promedio", value: "74%", icon: ArrowUpRight },
  { label: "Fechas limite proximas", value: "3", icon: AlertCircle },
  { label: "Miembros activos", value: "24", icon: Users },
];

export const projects: Project[] = [
  {
    title: "Migracion Cloud Ph-2",
    status: "En progreso",
    statusClass: "bg-blue-50 text-[#0757ff]",
    client: "SharkCorp Enterprise",
    description:
      "Optimizacion de infraestructura global para mejorar escalabilidad, seguridad y cumplimiento.",
    progress: 65,
    date: "24 Oct 2023",
    team: ["AM", "CG", "LS"],
    priority: "Alta",
    budget: "$84,000",
    owner: "Ana Duarte",
    deliverables: [
      "Auditoria cloud",
      "Migracion controlada",
      "Monitoreo post despliegue",
    ],
  },
  {
    title: "Alpha UI Revamp",
    status: "En pausa",
    statusClass: "bg-slate-100 text-slate-600",
    client: "Alpha Corp",
    description:
      "Rediseno completo de la interfaz del sistema corporativo y sus tokens visuales.",
    progress: 24,
    date: "12 Nov 2023",
    team: ["JR", "EV"],
    priority: "Media",
    budget: "$38,500",
    owner: "Carlos Paredes",
    deliverables: ["Sistema visual", "Componentes base", "QA de accesibilidad"],
  },
  {
    title: "Auditoria financiera Q3",
    status: "Completado",
    statusClass: "bg-emerald-100 text-emerald-700",
    client: "Global Trading Ltd.",
    description:
      "Auditoria integral de gastos internos y conciliacion de registros fiscales.",
    progress: 100,
    date: "30 Sep 2023",
    team: ["EO", "RM", "AT"],
    priority: "Critica",
    budget: "$52,000",
    owner: "Elena Okoro",
    deliverables: ["Informe ejecutivo", "Validacion fiscal", "Cierre documental"],
  },
];

export const projectPriorities: ProjectPriority[] = [
  { label: "Baja", selected: false },
  { label: "Media", selected: true },
  { label: "Alta", selected: false },
];

export const projectClientOptions: ProjectClientOption[] = [
  { label: "SharkCorp Enterprise", value: "sharkcorp" },
  { label: "Alpha Corp", value: "alpha" },
  { label: "Global Trading Ltd.", value: "global" },
];

export const projectTeam: ProjectTeamMember[] = [
  { initials: "AD", name: "Ana Duarte", role: "Lead Dev", selected: true },
  { initials: "CP", name: "Carlos Paredes", role: "Producto", selected: false },
  { initials: "ER", name: "Elena Ruiz", role: "Data Analyst", selected: false },
];
