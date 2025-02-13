<template>
  <div class="flex">
    <div class="basis-1/2 flex flex-col justify-between">
      <div class="flex flex-col gap-4">
        <div class="text-4xl">Task Stats</div>
        <div class="flex">
          <div
            class="transition-all border-2 text-lg py-3 rounded-full"
            v-for="(item, index) in listItems"
            v-on:click="activeElement = index"
            :class="{
              ' shadow-xl  bg-white border-white': activeElement == index,
            }"
          >
            {{ item }}
          </div>

          <div class="border-2 text-lg p-3 rounded-full">
            <SettingLines />
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <div class="text-4xl">
          Likes <span class="ml-2 text-sm font-thin">Of all resources</span>
        </div>
        <div class="h-10 w-full bg-red-400">1</div>
      </div>
      <!-- <div class="border rounded"></div> -->
    </div>
    <div class="basis-1/2"></div>
  </div>
</template>

<script lang="ts" setup>
import SettingLines from "~/components/icons/SettingLines.vue";
const activeElement = ref(0);
const listItems = ["Today", "Better Result", "Higher Payment"];
</script>
