<template>
  <div class="title-box">
    <span class="title is-5 has-text-light">{{ listTitle }}</span>
  </div>
  <ul class="list-box">
    <ListItem v-for="todo in list" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script lang="ts">
import ListItem from "@/components/ListItem.vue";
import type { Todo } from "@/interfaces/ITodo";
export default {
  name: "AppList",
  props: {
    list: {
      type: Array as () => Todo[],
      default: () => [],
    },
    listTitle: String,
  },
  components: { ListItem },
};
</script>

<style scoped>
.list-box {
  list-style-type: none;
  padding: 0;
}
ul {
  margin: 0;
}
.title-box {
  padding-bottom: 1em;
}
</style>
