import type { LucideIcon } from 'lucide-react';

import { Input } from '@/components/ui/input';

interface AuthInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  Icon: LucideIcon;
  rightElement?: React.ReactNode;
}

export const AuthInput = ({
  id,
  label,
  type = 'text',
  placeholder,
  Icon,
  rightElement,
}: AuthInputProps) => {
  return (
    <div className="space-y-3">
      <label
        htmlFor={id}
        className="text-[13px] font-medium"
      >
        {label}
      </label>

      <div className="relative">
        <Icon
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
        />

        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          className="
            h-12
            rounded-xl
            border-0
            bg-muted
            pl-11
            pr-11
            text-sm
            shadow-none
            focus-visible:ring-2
            focus-visible:ring-primary/20
          "
        />

        {rightElement && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            {rightElement}
          </div>
        )}
      </div>
    </div>
  );
};