<template>
  <div class="notifications">
    <div
      v-for="notification in notifications"
      :key="notification.id"
      class="notification"
      :class="notification.type || 'is_primary'"
    >
      <button class="delete"></button>
      {{ notification.message }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useNotification } from "@/stores/notificationStore.js";
export default {
  name: "ComponentNotification",
  setup() {
    const notificationStore = useNotification();
    return {
      notifications: computed(() => notificationStore.notifications),
    };
  },
};
</script>

<style scoped>
.notifications {
  position: absolute;
  padding: 1em 2em;
  right: 0;
  top: 0;
  z-index: 100;
}
</style>
