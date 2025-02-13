<template>
  <div
    class="items-center gap-5 relative mx-3 transition-all px-2 rounded-badge border-2 w-auto py-2 my-2 flex hover:shadow-xl"
    :class="[hover ? 'border-base-100' : 'border-base-200']"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <Arrow class="w-7 h-7 z-10 ml-1 absolute" />
    <div
      class="border-2 w-9 h-9 rounded-full transition-all border-black border-l-transparent border-b-transparent"
      :class="[hover ? 'rotate-[225deg]' : 'rotate-45']"
    ></div>
    <p class="font-thin">Sing out</p>
  </div>
</template>

<script lang="ts" setup>
import Arrow from "~/components/icons/Arrow.vue";
const hover = ref(false);
</script>
