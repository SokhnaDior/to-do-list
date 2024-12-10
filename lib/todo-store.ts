'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Todo, TodoStatus } from './types';

interface TodoStore {
  todos: Todo[];
  filter: TodoStatus;
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  clearCompleted: () => void;
  setFilter: (filter: TodoStatus) => void;
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],
      filter: 'all',
      addTodo: (title) =>
        set((state) => ({
          todos: [
            {
              id: crypto.randomUUID(),
              title,
              completed: false,
              createdAt: new Date(),
            },
            ...state.todos,
          ],
        })),
      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        })),
      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      clearCompleted: () =>
        set((state) => ({
          todos: state.todos.filter((todo) => !todo.completed),
        })),
      setFilter: (filter) => set({ filter }),
    }),
    {
      name: 'todo-storage',
    }
  )
);