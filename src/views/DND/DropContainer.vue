<script lang="ts" setup>
import DropDustbin from "./DropDustbin.vue";
import DraggableBox from "./DraggableBox.vue";
</script>

<template>
  <div>
    <div :style="{ overflow: 'hidden', clear: 'both', margin: '-1rem' }">
      <DropDustbin greedy>
        <DropDustbin greedy>
          <DropDustbin greedy />
        </DropDustbin>
      </DropDustbin>
      <DropDustbin>
        <DropDustbin>
          <DropDustbin />
        </DropDustbin>
      </DropDustbin>
    </div>

    <div :style="{ overflow: 'hidden', clear: 'both', marginTop: '1.5rem' }">
      <DraggableBox />
    </div>
  </div>
</template>
