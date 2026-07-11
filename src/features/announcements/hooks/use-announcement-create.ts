import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { PATHS } from "@/app/router/constants/paths";
import { announcementAccentColors } from "@/features/announcements/mocks/announcements.mock";

export const useAnnouncementCreate = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [accentColor, setAccentColor] = useState(announcementAccentColors[0]);

  const previewTitle = useMemo(
    () => title.trim() || "Titulo del anuncio aqui",
    [title],
  );
  const previewDescription = useMemo(
    () =>
      description.trim() ||
      "Aqui aparecera la descripcion del anuncio. El texto se ajustara automaticamente en esta vista previa para mantener una lectura clara...",
    [description],
  );

  return {
    accentColor,
    accentColors: announcementAccentColors,
    description,
    onBack: () => navigate(PATHS.ANNOUNCEMENTS.HOME),
    previewDescription,
    previewTitle,
    setAccentColor,
    setDescription,
    setTitle,
    title,
  };
};
