import { useMemo, useState, type ReactNode } from "react";

import { addDays, format } from "date-fns";
import { es } from "date-fns/locale";
import { parseDate } from "chrono-node/es";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarIcon,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock,
  Download,
  Eye,
  FileText,
  ImageUp,
  Info,
  ListFilter,
  Loader2,
  LogOut,
  Pencil,
  RotateCcw,
  Save,
  Search,
  Share2,
  ShieldAlert,
  ShieldCheck,
  Trash2,
  UploadCloud,
  User,
  X,
  type LucideIcon,
} from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import dialogImage from "@/assets/img/intranet/login.png";

type DialogIntent = "blue" | "green" | "red" | "amber" | "slate";
type DialogKind =
  | "confirm"
  | "detail"
  | "form"
  | "selector"
  | "upload"
  | "preview"
  | "success"
  | "critical";

type DialogVariant = {
  id: string;
  group: string;
  kind: DialogKind;
  title: string;
  description: string;
  actionLabel: string;
  cancelLabel?: string;
  icon: LucideIcon;
  actionIcon: LucideIcon;
  intent: DialogIntent;
};

const intentStyles: Record<
  DialogIntent,
  {
    soft: string;
    action: string;
    border: string;
    badge: string;
  }
> = {
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

const dialogs: DialogVariant[] = [
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

const Overlay = ({ children, onClose }: { children: ReactNode; onClose: () => void }) => (
  <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/45 px-4 py-6 backdrop-blur-[3px]">
    <button
      aria-label="Cerrar dialog"
      className="absolute inset-0 cursor-default"
      onClick={onClose}
      type="button"
    />
    {children}
  </div>
);

const CloseButton = ({ onClose }: { onClose: () => void }) => (
  <button
    aria-label="Cerrar dialog"
    className="grid h-8 w-8 cursor-pointer place-items-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
    onClick={onClose}
    type="button"
  >
    <X className="h-5 w-5" />
  </button>
);

const StatPill = ({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-3 rounded-xl bg-slate-100 px-4 py-3">
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-[#0757ff]">
      <Icon className="h-4 w-4" />
    </span>
    <span className="min-w-0">
      <span className="block text-xs font-extrabold text-slate-400">{label}</span>
      <span className="block truncate font-heading text-sm font-extrabold text-slate-900">
        {value}
      </span>
    </span>
  </div>
);

const DetailDialogPreview = ({ onClose }: { onClose: () => void }) => (
  <Overlay onClose={onClose}>
    <article className="relative max-h-[calc(100vh-3rem)] w-full max-w-[920px] overflow-y-auto rounded-lg bg-white text-left shadow-[0_24px_70px_rgba(15,23,42,0.32)] ring-1 ring-white/70">
      <header className="flex items-center justify-between gap-4 border-b border-slate-200 px-7 py-5">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-heading text-xl font-extrabold text-slate-950">
            Proyecto: Expansion Regional
          </h3>
          <span className="rounded-full bg-blue-100 px-4 py-1 text-xs font-extrabold text-[#0757ff]">
            En curso
          </span>
        </div>
        <CloseButton onClose={onClose} />
      </header>

      <div className="grid gap-6 px-7 py-6 lg:grid-cols-[minmax(0,1fr)_270px]">
        <main>
          <div className="grid gap-4 sm:grid-cols-3">
            <StatPill icon={CalendarDays} label="Fecha de creacion" value="24 Oct, 2023" />
            <StatPill icon={User} label="Responsable" value="Carlos Shark" />
            <StatPill icon={Info} label="Prioridad" value="Alta" />
          </div>

          <section className="mt-7">
            <h4 className="font-heading text-xl font-extrabold text-slate-950">
              Descripcion general
            </h4>
            <p className="mt-3 text-sm font-medium leading-7 text-slate-500">
              Este proyecto estrategico busca fortalecer la presencia de
              SharkCorp en el mercado sudamericano, estableciendo centros
              logisticos clave y redes de distribucion optimizadas. La expansion
              se centra en la eficiencia operativa y la integracion de talentos
              locales para garantizar una escalabilidad sostenible a largo plazo.
            </p>
          </section>

          <section className="mt-7">
            <h4 className="font-heading text-xl font-extrabold text-slate-950">
              Objetivos clave
            </h4>
            <div className="mt-3 space-y-3">
              {[
                "Aumentar la penetracion de mercado en un 25% durante el primer semestre.",
                "Reducir costos de importacion mediante acuerdos bilaterales locales.",
                "Establecer el Centro de Excelencia Tecnologica en Buenos Aires.",
              ].map((item) => (
                <div className="flex items-start gap-3" key={item}>
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0757ff]" />
                  <p className="text-sm font-medium text-slate-500">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-7 overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-slate-100 p-5">
            <div className="grid h-32 place-items-end rounded-lg bg-[linear-gradient(135deg,rgba(7,87,255,0.18),rgba(15,23,42,0.06))] p-4">
              <div className="w-full space-y-2">
                <div className="h-3 w-2/3 rounded-full bg-white/80" />
                <div className="h-3 w-1/2 rounded-full bg-white/60" />
              </div>
            </div>
          </div>
        </main>

        <aside className="space-y-5">
          <section className="rounded-xl bg-white p-5 shadow-[0_14px_34px_rgba(14,43,92,0.12)] ring-1 ring-slate-200">
            <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">
              Informacion financiera
            </p>
            <p className="mt-6 text-sm font-bold text-slate-400">
              Presupuesto asignado
            </p>
            <p className="mt-2 font-heading text-2xl font-extrabold text-slate-950">
              $1,250,000 USD
            </p>
            <div className="mt-3 h-2 rounded-full bg-slate-200">
              <div className="h-2 w-[65%] rounded-full bg-[#0757ff]" />
            </div>
            <p className="mt-1 text-right text-xs font-bold text-slate-400">
              65% consumido
            </p>
            <div className="mt-6 border-t border-slate-200 pt-5">
              <p className="text-xs font-extrabold text-slate-400">
                Cliente asociado
              </p>
              <div className="mt-3 flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-slate-200 text-xs font-extrabold text-slate-500">
                  GC
                </span>
                <p className="font-heading text-sm font-extrabold text-slate-800">
                  Global Connect Ltd.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-xl bg-blue-50 p-5 ring-1 ring-blue-100">
            <div className="flex items-center gap-2 font-heading text-sm font-extrabold text-[#0757ff]">
              <Info className="h-4 w-4" />
              Notas tecnicas
            </div>
            <p className="mt-4 text-sm font-medium leading-6 text-slate-600">
              El despliegue requiere infraestructura cloud compatible con
              normativas regionales. Revision de latencia semanal obligatoria.
            </p>
          </section>
        </aside>
      </div>

      <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 px-7 py-5">
        <div className="flex flex-wrap items-center gap-7">
          <button className="flex cursor-pointer items-center gap-2 font-button text-sm font-extrabold text-[#0757ff]" type="button">
            <Share2 className="h-4 w-4" />
            Compartir
          </button>
          <button className="flex cursor-pointer items-center gap-2 font-button text-sm font-extrabold text-slate-500 transition hover:text-[#0757ff]" type="button">
            <Download className="h-4 w-4" />
            Descargar PDF
          </button>
        </div>
        <button
          className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-[#0757ff] px-8 font-button text-sm font-extrabold text-white shadow-[0_14px_28px_rgba(7,87,255,0.24)] transition hover:bg-[#064be0]"
          onClick={onClose}
          type="button"
        >
          <Pencil className="h-4 w-4" />
          Editar registro
        </button>
      </footer>
    </article>
  </Overlay>
);

const FieldIcon = ({
  icon: Icon,
  children,
}: {
  icon: LucideIcon;
  children: ReactNode;
}) => (
  <div className="mt-2 flex min-h-14 items-center gap-3 rounded-xl bg-slate-100 px-4 text-sm font-semibold text-slate-600 ring-1 ring-transparent transition focus-within:bg-white focus-within:ring-[#0757ff]">
    <Icon className="h-5 w-5 shrink-0 text-slate-400" />
    {children}
  </div>
);

const formatDialogDate = (date: Date | undefined) =>
  date ? format(date, "d 'de' MMMM 'de' yyyy", { locale: es }) : "";

const DateTimePickerPreview = () => {
  const [open, setOpen] = useState(false);
  const initialDate = addDays(new Date(), 2);
  const [value, setValue] = useState(formatDialogDate(initialDate));
  const [date, setDate] = useState<Date | undefined>(
    initialDate,
  );

  return (
    <div className="space-y-5">
      <label className="block">
        <span className="text-sm font-extrabold text-slate-600">
          Fecha programada
        </span>
        <div className="mt-2 flex h-13 items-center overflow-hidden rounded-xl bg-slate-100 px-4 ring-1 ring-transparent transition focus-within:bg-white focus-within:ring-[#0757ff]">
          <input
            className="min-w-0 flex-1 bg-transparent font-button text-sm font-bold text-slate-700 outline-none placeholder:text-slate-400"
            onChange={(event) => {
              const nextValue = event.target.value;
              const parsedDate = parseDate(nextValue);

              setValue(nextValue);
              if (parsedDate) {
                setDate(parsedDate);
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "ArrowDown") {
                event.preventDefault();
                setOpen(true);
              }
            }}
            placeholder="Manana o la proxima semana"
            value={value}
          />
          <Popover onOpenChange={setOpen} open={open}>
            <PopoverTrigger asChild>
              <button
                aria-label="Seleccionar fecha"
                className="grid h-9 w-9 cursor-pointer place-items-center rounded-xl text-slate-400 transition hover:bg-blue-50 hover:text-[#0757ff]"
                type="button"
              >
                <CalendarIcon className="h-4.5 w-4.5" />
              </button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              className="z-[80] w-auto overflow-hidden rounded-2xl border-0 bg-white p-0"
              sideOffset={10}
            >
              <Calendar
                captionLayout="dropdown"
                defaultMonth={date}
                locale={es}
                mode="single"
                onSelect={(selectedDate) => {
                  setDate(selectedDate);
                  setValue(formatDialogDate(selectedDate));
                  setOpen(false);
                }}
                selected={date}
              />
            </PopoverContent>
          </Popover>
        </div>
      </label>

      <p className="rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-slate-600">
        El registro se programara para{" "}
        <span className="font-extrabold text-[#0757ff]">
          {formatDialogDate(date) || "una fecha pendiente"}
        </span>
        .
      </p>

      <label className="block">
        <span className="text-sm font-extrabold text-slate-600">Hora</span>
        <Input
          className="mt-2 h-13 w-full rounded-xl border-0 bg-slate-100 px-4 font-button text-sm font-bold text-slate-700 shadow-none outline-none ring-1 ring-transparent transition focus-visible:bg-white focus-visible:ring-[#0757ff] [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
          defaultValue="10:30:00"
          step="1"
          type="time"
        />
      </label>
    </div>
  );
};

const FormDialogPreview = ({ onClose }: { onClose: () => void }) => {
  return (
    <Overlay onClose={onClose}>
      <article className="relative max-h-[calc(100vh-2rem)] w-full max-w-[820px] overflow-y-auto rounded-lg bg-white text-left shadow-[0_24px_70px_rgba(15,23,42,0.32)] ring-1 ring-white/70">
        <header className="flex items-center justify-between gap-4 border-b border-slate-200 px-7 py-5">
          <h3 className="font-heading text-2xl font-extrabold text-slate-950">
            Editar informacion
          </h3>
          <CloseButton onClose={onClose} />
        </header>

        <div className="grid gap-6 px-7 py-6 lg:grid-cols-[minmax(0,1fr)_310px]">
          <div className="space-y-5">
            <label className="block">
              <span className="text-sm font-extrabold text-slate-600">
                Nombre del proyecto
              </span>
              <FieldIcon icon={BriefcaseBusiness}>
                <input
                  className="min-w-0 flex-1 bg-transparent outline-none"
                  defaultValue="Expansion Global 2024"
                  type="text"
                />
              </FieldIcon>
            </label>

            <label className="block">
              <span className="text-sm font-extrabold text-slate-600">
                Categoria
              </span>
              <div className="mt-2 flex min-h-14 items-center gap-3 rounded-xl bg-slate-100 px-4 text-sm font-semibold text-slate-600 ring-1 ring-transparent transition focus-within:bg-white focus-within:ring-[#0757ff]">
                <ListFilter className="h-5 w-5 shrink-0 text-slate-400" />
                <Select defaultValue="operaciones">
                  <SelectTrigger className="h-auto min-w-0 flex-1 border-0 bg-transparent p-0 font-button text-sm font-bold text-slate-600 shadow-none outline-none focus-visible:ring-0 [&>svg]:text-slate-400">
                    <SelectValue placeholder="Selecciona categoria" />
                  </SelectTrigger>
                  <SelectContent
                    align="start"
                    className="z-[70] rounded-2xl border-0 bg-white p-2 font-sans shadow-[0_18px_34px_rgba(14,43,92,0.16)] ring-1 ring-slate-200"
                    position="popper"
                  >
                    <SelectGroup>
                      <SelectItem
                        className="cursor-pointer rounded-xl px-3 py-2 font-semibold text-slate-600 focus:bg-blue-50 focus:text-[#0757ff]"
                        value="operaciones"
                      >
                        Operaciones
                      </SelectItem>
                      <SelectItem
                        className="cursor-pointer rounded-xl px-3 py-2 font-semibold text-slate-600 focus:bg-blue-50 focus:text-[#0757ff]"
                        value="tecnologia"
                      >
                        Tecnologia
                      </SelectItem>
                      <SelectItem
                        className="cursor-pointer rounded-xl px-3 py-2 font-semibold text-slate-600 focus:bg-blue-50 focus:text-[#0757ff]"
                        value="finanzas"
                      >
                        Finanzas
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-extrabold text-slate-600">
                Descripcion breve
              </span>
              <textarea
                className="mt-2 min-h-40 w-full resize-none rounded-xl bg-slate-100 px-4 py-4 text-sm font-semibold leading-6 text-slate-600 outline-none ring-1 ring-transparent transition focus:bg-white focus:ring-[#0757ff]"
                defaultValue="Optimizacion de procesos internos para la delegacion regional en Latinoamerica."
              />
            </label>
          </div>

          <section>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-heading text-sm font-extrabold text-slate-900">
                  Fecha y hora
                </p>
                <p className="mt-1 text-xs font-semibold text-slate-500">
                  Input con lenguaje natural, calendario y hora.
                </p>
              </div>
              <CalendarDays className="h-5 w-5 text-[#0757ff]" />
            </div>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_12px_24px_rgba(14,43,92,0.08)]">
              <DateTimePickerPreview />
            </div>
          </section>
        </div>

        <footer className="grid grid-cols-2 gap-4 bg-slate-50 px-7 py-5">
          <button
            className="h-12 cursor-pointer rounded-2xl font-button text-base font-extrabold text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
            onClick={onClose}
            type="button"
          >
            Cancelar
          </button>
          <button
            className="h-12 cursor-pointer rounded-2xl bg-[#0757ff] font-button text-base font-extrabold text-white shadow-[0_14px_28px_rgba(7,87,255,0.24)] transition hover:bg-[#064be0]"
            onClick={onClose}
            type="button"
          >
            Guardar cambios
          </button>
        </footer>
      </article>
    </Overlay>
  );
};

const UploadDialogPreview = ({ onClose }: { onClose: () => void }) => (
  <Overlay onClose={onClose}>
    <article className="relative max-h-[calc(100vh-2rem)] w-full max-w-[520px] overflow-hidden rounded-lg bg-white text-left shadow-[0_24px_70px_rgba(15,23,42,0.32)] ring-1 ring-white/70">
      <header className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-50 text-[#0757ff]">
            <UploadCloud className="h-4.5 w-4.5" />
          </span>
          <h3 className="font-heading text-lg font-extrabold text-[#083da8]">
            Cargar documentos
          </h3>
        </div>
        <CloseButton onClose={onClose} />
      </header>

      <div className="px-5 py-4">
        <div className="grid min-h-36 place-items-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-4 text-center">
          <div>
            <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-white text-[#0757ff] shadow-sm">
              <ImageUp className="h-5 w-5" />
            </span>
            <p className="mt-3 font-heading text-sm font-extrabold text-slate-800">
              Arrastra archivos aqui o haz clic para subir
            </p>
            <p className="mt-1 text-xs font-semibold text-slate-500">
              Formatos permitidos: PDF, DOCX, JPG, PNG (max. 10MB)
            </p>
          </div>
        </div>

        <section className="mt-4">
          <p className="text-xs font-extrabold uppercase tracking-wide text-slate-400">
            Archivos en cola
          </p>
          <div className="mt-2 space-y-2">
            {[
              {
                name: "Contrato_Servicios_2024.pdf",
                label: "65%",
                progress: 65,
                icon: FileText,
                done: false,
              },
              {
                name: "Logo_Enterprise_V2.png",
                label: "Completado",
                progress: 100,
                icon: ImageUp,
                done: true,
              },
            ].map((file) => {
              const Icon = file.icon;

              return (
                <div className="rounded-lg bg-slate-100 px-3 py-2.5" key={file.name}>
                  <div className="flex items-center gap-3">
                    <Icon className="h-4.5 w-4.5 text-[#0757ff]" />
                    <p className="min-w-0 flex-1 truncate text-sm font-semibold text-slate-600">
                      {file.name}
                    </p>
                    <span className="text-sm font-extrabold text-[#0757ff]">
                      {file.label}
                    </span>
                    <button
                      aria-label="Quitar archivo"
                      className="grid h-7 w-7 cursor-pointer place-items-center rounded-lg text-slate-400 transition hover:bg-white hover:text-red-600"
                      type="button"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-2 h-1 rounded-full bg-slate-200">
                    <div
                      className={[
                        "h-1 rounded-full",
                        file.done ? "bg-[#334c99]" : "bg-[#0757ff]",
                      ].join(" ")}
                      style={{ width: `${file.progress}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label>
            <span className="text-sm font-extrabold text-slate-600">
              Categoria del documento
            </span>
            <div className="mt-2 flex h-11 items-center justify-between rounded-xl bg-slate-100 px-4 text-sm font-semibold text-slate-600">
              Contratos
              <ChevronDown className="h-4 w-4 text-slate-400" />
            </div>
          </label>
          <label>
            <span className="text-sm font-extrabold text-slate-600">Privacidad</span>
            <div className="mt-2 grid h-11 grid-cols-2 rounded-xl bg-slate-100 p-1 text-sm font-bold text-slate-500">
              <button className="rounded-lg bg-white text-[#0757ff] shadow-sm" type="button">
                Publico
              </button>
              <button className="rounded-lg" type="button">
                Solo gerencia
              </button>
            </div>
          </label>
        </div>
      </div>

      <footer className="grid grid-cols-2 gap-4 bg-slate-50 px-5 py-4">
        <button
          className="h-11 cursor-pointer rounded-2xl font-button text-base font-extrabold text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
          onClick={onClose}
          type="button"
        >
          Cancelar
        </button>
        <button
          className="h-11 cursor-pointer rounded-2xl bg-[#0757ff] font-button text-base font-extrabold text-white shadow-[0_14px_28px_rgba(7,87,255,0.24)] transition hover:bg-[#064be0]"
          onClick={onClose}
          type="button"
        >
          Subir archivo
        </button>
      </footer>
    </article>
  </Overlay>
);

const SelectorContent = () => (
  <div className="mt-6 text-left">
    <div className="flex h-12 items-center gap-3 rounded-xl bg-slate-100 px-4 ring-1 ring-transparent focus-within:bg-white focus-within:ring-[#0757ff]">
      <Search className="h-4 w-4 text-slate-400" />
      <input
        className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-slate-700 outline-none"
        placeholder="Buscar por nombre, area o rol..."
        type="text"
      />
    </div>
    <div className="sidebar-scroll-hidden mt-4 max-h-72 space-y-3 overflow-y-auto px-2 py-2">
      {[
        ["Ana Lucia Torres", "Recursos Humanos", "AT"],
        ["Carlos Mendoza", "Tecnologia", "CM"],
        ["Sofia Villalta", "Marketing", "SV"],
        ["Diego Martinez", "Finanzas", "DM"],
      ].map(([name, area, initials], index) => (
        <button
          className="flex w-full cursor-pointer items-center gap-3 rounded-2xl bg-slate-50 p-3 text-left ring-1 ring-slate-200 transition hover:bg-blue-50 hover:ring-[#0757ff]/25 hover:shadow-[0_12px_24px_rgba(14,43,92,0.08)]"
          key={name}
          type="button"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#0757ff] font-heading text-sm font-extrabold text-white">
            {initials}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate font-heading text-sm font-extrabold text-slate-900">
              {name}
            </span>
            <span className="block truncate text-xs font-semibold text-slate-500">
              {area}
            </span>
          </span>
          <span
            className={[
              "h-5 w-5 rounded-full border-2",
              index === 1 ? "border-[#0757ff] bg-[#0757ff]" : "border-slate-300",
            ].join(" ")}
          />
        </button>
      ))}
    </div>
  </div>
);

const PreviewContent = () => (
  <div className="mt-6 overflow-hidden rounded-2xl bg-slate-50 text-left ring-1 ring-slate-200">
    <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
      <div className="flex items-center gap-3">
        <FileText className="h-5 w-5 text-[#0757ff]" />
        <div>
          <p className="text-sm font-extrabold text-slate-900">
            Propuesta tecnica v3
          </p>
          <p className="text-xs font-semibold text-slate-500">PDF - 12 paginas</p>
        </div>
      </div>
      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold text-[#0757ff]">
        Preview
      </span>
    </div>
    <div className="grid min-h-56 place-items-center bg-white p-5">
      <div className="w-full max-w-64 rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
        <div className="h-4 w-2/3 rounded bg-slate-300" />
        <div className="mt-4 space-y-2">
          <div className="h-2 rounded bg-slate-200" />
          <div className="h-2 rounded bg-slate-200" />
          <div className="h-2 w-4/5 rounded bg-slate-200" />
        </div>
        <div className="mt-5 h-24 rounded bg-blue-100" />
      </div>
    </div>
  </div>
);

const SuccessContent = () => (
  <div className="mt-6 rounded-2xl bg-emerald-50 p-5 text-left ring-1 ring-emerald-100">
    <div className="flex items-start gap-3">
      <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
      <div>
        <p className="font-heading text-sm font-extrabold text-emerald-900">
          Registro completado correctamente
        </p>
        <p className="mt-1 text-sm font-medium leading-relaxed text-emerald-700">
          Se notifico al equipo responsable y el cambio quedo registrado en el
          historial de auditoria.
        </p>
      </div>
    </div>
  </div>
);

const CriticalContent = () => (
  <div className="mt-6 space-y-4 text-left">
    <div className="rounded-2xl bg-red-50 p-5 ring-1 ring-red-100">
      <div className="flex items-start gap-3">
        <ShieldAlert className="mt-0.5 h-5 w-5 text-red-600" />
        <div>
          <p className="font-heading text-sm font-extrabold text-red-900">
            Operacion bloqueada por seguridad
          </p>
          <p className="mt-1 text-sm font-medium leading-relaxed text-red-700">
            El sistema detecto una condicion critica. Revisa permisos, sesion y
            estado de conexion antes de continuar.
          </p>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
      <Loader2 className="h-5 w-5 text-slate-500" />
      <p className="text-sm font-semibold text-slate-600">
        Codigo de bloqueo: SC-SEC-409
      </p>
    </div>
  </div>
);

const DialogContent = ({ dialog }: { dialog: DialogVariant }) => {
  if (dialog.kind === "selector") return <SelectorContent />;
  if (dialog.kind === "preview") return <PreviewContent />;
  if (dialog.kind === "success") return <SuccessContent />;
  if (dialog.kind === "critical") return <CriticalContent />;

  return null;
};

const StandardDialogPreview = ({
  dialog,
  onClose,
}: {
  dialog: DialogVariant;
  onClose: () => void;
}) => {
  const ActionIcon = dialog.actionIcon;
  const styles = intentStyles[dialog.intent];
  const isLarge = dialog.kind === "selector" || dialog.kind === "preview";

  return (
    <Overlay onClose={onClose}>
      <article
        className={[
          [
            "relative max-h-[calc(100vh-3rem)] w-full rounded-[28px] bg-white p-7 text-center shadow-[0_24px_70px_rgba(15,23,42,0.28)] ring-1 ring-white/70",
            dialog.kind === "selector" ? "overflow-visible" : "overflow-y-auto",
          ].join(" "),
          isLarge ? "max-w-[620px]" : "max-w-[430px]",
        ].join(" ")}
      >
        <div className="absolute right-7 top-7">
          <CloseButton onClose={onClose} />
        </div>

        <div className="mx-auto grid h-28 w-28 place-items-center overflow-visible">
          <img
            src={dialogImage}
            alt=""
            className="h-28 w-28 object-contain drop-shadow-[0_14px_18px_rgba(15,23,42,0.12)]"
          />
        </div>

        <h3 className="mt-6 font-heading text-2xl font-extrabold text-slate-950">
          {dialog.title}
        </h3>
        <p className="mx-auto mt-3 max-w-[390px] text-sm font-semibold leading-relaxed text-slate-500">
          {dialog.description}
        </p>

        <DialogContent dialog={dialog} />

        <div className="mt-7 grid grid-cols-2 gap-4">
          <button
            className="h-12 cursor-pointer rounded-2xl bg-slate-100 px-4 font-button text-base font-extrabold text-slate-500 transition hover:bg-slate-200 hover:text-slate-700"
            onClick={onClose}
            type="button"
          >
            {dialog.cancelLabel ?? "Cancelar"}
          </button>
          <button
            className={`flex h-12 cursor-pointer items-center justify-center gap-2 rounded-2xl px-4 font-button text-base font-extrabold transition ${styles.action}`}
            onClick={onClose}
            type="button"
          >
            <ActionIcon className="h-4 w-4" />
            {dialog.actionLabel}
          </button>
        </div>
      </article>
    </Overlay>
  );
};

const DialogPreview = ({
  dialog,
  onClose,
}: {
  dialog: DialogVariant;
  onClose: () => void;
}) => {
  if (dialog.kind === "detail") return <DetailDialogPreview onClose={onClose} />;
  if (dialog.kind === "form") return <FormDialogPreview onClose={onClose} />;
  if (dialog.kind === "upload") return <UploadDialogPreview onClose={onClose} />;

  return <StandardDialogPreview dialog={dialog} onClose={onClose} />;
};

export const DialogsShowcasePage = () => {
  const [activeDialogId, setActiveDialogId] = useState(dialogs[0].id);
  const [previewDialogId, setPreviewDialogId] = useState<string | null>(null);
  const activeDialog =
    dialogs.find((dialog) => dialog.id === activeDialogId) ?? dialogs[0];
  const previewDialog = dialogs.find((dialog) => dialog.id === previewDialogId);
  const activeStyles = intentStyles[activeDialog.intent];
  const ActiveActionIcon = activeDialog.actionIcon;

  const groupedDialogs = useMemo(
    () =>
      dialogs.reduce<Record<string, DialogVariant[]>>((acc, dialog) => {
        acc[dialog.group] = [...(acc[dialog.group] ?? []), dialog];
        return acc;
      }, {}),
    [],
  );

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
                  const styles = intentStyles[dialog.intent];

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
