'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { Todo } from '@/lib/types';
import { useTodoStore } from '@/lib/todo-store';
import { cn } from '@/lib/utils';

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const { toggleTodo, deleteTodo } = useTodoStore();

  return (
    <div className="flex items-center gap-3 p-4 group hover:bg-muted/50 rounded-lg">
      <Checkbox
        checked={todo.completed}
        onCheckedChange={() => toggleTodo(todo.id)}
        className="h-5 w-5"
      />
      <span
        className={cn('flex-1 text-lg', {
          'line-through text-muted-foreground': todo.completed,
        })}
      >
        {todo.title}
      </span>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => deleteTodo(todo.id)}
        className="opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
}