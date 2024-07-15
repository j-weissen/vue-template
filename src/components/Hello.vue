<script setup lang="ts">
import { useHelloStore } from "../stores/hello.ts";
const helloStore = useHelloStore();
</script>

<template>
  <h1>{{ helloStore.hello }}</h1>
</template>
