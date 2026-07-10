import logoImg from "@/assets/img/intranet/logo3.png";

export const AuthBrand = () => {
  return (
    <div className="flex items-center gap-3">
      <div
        className="
          flex h-10 w-10 items-center justify-center
          rounded-xl
          bg-white/65
          backdrop-blur-md
        "
      >
        <img
          src={logoImg}
          alt="SharkCorp"
          className="h-8 w-8 object-contain"
          draggable={false}
        />
      </div>

      <span className="font-button text-lg font-semibold tracking-tight text-white">
        SharkCorp Intranet
      </span>
    </div>
  );
};
