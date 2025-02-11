<template>
  <div
    class="px-5 py-2 w-full flex flex-col rounded-badge border-2 border-base-100"
  >
    <div class="flex items-center justify-between">
      <div class="font-semibold">My Balance</div>
      <div
        class="flex items-center bg-base-100 rounded-full p-3 justify-center"
      >
        <Balance />
      </div>
    </div>
    <div class="text-3xl">
      200,000
      <span class="ml-0.5 text-xs text-gray-500">USD</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Balance from "~/components/icons/Balance.vue";
</script>
