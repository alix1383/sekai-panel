<template>
  <div
    class="hover:shadow-xl transition-shadow rounded-badge bg-base-200 flex flex-col"
  >
    <div class="flex px-8 items-center justify-center mt-2">
      <input
        type="text"
        placeholder="Search"
        class="input input-bordered w-full bg-base-200 border"
      />
    </div>
    <!--  -->
    <div class="my-0.5"></div>
    <!--  -->
    <div class="pl-6">
      <div
        v-for="(item, index) in listItems"
        v-on:mouseenter="isActive = index"
        v-on:mouseleave="isActive = -1"
        class="transition-all hover:bg-base-100 my-1 flex flex-col text-sm font-light hover:rounded-badge hover:px-3 p-1 hover:shadow-lg"
      >
        <!--  -->
        <div class="flex items-center gap-3">
          <div
            :class="{ 'bg-black text-white': isActive == index }"
            class="flex items-center justify-center rounded-full transition-colors p-2"
          >
            <component class="w-7 h-7" :is="item.icon"></component>
          </div>

          <div>{{ item.name }}</div>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isActive = ref(-1);

import Bookmark from "~/components/icons/Bookmark.vue";
import Gifts from "~/components/icons/Gifts.vue";
import Stats from "~/components/icons/Stats.vue";
import Support from "~/components/icons/Support.vue";
import Tasks from "~/components/icons/Tasks.vue";

const listItems = [
  { name: "Tasks", icon: Tasks },
  { name: "Gifts", icon: Gifts },
  { name: "BookMarks", icon: Bookmark },
  { name: "Stats", icon: Stats },
  { name: "Support", icon: Support },
];
</script>
