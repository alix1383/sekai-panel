<template>
  <div
    class="border-2 items-center rounded-full justify-between border-base-300 p-0.5 flex w-full max-w-72"
  >
    <div class="flex items-center">
      <NuxtImg
        src="/img/profile.png"
        alt="User Profile"
        height="64"
        class="rounded-full"
      />
      <p :title="userName" class="truncate ml-1">{{ userName }}</p>
    </div>
    <div
      class="relative flex h-16 w-16 items-center justify-center rounded-full bg-base-300"
    >
      <Notifications />

      <div
        class="top-4 left-4 bg-base-300 flex items-center justify-center absolute w-3 h-3 rounded-full"
      >
        <div class="rounded-full bg-accent w-3/4 h-3/4"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const userName = "Chisato Nishikigi";
import Notifications from "~/components/icons/Notifications.vue";
</script>
