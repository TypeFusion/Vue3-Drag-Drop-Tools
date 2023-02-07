<script setup lang="ts">
import DND from "./DND/index";
import { DndProvider } from "vue3-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
</script>
<template>
  <DndProvider :backend="HTML5Backend">
    <DND></DND>
  </DndProvider>
</template>
