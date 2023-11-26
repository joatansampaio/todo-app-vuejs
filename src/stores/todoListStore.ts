import type { Todo } from "@/interfaces/ITodo";
import { defineStore } from "pinia";
import { useNotification } from "./notificationStore";

const API_URL = 'https://api-mock-json-server-iw2inklqr-joatansampaio.vercel.app/todos/';
//http://localhost:3000/todos ---> Locally

export const useTodoList = defineStore('todoList', {
    state: () => {

        const notificationStore = useNotification();
        return {
            onGoingTodos: [] as Todo[],
            completedTodos: [] as Todo[],
            notificationStore,
        }
    },
    actions: {
        async loadTodos() {
            try {
                const response = await fetch(API_URL);
                const todos: Todo[] = await response.json();
                this.onGoingTodos = todos.filter(todo => !todo.isCompleted);
                this.completedTodos = todos.filter(todo => todo.isCompleted);
            } catch (e) {
                this.notificationStore.notify('is-danger', 'Error loading Todos, try again later!')
            }

        },
        async addTodo(inputValue: string) {
            await fetch("API_URL", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    text: inputValue,
                    isCompleted: false,
                    createdAt: new Date().getTime()
                }),
            }).then(async (response) => {
                if (response.ok) {
                    const todo = await response.json();
                    this.onGoingTodos.push(todo);
                } else {
                    this.notificationStore.notify('is-danger', 'Error adding a new todo, try again later!')
                }
            });

        },
        async completeTodo(todo: Todo) {
            await fetch(`${API_URL}${todo.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    text: todo.text,
                    isCompleted: true,
                    createdAt: new Date().getTime()
                }),
            }).then((response) => {
                if (response.ok) {
                    this.onGoingTodos = this.onGoingTodos.filter(t => t.id !== todo.id);
                    this.completedTodos.push({
                        id: todo.id,
                        text: todo.text,
                        isCompleted: true,
                        createdAt: new Date().getTime()
                    });
                } else {
                    this.notificationStore.notify('is-danger', 'Error fetching API, try again later!')
                }
            });
        },
        async deleteTodo(todo: Todo) {
            await fetch(`${API_URL}${todo.id}`, {
                method: "DELETE",
            }).then((response) => {
                if (response.ok) {
                    if (this.onGoingTodos.includes(todo)) {
                        this.onGoingTodos = this.onGoingTodos.filter(t => t.id !== todo.id);
                    } else if (this.completedTodos.includes(todo)) {
                        this.completedTodos = this.completedTodos.filter(t => t.id !== todo.id);
                    } else {
                        console.log('Error');
                        return;
                    }
                    this.notificationStore.notify('is-success', 'Successfully removed!')
                } else {

                    this.notificationStore.notify('is-danger', 'Error fetching API, try again later!')
                }
            })
        }
    }

})
