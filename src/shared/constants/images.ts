import passwordCreated from "@/assets/img/intranet/contrasena_creada.png";
import login from "@/assets/img/intranet/login.png";
import logo from "@/assets/img/intranet/logo.png";
import logo2 from "@/assets/img/intranet/logo2.png";
import logo3 from "@/assets/img/intranet/logo3.png";
import logo4 from "@/assets/img/intranet/logo4.png";
import resetPassword from "@/assets/img/intranet/nueva_contrasena.png";
import forgotPassword from "@/assets/img/intranet/olvidar_contrasena.png";

export const IMAGES = {
  auth: {
    login,
    forgotPassword,
    resetPassword,
    passwordCreated,
  },

  branding: {
    primaryLogo: logo,
    secondaryLogo: logo2,
    tertiaryLogo: logo3,
    sidebarLogo: logo4,
  },
} as const;
