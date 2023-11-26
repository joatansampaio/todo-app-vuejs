<template>
  <div class="select-date-box">
    <v-dialog width="400">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" :text="todaysDate" class="bg-indigo"> </v-btn>
      </template>
      <template v-slot:default="{ isActive }">
        <v-card title="Select a Date">
          <v-card-text>
            <v-date-picker v-model="selectedDate"></v-date-picker>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
            <v-btn text="Select Date" @click="changeDate(isActive)"></v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      selectedDate: null,
      todaysDate: new Date().toLocaleDateString(),
    };
  },
  methods: {
    changeDate(isActive: any) {
      if (this.selectedDate != null) {
        this.todaysDate = this.formatDate(this.selectedDate);
      }
      isActive.value = false;
    },
    formatDate(date: Date) {
      return date.toLocaleDateString("en-US");
    },
  },
};
</script>

<style scoped>
.select-date-box {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1em;
}
</style>
