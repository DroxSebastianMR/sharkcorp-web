import { TasksPageShell } from "@/features/tasks/components/layout/tasks-page-shell";
import { StrategicTasksTable } from "@/features/tasks/components/overview/strategic-tasks-table";
import { TasksHeader } from "@/features/tasks/components/overview/tasks-header";
import { TasksInsightsGrid } from "@/features/tasks/components/overview/tasks-insights-grid";
import { TasksStatsGrid } from "@/features/tasks/components/overview/tasks-stats-grid";
import { useTasksOverview } from "@/features/tasks/hooks/use-tasks-overview";

export const TasksGeneralManagerPage = () => {
  const { onCreateTask, stats, strategicTasks, workload } = useTasksOverview();

  return (
    <TasksPageShell>
      <TasksHeader onCreateTask={onCreateTask} />
      <TasksStatsGrid stats={stats} />
      <TasksInsightsGrid workload={workload} />
      <StrategicTasksTable tasks={strategicTasks} />
    </TasksPageShell>
  );
};
