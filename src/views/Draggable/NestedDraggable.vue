<template>
  <draggable
    class="drag-area"
    tag="ul"
    :list="componentProps.tasks"
    :group="{ name: 'g1' }"
    item-key="name"
  >
    <template #item="{ element }">
      <li class="child-area">
        <input type="text" class="form-control" v-model="element.name" />
        <button @click="addChild(element.name)">add child</button>
        <div>
          <input
            v-for="(task, index) in element.tasks"
            :key="element.name + index"
            type="text"
            class="form-control"
            v-model="task.name"
          />
        </div>
        <nested-draggable :tasks="element.tasks" />
      </li>
    </template>
  </draggable>
</template>
<script setup lang="ts">
import draggable from "vuedraggable";
const componentProps = defineProps({
  tasks: {
    type: Array,
    required: true,
  },
});
const addChild = (name: string) => {
  if (!name) {
    alert("input name first!");
    return;
  }
  const target: any = componentProps.tasks.find(
    (item: any) => item.name === name
  );
  target.tasks.push({ id: "", name: "" });
};
</script>

<style scoped>
.drag-area {
  min-height: 50px;
  background-color: aliceblue;
  border: 1px solid;
  border-radius: 5px;
}
.child-area {
  background-color: antiquewhite;
  padding: 1em;
}
</style>
