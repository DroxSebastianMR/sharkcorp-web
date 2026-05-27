import { GalleryVerticalEnd } from 'lucide-react';

export const AuthBrand = () => {
  return (
    <div className="flex justify-center md:justify-start">
      <div className="flex items-center gap-2 font-semibold">
        <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <GalleryVerticalEnd className="size-4" />
        </div>

        <span>SHARKCORP</span>
      </div>
    </div>
  );
};