<template>
  <SelectDate />
  <List :list="onGoingTodos" list-title="To Do"/>
  <hr class="divider" />
  <List :list="completedTodos" list-title="Completed"/>
</template>

<script lang="ts">
import type { Todo } from "@/interfaces/ITodo";
import List from "@/components/List.vue";
import SelectDate from "@/components/SelectDate.vue";
import { useNotification } from "@/stores/notificationStore.js";
import { useTodoList } from "@/stores/todoListStore.js";
import { computed } from "vue";

export default {
  components: { List, SelectDate },
  setup() {
    const notificationStore = useNotification();
    const todosStore = useTodoList();

    return {
      notificationStore,
      todosStore,
      onGoingTodos: computed(() => todosStore.onGoingTodos as Todo[]),
      completedTodos: computed(() => todosStore.completedTodos as Todo[]),
    };
  },
};
</script>

<style scoped>
.divider {
  margin: 2em 0 2em 0;
  border: 1px solid rgba(0, 0, 0, 0.01);
}
</style>
