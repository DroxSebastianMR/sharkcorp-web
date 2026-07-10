import { AuthBrand } from "@/features/auth/components/auth-brand";
import { HERO_DECORATIONS } from "@/features/auth/constants/auth-hero";
import type { AuthHeroConfig } from "@/features/auth/types/auth-hero.types";

interface AuthHeroProps {
  hero: AuthHeroConfig;
}

export const AuthHero = ({ hero }: AuthHeroProps) => {
  return (
    <aside className="relative hidden overflow-hidden bg-[#04195a] px-8 py-8 text-white lg:flex lg:flex-col xl:px-12">
      <div className="absolute inset-0 bg-[linear-gradient(155deg,#1558f7_0%,#092985_34%,#04195a_72%,#031348_100%)]" />
      <div className="absolute -left-28 -top-20 h-80 w-80 rounded-full bg-[#2f73ff]/35" />
      <div className="absolute bottom-0 right-0 h-72 w-72 bg-[radial-gradient(circle_at_center,rgba(75,135,255,0.18),transparent_68%)]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" />
      <div className="relative z-10">
        <AuthBrand />
      </div>
      <div className="relative z-10 flex flex-1 items-center justify-center py-6 xl:py-8">
        <div className="absolute h-80 w-80 rounded-full bg-white/10 blur-3xl xl:h-96 xl:w-96" />

        {HERO_DECORATIONS.map((classes) => (
          <span key={classes} className={`absolute rounded-full ${classes}`} />
        ))}
        <img
          src={hero.image}
          alt={hero.alt}
          draggable={false}
          className="relative z-10 w-[250px] animate-soft-bounce select-none object-contain drop-shadow-[0_26px_60px_rgba(0,17,88,0.28)] xl:w-[330px] 2xl:w-[390px]"
        />
      </div>
      <div className="relative z-10 max-w-md pb-1">
        <h1 className="whitespace-pre-line text-[34px] font-extrabold leading-[1.05] tracking-tight xl:text-[44px]">
          {hero.title}
        </h1>
        <p className="mt-5 max-w-sm text-sm leading-relaxed text-blue-50/85 md:text-base">
          {hero.description}
        </p>
        <p className="mt-8 text-xs text-blue-50/65">{hero.copyright}</p>
      </div>
    </aside>
  );
};
