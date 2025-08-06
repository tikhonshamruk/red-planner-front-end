'use client'

import { useTasks } from "./hooks/useTasks";
import { ListView } from "./list-view/ListView";

export function TasksView() {
  return (
    <ListView/>
  );
}