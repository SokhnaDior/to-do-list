'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { useTodoStore } from '@/lib/todo-store';

export function TodoInput() {
  const [title, setTitle] = useState('');
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title.trim());
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What needs to be done?"
        className="w-full h-12 text-lg"
      />
    </form>
  );
}