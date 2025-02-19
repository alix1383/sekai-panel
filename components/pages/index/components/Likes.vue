<template>
  <div class="flex flex-col">
    <div class="text-4xl ml-5 mb-2">
      Likes <span class="text-base ml-1 font-light">Of all recourses</span>
    </div>
    <div class="flex h-auto">
      <div
        class="backdrop-blur flex items-baseline gap-4 border-white border-2 rounded-badge py-4 px-5"
      >
        <div class="font-semibold text-4xl">
          195 <span class="text-base font-light">Likes</span>
        </div>

        <div class="font-semibold text-2xl">
          35 <span class="text-base font-light">Recourses</span>
        </div>
        <div
          class="rounded-full bg-white p-2 shadow flex items-center justify-center"
        >
          <More class="w-7 h-7" />
        </div>
      </div>
      <div class="relative flex">
        <div
          class="absolute h-full rounded-badge border-2 border-[#ffab2c] -left-16 -z-10 w-28"
          style="
            background: repeating-linear-gradient(
              45deg,
              #ffab2c 0px,
              #ffab2c 2px,
              white 3px,
              white 4px
            );
          "
        ></div>
        <div
          class="h-full text-2xl items-center gap-1 absolute text-white left-4 inline-flex rounded-badge bg-[#ffab2c] px-2"
        >
          21.44 <span class="text-sm font-light">USD</span>
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import More from "~/components/icons/More.vue";
</script>
