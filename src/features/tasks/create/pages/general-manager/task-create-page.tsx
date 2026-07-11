import { TaskCreateForm } from "@/features/tasks/components/create/task-create-form";
import { TaskCreateHeader } from "@/features/tasks/components/create/task-create-header";
import { TaskProcessNote } from "@/features/tasks/components/create/task-process-note";
import { TasksPageShell } from "@/features/tasks/components/layout/tasks-page-shell";
import { useTaskCreate } from "@/features/tasks/hooks/use-task-create";

export const TaskCreatePage = () => {
  const { departmentOptions, onBack, priorities } = useTaskCreate();

  return (
    <TasksPageShell>
      <TaskCreateHeader onBack={onBack} />
      <TaskProcessNote />
      <TaskCreateForm
        departmentOptions={departmentOptions}
        onCancel={onBack}
        priorities={priorities}
      />
    </TasksPageShell>
  );
};
