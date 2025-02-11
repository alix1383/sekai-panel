<template>
  <AppHeader />
  <main class="flex">
    <AppNavbar />
    <slot />
  </main>
</template>

<script lang="ts" setup>
import { AppHeader, AppNavbar } from "#components";
</script>
