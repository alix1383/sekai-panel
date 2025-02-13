<template>
  <div
    class="rounded-badge border-2 hover:shadow-xl transition-shadow border-base-200"
  >
    <div
      class="bg-base-200 flex items-center flex-col rounded-badge px-1 py-3 border-2 border-base-200"
    >
      <Balance />
      <Progress />
    </div>

    <SingOut />
  </div>
</template>

<script lang="ts" setup>
import SingOut from "./SingOut.vue";
import Balance from "./Balance.vue";
import Progress from "./Progress.vue";
</script>
