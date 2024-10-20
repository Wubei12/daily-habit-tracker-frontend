import { defineStore } from 'pinia';
import { Habit } from '../models/Habit';
import { ref } from 'vue';
import { ofetch } from 'ofetch';
import { validate as isUUID } from 'uuid';
import { HabitRepository } from '../repositories/features/habit/HabitRepository';
import { HabitListResponse } from '../repositories/types';

export const useHabitStore = defineStore('habitStore', () => {
	//Get All Habits
	const habitsLoading = ref(false);
	const habits = ref<Habit[]>([]);

	function toggleHabitsLoading(flag = true) {
		habitsLoading.value = flag;
	}

	async function fetchHabits(loading = true) {
		loading && toggleHabitsLoading();

		const habitRepo = new HabitRepository();
		await habitRepo
			.getHabits()
			.then((resp) => {
				let data = resp.data;
				habits.value = data;
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				loading && toggleHabitsLoading(false);
			});
	}

	return {
		habits,
		fetchHabits,
		habitsLoading,
	};
});
