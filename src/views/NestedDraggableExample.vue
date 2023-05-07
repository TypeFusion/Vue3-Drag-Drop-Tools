<template>
  <div class="row">
    <div class="drag-area">
      <h3>Nested draggable</h3>
      <nested-draggable :tasks="list" />
    </div>

    <div class="code-area">
      <raw-display class="col-3" :value="list" title="List" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import nestedDraggable from "./Draggable/NestedDraggable.vue";
import RawDisplay from "./Draggable/RawDisplay.vue";
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
<style scoped>
.row {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
}
.row > div {
  width: 50%;
}
</style>
