<template>
	<div>
		<div>
			<!-- <input
					v-model="habitName"
					placeholder="Habit Name"
				/>
				<input
					v-model="habitDescription"
					placeholder="Habit Description"
				/>
				<button @click="addHabit">Add Habit</button> -->
			<ul>
				<li v-if="habitsLoading">Loading...</li>

				<li
					v-for="habit in habits"
					:key="habit.id"
				>
					{{ habit.title }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { onMounted, ref } from 'vue';
	import { storeToRefs } from 'pinia';
	import { useHabitStore } from '../stores/habitStore';

	const store = useHabitStore();

	const { habits, habitsLoading } = storeToRefs(store);

	const habitName = ref('');
	const habitDescription = ref('');
	onMounted(() => {
		store.fetchHabits();
	});

	// 	const addHabit = async () => {
	//   await store.addHabit({ name: habitName.value, description: habitDescription.value });
	// };
</script>

<style></style>
