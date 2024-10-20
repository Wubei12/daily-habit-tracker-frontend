<template>
	<div class="space-y-6">
		<PageHeader
			title="Habit Tracker"
			description="Stay on top of your daily routines with a clear overview of your progress. "
		/>
		<div class="w-full h-full bg-white rounded-xl">
			<h1>This is the Habit List page</h1>

			<HabitsGrid />
		</div>
	</div>
</template>

<script lang="ts" setup>
	import HabitsGrid from '../components/HabitsGrid.vue';
	import PageHeader from '../components/PageHeader.vue';
</script>
