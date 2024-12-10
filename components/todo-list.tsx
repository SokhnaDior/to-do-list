'use client';

import { TodoItem } from './todo-item';
import { TodoFilters } from './todo-filters';
import { useTodoStore } from '@/lib/todo-store';
import { ScrollArea } from '@/components/ui/scroll-area';

export function TodoList() {
  const { todos, filter } = useTodoStore();

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="flex-1 flex flex-col">
      <ScrollArea className="flex-1">
        <div className="space-y-1">
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </ScrollArea>
      <TodoFilters />
    </div>
  );
}