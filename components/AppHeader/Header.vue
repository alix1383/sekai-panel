<template>
  <header class="flex items-center justify-between">
    <UserProfile />
    <div class="flex">
      <ThemeMode />
      <!-- <DownloadSwitch /> -->
    </div>
  </header>
</template>

<script lang="ts" setup>
import UserProfile from "./components/UserProfile.vue";
import ThemeMode from "./components/ThemeMode.vue";
// import DownloadSwitch from "./components/DownloadSwitch.vue";
</script>
