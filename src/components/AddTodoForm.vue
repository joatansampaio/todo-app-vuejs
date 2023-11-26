<template>
  <div class="todo-form">
    <input
      type="text"
      class="add-todo-input has-text-light"
      v-model="inputValue"
      placeholder="Add a Todo :)"
    />
    <v-btn @click="addItem">Add</v-btn>
  </div>
</template>

<script lang="ts">
import { useNotification } from "@/stores/notificationStore.js";
import { useTodoList } from "@/stores/todoListStore.js";
import { onBeforeMount } from "vue";

export default {
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    async addItem() {
      if (this.inputValue != "") {
        this.todosStore.addTodo(this.inputValue);
        this.inputValue = "";
      } else {
        this.notificationStore.notify("is-danger", "The input is empty");
      }
    },
  },
  setup() {
    const notificationStore = useNotification();
    const todosStore = useTodoList();
    onBeforeMount(todosStore.loadTodos);

    return {
      notificationStore,
      todosStore,
    };
  },
};
</script>

<style scoped>
.add-todo-input {
  outline: none;
  border: 0.5px solid gainsboro;
  width: 80%;
  font-size: 20px;
  height: 100%;
  padding-left: 1em;
  border-radius: 0.4em;
}

.todo-form {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem;
  height: 3em;
}
.todo-form button {
  height: 100%;
  width: 10%;
  margin-left: 1em;
  border-radius: 0.4em;
  outline: none;
  border: 0.5px solid gainsboro;
}
</style>
