<template>
  <div class="rounded-badge bg-base-200 h-80 flex flex-col">
    <div class="flex px-8 items-center justify-center mt-3">
      <input
        type="text"
        placeholder="Search"
        class="input input-bordered w-full bg-base-200 border"
      />
    </div>
    <!--  -->
    <div class="mt-0.5"></div>
    <!--  -->
    <div class="pl-6">
      <div
        v-for="x in 4"
        v-on:mouseenter="isActive = x"
        v-on:mouseleave="isActive = -1"
        class="transition-all hover:bg-base-100 flex flex-col text-sm text-gray-500 hover:rounded-badge p-1 hover:shadow-lg"
      >
        <!--  -->
        <div class="flex items-center gap-3">
          <div
            :class="{ 'bg-black text-white': isActive == x }"
            class="flex items-center justify-center rounded-full transition-colors p-2"
          >
            <Tasks class="w-7 h-7" />
          </div>
          <div>Tasks</div>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isActive = ref(-1);
import Tasks from "~/components/icons/Tasks.vue";
</script>
