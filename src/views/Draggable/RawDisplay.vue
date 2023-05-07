<template>
  <div>
    <h3>{{ title }}</h3>
    <codemirror
      v-model="jsonString"
      :autofocus="true"
      :indent-with-tab="true"
      :tab-size="2"
      :disabled="true"
      :extensions="extensions"
      @ready="handleReady"
    />
  </div>
</template>
<script setup lang="ts">
import { computed, shallowRef } from "vue";
import { Codemirror } from "vue-codemirror";
import { json } from "@codemirror/lang-json";
import { oneDark } from "@codemirror/theme-one-dark";
const props = defineProps({
  title: {
    required: true,
    type: String,
  },
  value: {
    required: true,
  },
});
const jsonString = computed(() => {
  return JSON.stringify(props.value, null, 2);
});

//
const extensions = [json(), oneDark];

// Codemirror EditorView instance ref
const view = shallowRef();
const handleReady = (payload: any) => {
  view.value = payload.view;
};
</script>
<style scoped>
pre {
  text-align: start;
}
</style>
