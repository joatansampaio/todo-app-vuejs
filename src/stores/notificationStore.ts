import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { INotification, NotificationType } from '@/interfaces/INotification'

export const useNotification = defineStore('notification', () => {
  const notifications = ref([] as INotification[]);

  function notify(type: NotificationType, message: string): void {
    const newNotification = {
      id: new Date().getTime(),
      type: type,
      message: message
    }
    notifications.value.push(newNotification);

    setTimeout(() => {
      notifications.value = notifications.value.filter(notification => notification.id != newNotification.id)
    }, 3000)
  }

  return { notify, notifications }
})