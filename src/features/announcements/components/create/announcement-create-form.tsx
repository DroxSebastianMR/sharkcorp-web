import { AnnouncementFormActions } from "@/features/announcements/components/create/announcement-form-actions";
import { AnnouncementMainFields } from "@/features/announcements/components/create/announcement-main-fields";
import { AnnouncementSettingsCard } from "@/features/announcements/components/create/announcement-settings-card";
import type { AnnouncementAccentColor } from "@/features/announcements/types/announcements.types";

type AnnouncementCreateFormProps = {
  accentColor: AnnouncementAccentColor;
  accentColors: AnnouncementAccentColor[];
  description: string;
  onAccentColorChange: (color: AnnouncementAccentColor) => void;
  onCancel: () => void;
  onDescriptionChange: (value: string) => void;
  onTitleChange: (value: string) => void;
  title: string;
};

export const AnnouncementCreateForm = ({
  accentColor,
  accentColors,
  description,
  onAccentColorChange,
  onCancel,
  onDescriptionChange,
  onTitleChange,
  title,
}: AnnouncementCreateFormProps) => {
  return (
    <div className="space-y-5">
      <AnnouncementMainFields
        description={description}
        onDescriptionChange={onDescriptionChange}
        onTitleChange={onTitleChange}
        title={title}
      />
      <AnnouncementSettingsCard
        accentColor={accentColor}
        accentColors={accentColors}
        onAccentColorChange={onAccentColorChange}
      />
      <AnnouncementFormActions onCancel={onCancel} />
    </div>
  );
};
