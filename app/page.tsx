'use client';

import { Card } from '@/components/ui/card';
import { TodoInput } from '@/components/todo-input';
import { TodoList } from '@/components/todo-list';
import { CheckSquare } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-950 dark:to-slate-900 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-8">
          <CheckSquare className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-primary">Todo List</h1>
        </div>
        <Card className="p-6">
          <TodoInput />
          <div className="h-px bg-border my-6" />
          <TodoList />
        </Card>
      </div>
    </div>
  );
}