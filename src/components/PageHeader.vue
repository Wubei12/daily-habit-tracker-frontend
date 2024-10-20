<template>
	<div class="flex flex-col items-start justify-between max-w-md">
		<h1 class="text-3xl font-bold">{{ title }}</h1>
		<p class="text-base text-gray-600">{{ description }}</p>
	</div>
</template>

<script lang="ts" setup>
	defineProps<{ title: string; description: string }>();
</script>
