import { AuthBrand } from "@/features/auth/components/auth-brand";

export const AuthHero = () => {
  return (
    <aside
      className="
        relative
        hidden
        overflow-hidden
        lg:flex
        flex-col
        justify-between
        px-8
        py-10
        xl:px-12
        text-white
        bg-[linear-gradient(180deg,#1652FF_0%,#0D3CC8_45%,#071B73_100%)]
      "
    >
      <div className="absolute left-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-[350px] w-[350px] rounded-full bg-blue-300/5 blur-3xl" />
      <div className="relative z-10">
        <AuthBrand />
      </div>
      <div className="relative z-10 flex flex-1 items-center justify-center">
        <img
          src="/images/shark-mascot.png"
          alt="SharkCorp"
          className="
            w-[180px]
            xl:w-[240px]
            2xl:w-[300px]
            object-contain
            select-none
          "
          draggable={false}
        />
      </div>
      <div className="relative z-10 max-w-sm">
        <h1
          className="
            text-3xl
            font-extrabold
            leading-tight
            tracking-tight
            xl:text-4xl
          "
        >
          Tu espacio,
          <br />
          <span className="text-blue-200">toda tu comunidad.</span>
        </h1>

        <p
          className="
            mt-5
            max-w-md
            text-sm
            leading-relaxed
            text-blue-100/90
            md:text-base
          "
        >
          Conéctate con tu equipo, accede a tus herramientas
          <span className="hidden xl:inline"> </span>
          <br className="xl:hidden" />y mantente al día con SharkCorp.
        </p>
      </div>
    </aside>
  );
};
