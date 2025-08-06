import { useTasks } from "../hooks/useTasks";

export function ListView() {
    const data = useTasks()
  return <div>ListView</div>;
}