'use client';

import { Button } from '@/components/ui/button';
import { TodoStatus } from '@/lib/types';
import { useTodoStore } from '@/lib/todo-store';

export function TodoFilters() {
  const { filter, setFilter, todos, clearCompleted } = useTodoStore();
  const activeCount = todos.filter((todo) => !todo.completed).length;

  const filters: TodoStatus[] = ['all', 'active', 'completed'];

  return (
    <div className="flex items-center justify-between py-4 px-2">
      <span className="text-sm text-muted-foreground">
        {activeCount} items left
      </span>
      <div className="flex gap-2">
        {filters.map((f) => (
          <Button
            key={f}
            variant={filter === f ? 'secondary' : 'ghost'}
            size="sm"
            onClick={() => setFilter(f)}
            className="capitalize"
          >
            {f}
          </Button>
        ))}
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={clearCompleted}
        className="text-sm"
      >
        Clear completed
      </Button>
    </div>
  );
}