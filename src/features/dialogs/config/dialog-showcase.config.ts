import {
  ArrowRight,
  CheckCircle2,
  Download,
  Eye,
  FileText,
  ListFilter,
  LogOut,
  Pencil,
  RotateCcw,
  Save,
  Search,
  ShieldAlert,
  ShieldCheck,
  Trash2,
  UploadCloud,
} from "lucide-react";

import type {
  DialogIntent,
  DialogIntentStyle,
  DialogVariant,
} from "../types/dialog.types";

export const dialogIntentStyles: Record<DialogIntent, DialogIntentStyle> = {
  blue: {
    soft: "bg-blue-50 text-[#0757ff]",
    action:
      "bg-[#0757ff] text-white shadow-[0_14px_28px_rgba(7,87,255,0.26)] hover:bg-[#064be0]",
    border: "ring-[#0757ff]/35",
    badge: "bg-blue-50 text-[#0757ff]",
  },
  green: {
    soft: "bg-emerald-50 text-emerald-600",
    action:
      "bg-emerald-600 text-white shadow-[0_14px_28px_rgba(5,150,105,0.24)] hover:bg-emerald-700",
    border: "ring-emerald-500/30",
    badge: "bg-emerald-50 text-emerald-700",
  },
  red: {
    soft: "bg-red-50 text-red-600",
    action:
      "bg-red-600 text-white shadow-[0_14px_28px_rgba(220,38,38,0.28)] hover:bg-red-700",
    border: "ring-red-500/30",
    badge: "bg-red-50 text-red-700",
  },
  amber: {
    soft: "bg-amber-50 text-amber-600",
    action:
      "bg-amber-500 text-white shadow-[0_14px_28px_rgba(245,158,11,0.25)] hover:bg-amber-600",
    border: "ring-amber-500/30",
    badge: "bg-amber-50 text-amber-700",
  },
  slate: {
    soft: "bg-slate-100 text-slate-600",
    action:
      "bg-slate-900 text-white shadow-[0_14px_28px_rgba(15,23,42,0.2)] hover:bg-slate-800",
    border: "ring-slate-300",
    badge: "bg-slate-100 text-slate-700",
  },
};

export const dialogVariants: DialogVariant[] = [
  {
    id: "delete",
    group: "Confirmacion",
    kind: "confirm",
    title: "Eliminar registro",
    description:
      "Esta accion no se puede deshacer. Confirma si deseas eliminar este elemento.",
    actionLabel: "Eliminar",
    cancelLabel: "Cancelar",
    icon: Trash2,
    actionIcon: Trash2,
    intent: "red",
  },
  {
    id: "confirm",
    group: "Confirmacion",
    kind: "confirm",
    title: "Confirmar accion",
    description:
      "Revisa la informacion antes de continuar. Esta accion aplicara los cambios seleccionados.",
    actionLabel: "Confirmar",
    cancelLabel: "Cancelar",
    icon: CheckCircle2,
    actionIcon: ShieldCheck,
    intent: "green",
  },
  {
    id: "logout",
    group: "Confirmacion",
    kind: "confirm",
    title: "Cerrar sesion",
    description:
      "Tu sesion actual se cerrara en este dispositivo. Podras volver a ingresar con tus credenciales.",
    actionLabel: "Cerrar sesion",
    cancelLabel: "Permanecer",
    icon: LogOut,
    actionIcon: LogOut,
    intent: "blue",
  },
  {
    id: "discard",
    group: "Confirmacion",
    kind: "confirm",
    title: "Descartar cambios",
    description:
      "Los cambios que no hayas guardado se perderan. Puedes cancelar y continuar editando.",
    actionLabel: "Descartar",
    cancelLabel: "Seguir editando",
    icon: RotateCcw,
    actionIcon: RotateCcw,
    intent: "amber",
  },
  {
    id: "quick-detail",
    group: "Operacion",
    kind: "detail",
    title: "Vista detallada",
    description:
      "Modal amplio para revisar un registro con informacion financiera, objetivos y acciones.",
    actionLabel: "Editar registro",
    cancelLabel: "Cerrar",
    icon: Eye,
    actionIcon: Pencil,
    intent: "blue",
  },
  {
    id: "dialog-form",
    group: "Operacion",
    kind: "form",
    title: "Formulario corto",
    description:
      "Edicion compacta para cambiar informacion sin salir del modulo actual.",
    actionLabel: "Guardar cambios",
    cancelLabel: "Cancelar",
    icon: FileText,
    actionIcon: Save,
    intent: "blue",
  },
  {
    id: "selector-search",
    group: "Operacion",
    kind: "selector",
    title: "Selector con busqueda",
    description:
      "Dialog para elegir colaboradores, clientes, proyectos o documentos con filtros.",
    actionLabel: "Seleccionar",
    cancelLabel: "Cancelar",
    icon: Search,
    actionIcon: CheckCircle2,
    intent: "blue",
  },
  {
    id: "advanced-filter",
    group: "Operacion",
    kind: "advanced-filter",
    title: "Filtros avanzados",
    description:
      "Modal para aplicar filtros por rango, departamento, responsable, categoria, estado y prioridad.",
    actionLabel: "Aplicar filtros",
    cancelLabel: "Limpiar filtros",
    icon: ListFilter,
    actionIcon: ListFilter,
    intent: "blue",
  },
  {
    id: "approval-request",
    group: "Operacion",
    kind: "approval",
    title: "Aprobar o rechazar solicitud",
    description:
      "Revision de solicitud con datos del colaborador, documentos adjuntos y comentarios administrativos.",
    actionLabel: "Aprobar solicitud",
    cancelLabel: "Rechazar",
    icon: ShieldCheck,
    actionIcon: CheckCircle2,
    intent: "green",
  },
  {
    id: "advanced-upload",
    group: "Archivos",
    kind: "upload",
    title: "Carga de archivos",
    description:
      "Subida de documentos con zona de arrastre, cola, progreso y privacidad.",
    actionLabel: "Subir archivo",
    cancelLabel: "Cancelar",
    icon: UploadCloud,
    actionIcon: UploadCloud,
    intent: "blue",
  },
  {
    id: "preview",
    group: "Archivos",
    kind: "preview",
    title: "Preview de documento",
    description:
      "Previsualiza un documento o imagen antes de aprobar, descargar o publicar.",
    actionLabel: "Descargar",
    cancelLabel: "Cerrar",
    icon: Eye,
    actionIcon: Download,
    intent: "blue",
  },
  {
    id: "success",
    group: "Resultado",
    kind: "success",
    title: "Accion completada",
    description:
      "Resultado final para confirmar que el proceso termino correctamente.",
    actionLabel: "Continuar",
    cancelLabel: "Cerrar",
    icon: CheckCircle2,
    actionIcon: ArrowRight,
    intent: "green",
  },
  {
    id: "critical-action",
    group: "Resultado",
    kind: "critical-action",
    title: "Accion critica",
    description:
      "Confirmacion reforzada para acciones irreversibles sobre infraestructura o datos sensibles.",
    actionLabel: "Ejecutar accion",
    cancelLabel: "Cancelar",
    icon: ShieldAlert,
    actionIcon: ShieldAlert,
    intent: "red",
  },
  {
    id: "critical-error",
    group: "Resultado",
    kind: "critical",
    title: "Error critico",
    description:
      "Bloqueo de seguridad para procesos que no pueden continuar sin intervencion.",
    actionLabel: "Reintentar",
    cancelLabel: "Cancelar",
    icon: ShieldAlert,
    actionIcon: RotateCcw,
    intent: "red",
  },
];
