<script setup>
	import NavBar from '@/components/NavBar.vue';
	import { RouterView } from 'vue-router';
</script>

<template>
	<NavBar />

	<main class="w-full h-full ml-[280px] font-poppins">
		<RouterView />
	</main>
</template>
