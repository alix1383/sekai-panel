<template>
  <div class="flex flex-col gap-6 max-w-lg justify-between">
    <Likes />
    <Reposts />
    <Registration />
    <Comments />
  </div>
</template>

<script lang="ts" setup>
import Comments from "./components/Comments.vue";
import Likes from "./components/Likes.vue";
import Registration from "./components/Registration.vue";
import Reposts from "./components/Reposts.vue";
</script>
