<template>
  <div class="box">
    <div>
      <p>{{ todo.text }}</p>
      <p>{{ `Date: ${new Date(todo.createdAt).toLocaleDateString()}` }}</p>
    </div>
    <div>
      <button
        :class="!todo.isCompleted || 'd-none'"
        :disabled="todo.isCompleted"
        class="button is-primary mx-2"
        @click="completeTodo"
      >
        Complete
      </button>
      <button class="button is-danger" @click="deleteTodo">Delete</button>
    </div>
  </div>
</template>

<script lang="ts">
import { useTodoList } from "@/stores/todoListStore.js";
import type { Todo } from "@/interfaces/ITodo";
import type { PropType } from "vue";
export default {
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    },
  },
  methods: {
    completeTodo() {
      this.todosStore.completeTodo(this.todo);
    },
    deleteTodo() {
      this.todosStore.deleteTodo(this.todo);
    },
  },
  setup() {
    const todosStore = useTodoList();

    return {
      todosStore,
    };
  },
};
</script>

<style scoped>
.box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--light-gray);
  color: var(--light-font);
}
</style>
