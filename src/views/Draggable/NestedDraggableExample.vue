<template>
  <div class="row">
    <div class="col-8">
      <h3>Nested draggable</h3>
      <nested-draggable :tasks="list" />
    </div>

    <raw-display class="col-3" :value="list" title="List" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import nestedDraggable from "./NestedDraggable.vue";
import RawDisplay from "./RawDisplay.vue";
const list = ref([
  {
    name: "task 1",
    tasks: [
      {
        name: "task 2",
        tasks: [],
      },
    ],
  },
  {
    name: "task 3",
    tasks: [
      {
        name: "task 4",
        tasks: [],
      },
    ],
  },
  {
    name: "task 5",
    tasks: [],
  },
]);
</script>
<style scoped></style>
