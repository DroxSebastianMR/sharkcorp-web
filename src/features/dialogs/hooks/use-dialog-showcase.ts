import { useMemo, useState } from "react";

import {
  dialogIntentStyles,
  dialogVariants,
} from "../config/dialog-showcase.config";
import type { DialogVariant } from "../types/dialog.types";

export const useDialogShowcase = () => {
  const [activeDialogId, setActiveDialogId] = useState(dialogVariants[0].id);
  const [previewDialogId, setPreviewDialogId] = useState<string | null>(null);

  const activeDialog =
    dialogVariants.find((dialog) => dialog.id === activeDialogId) ??
    dialogVariants[0];
  const previewDialog = dialogVariants.find(
    (dialog) => dialog.id === previewDialogId,
  );
  const activeStyles = dialogIntentStyles[activeDialog.intent];
  const ActiveActionIcon = activeDialog.actionIcon;

  const groupedDialogs = useMemo(
    () =>
      dialogVariants.reduce<Record<string, DialogVariant[]>>((acc, dialog) => {
        acc[dialog.group] = [...(acc[dialog.group] ?? []), dialog];
        return acc;
      }, {}),
    [],
  );

  return {
    activeDialog,
    activeDialogId,
    activeStyles,
    ActiveActionIcon,
    groupedDialogs,
    previewDialog,
    setActiveDialogId,
    setPreviewDialogId,
  };
};
