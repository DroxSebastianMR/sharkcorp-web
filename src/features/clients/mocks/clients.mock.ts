import { Plus, UserRoundCheck, Users } from "lucide-react";

import type {
  Client,
  ClientIndustryOption,
  ClientStat,
} from "@/features/clients/types/clients.types";

export const clientStats: ClientStat[] = [
  {
    label: "Total clientes",
    value: "1,284",
    detail: "+12%",
    icon: Users,
    color: "bg-blue-50 text-[#0757ff]",
    cardClass: "bg-white text-slate-950",
  },
  {
    label: "Clientes activos",
    value: "1,078",
    detail: "84% ratio",
    icon: UserRoundCheck,
    color: "bg-indigo-50 text-[#2e4a93]",
    cardClass: "bg-white text-slate-950",
  },
  {
    label: "Nuevos registros",
    value: "42",
    detail: "Este mes",
    icon: Plus,
    color: "bg-white/12 text-white",
    cardClass: "bg-[#0757ff] text-white",
  },
];

export const clients: Client[] = [
  {
    initials: "LM",
    name: "Lucia Mendez",
    id: "ID: CLI-0092",
    company: "Fintech Blue S.A.",
    sector: "Finanzas",
    email: "l.mendez@fintechblue.com",
    phone: "+34 912 345 678",
    status: "Activo",
    statusClass: "bg-emerald-100 text-emerald-700",
    avatarClass: "bg-[#007c91]",
  },
  {
    initials: "RG",
    name: "Roberto Galiano",
    id: "ID: CLI-1104",
    company: "Logistica Express",
    sector: "Servicios",
    email: "rgaliano@logistica.es",
    phone: "+34 934 112 233",
    status: "Prospecto",
    statusClass: "bg-amber-100 text-amber-700",
    avatarClass: "bg-[#c87d2f]",
  },
  {
    initials: "IC",
    name: "Iker Casado",
    id: "ID: CLI-0872",
    company: "Innovatech Soluciones",
    sector: "Tecnologia",
    email: "icasado@innovatech.io",
    phone: "+34 911 009 887",
    status: "Activo",
    statusClass: "bg-emerald-100 text-emerald-700",
    avatarClass: "bg-[#17264f]",
  },
  {
    initials: "EO",
    name: "Elena Okoro",
    id: "ID: CLI-0544",
    company: "Global Trading Ltd.",
    sector: "Finanzas",
    email: "e.okoro@globaltrade.co.uk",
    phone: "+44 20 7946 0958",
    status: "Inactivo",
    statusClass: "bg-slate-100 text-slate-600",
    avatarClass: "bg-[#3f75aa]",
  },
];

export const clientIndustryOptions: ClientIndustryOption[] = [
  { label: "Tecnologia", value: "tecnologia" },
  { label: "Finanzas", value: "finanzas" },
  { label: "Servicios", value: "servicios" },
  { label: "Retail", value: "retail" },
];
