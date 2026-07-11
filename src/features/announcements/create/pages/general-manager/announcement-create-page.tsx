import { AnnouncementCreateForm } from "@/features/announcements/components/create/announcement-create-form";
import { AnnouncementCreateHeader } from "@/features/announcements/components/create/announcement-create-header";
import { AnnouncementPreviewCard } from "@/features/announcements/components/create/announcement-preview-card";
import { AnnouncementsPageShell } from "@/features/announcements/components/layout/announcements-page-shell";
import { useAnnouncementCreate } from "@/features/announcements/hooks/use-announcement-create";

export const AnnouncementCreatePage = () => {
  const {
    accentColor,
    accentColors,
    description,
    onBack,
    previewDescription,
    previewTitle,
    setAccentColor,
    setDescription,
    setTitle,
    title,
  } = useAnnouncementCreate();

  return (
    <AnnouncementsPageShell>
      <AnnouncementCreateHeader onBack={onBack} />

      <section className="mt-6 grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <AnnouncementCreateForm
          accentColor={accentColor}
          accentColors={accentColors}
          description={description}
          onAccentColorChange={setAccentColor}
          onCancel={onBack}
          onDescriptionChange={setDescription}
          onTitleChange={setTitle}
          title={title}
        />
        <AnnouncementPreviewCard
          accentColor={accentColor}
          previewDescription={previewDescription}
          previewTitle={previewTitle}
        />
      </section>
    </AnnouncementsPageShell>
  );
};
