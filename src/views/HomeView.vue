<template>
  <main class="content">
    <div class="form-list">
      <AddTodoForm />
      <TodoList />
    </div>
  </main>
</template>

<script lang="ts">
import TodoList from "@/components/TodoList.vue";
import AddTodoForm from "@/components/AddTodoForm.vue";

export default {
  components: {
    TodoList,
    AddTodoForm,
  },
};
</script>

<style scoped>
.content {
  width: 70%;
  margin: 0 auto;
  color: var(--light-font);
}

.form-list {
  width: 100%;
  align-self: center;
  justify-content: center;
  justify-self: center;
}

</style>
