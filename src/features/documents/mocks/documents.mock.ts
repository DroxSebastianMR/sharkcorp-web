import {
  ChevronLeft,
  ChevronRight,
  FileArchive,
  FileBadge,
  FileText,
} from "lucide-react";

import type {
  CompanyDocument,
  DocumentCategory,
  DocumentCategoryOption,
  DocumentPaginationItem,
  DocumentSizeFilter,
} from "@/features/documents/types/documents.types";

export const documentCategories: DocumentCategory[] = [
  { label: "Todos", count: 124, active: true },
  { label: "Contratos", count: 42 },
  { label: "Certificados", count: 18 },
  { label: "Propuestas", count: 35 },
  { label: "Backups", count: 29 },
];

export const documentSizeFilters: DocumentSizeFilter[] = [
  { label: "Pequeno (< 10MB)", active: false },
  { label: "Mediano (10MB - 100MB)", active: true },
  { label: "Grande (> 100MB)", active: false },
];

export const documents: CompanyDocument[] = [
  {
    name: "Contrato Marco 2024.pdf",
    size: "4.2 MB",
    category: "Contratos",
    date: "12 de Abr, 2024",
    icon: FileBadge,
    iconClass: "bg-red-50 text-red-600",
  },
  {
    name: "Propuesta Tecnica V3.docx",
    size: "12.8 MB",
    category: "Propuestas",
    date: "Ayer, 16:45",
    icon: FileText,
    iconClass: "bg-blue-50 text-[#0757ff]",
  },
  {
    name: "Backup_Database_Q1.zip",
    size: "84.2 MB",
    category: "Backups",
    date: "01 de Mar, 2024",
    icon: FileArchive,
    iconClass: "bg-slate-100 text-slate-600",
  },
  {
    name: "Certificado Cumplimiento ISO.pdf",
    size: "1.5 MB",
    category: "Certificados",
    date: "28 de Feb, 2024",
    icon: FileBadge,
    iconClass: "bg-red-50 text-red-600",
  },
  {
    name: "Acuerdo Confidencialidad Shark.docx",
    size: "0.8 MB",
    category: "Contratos",
    date: "Hace 2 horas",
    icon: FileText,
    iconClass: "bg-blue-50 text-[#0757ff]",
  },
];

export const documentPaginationItems: DocumentPaginationItem[] = [
  { key: "prev", icon: ChevronLeft },
  { key: "1", label: "1", active: true },
  { key: "2", label: "2" },
  { key: "3", label: "3" },
  { key: "next", icon: ChevronRight },
];

export const documentCategoryOptions: DocumentCategoryOption[] = [
  { label: "Contratos", value: "contratos" },
  { label: "Certificados", value: "certificados" },
  { label: "Propuestas", value: "propuestas" },
  { label: "Backups", value: "backups" },
];
