<template>
  <AppHeader />
  <main class="flex mt-2 gap-5">
    <AppNavbar />
    <slot />
  </main>
</template>

<script lang="ts" setup>
import { AppHeader, AppNavbar } from "#components";
</script>
