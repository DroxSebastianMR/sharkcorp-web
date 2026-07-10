import { PATHS } from "@/app/router/constants/paths";
import type { AuthHeroConfig } from "@/features/auth/types/auth-hero.types";
import { IMAGES } from "@/shared/constants/images";

const DEFAULT_HERO: AuthHeroConfig = {
  image: IMAGES.auth.login,
  alt: "Colaboración en SharkCorp Intranet",
  title: "Tu espacio,\ntoda tu comunidad.",
  description:
    "Conéctate con tu equipo, accede a tus herramientas y mantente al día con SharkCorp.",
  copyright: "© 2026 SharkCorp Enterprise. Todos los derechos reservados.",
};

const HERO_BY_ROUTE: Record<string, Partial<AuthHeroConfig>> = {
  [PATHS.AUTH.FORGOT_PASSWORD]: {
    image: IMAGES.auth.forgotPassword,
    alt: "Recuperación de contraseña en SharkCorp Intranet",
  },

  [PATHS.AUTH.RECOVERY_SENT]: {
    image: IMAGES.auth.resetPassword,
    alt: "Nueva contraseña en SharkCorp Intranet",
  },

  [PATHS.AUTH.RESET_PASSWORD]: {
    image: IMAGES.auth.passwordCreated,
    alt: "Contraseña creada en SharkCorp Intranet",
  },
};

export const HERO_DECORATIONS = [
  "left-[20%] top-[24%] h-3 w-3 bg-white/75",
  "left-[17%] top-[31%] h-2 w-2 bg-white/60",
  "right-[19%] top-[59%] h-4 w-4 bg-white/70",
  "right-[25%] top-[66%] h-2 w-2 bg-white/55",
] as const;

export const getAuthHero = (pathname: string): AuthHeroConfig => ({
  ...DEFAULT_HERO,
  ...HERO_BY_ROUTE[pathname],
});
