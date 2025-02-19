<template>
  <div class="flex flex-col my-0.5">
    <div class="text-4xl ml-5 mb-2 font-light">
      Registration <span class="text-base ml-0.5">In social media</span>
    </div>
    <div class="flex h-auto">
      <div
        class="backdrop-blur flex items-baseline gap-4 bg-base-200 shadow rounded-badge py-4 px-5"
      >
        <div class="font-semibold text-4xl">
          592 <span class="text-base font-light">Registration</span>
        </div>

        <div
          class="rounded-full bg-white p-2 shadow flex items-center justify-center"
        >
          <More class="w-7 h-7" />
        </div>
      </div>
      <div
        class="h-full text-2xl items-center w-20 inline-flex rounded-badge bg-gray-300 px-4 blur-sm"
      ></div>
      <div
        class="h-full w-auto text-2xl items-center gap-1 text-white inline-flex rounded-badge bg-gray-300 px-4"
      >
        5.44 <span class="text-sm font-light">USD</span>
      </div>

      <!--  -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import More from "~/components/icons/More.vue";
</script>
