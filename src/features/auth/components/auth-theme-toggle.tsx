import { MoonStar } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const AuthThemeToggle = () => {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="
        h-10
        w-10
        rounded-full
        bg-muted/50
        text-muted-foreground
        hover:bg-muted
      "
    >
      <MoonStar className="h-4 w-4" />
    </Button>
  );
};