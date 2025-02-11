<template>
  <div
    class="items-center gap-5 mx-3 px-2 border-base-200 rounded-badge border-2 w-auto py-2 my-2 flex"
  >
    <div
      class="border-2 rounded-full border-black border-l-transparent border-b-transparent rotate-45"
    >
      <Arrow class="-rotate-45 w-7 h-7" />
    </div>
    <p class="text-gray-500">Sing out</p>
  </div>
</template>

<script lang="ts" setup>
import Arrow from "~/components/icons/Arrow.vue";
</script>
