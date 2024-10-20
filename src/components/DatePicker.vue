<script setup>
	import { ref, computed, onMounted, TransitionGroup } from 'vue';

	const today = new Date();
	const visibleDates = ref([]);
	const selectedDate = ref(null);
	const allDates = ref(generateDates());
	const startIndex = ref(0); // To manage the visible dates
	const selectedDay = ref(null);
	console.log('🚀 ~ selectedDay:', selectedDay.value);

	// Generate dates from 1 to 31
	function generateDates() {
		const dates = [];
		for (let i = 1; i <= 31; i++) {
			dates.push(i);
		}
		return dates;
	}

	// Update visible dates based on start index
	function updateVisibleDates() {
		visibleDates.value = allDates.value.slice(
			startIndex.value,
			startIndex.value + 10
		); // Show 5 dates at a time
	}

	function nextDay() {
		if (!isNextDisabled.value) {
			startIndex.value++;
			updateVisibleDates();
		}
	}

	// Slide to the previous set of dates
	function prevDay() {
		if (!isPrevDisabled.value) {
			startIndex.value--;
			updateVisibleDates();
		}
	}
	const isNextDisabled = computed(() => {
		return startIndex.value >= allDates.value.length - 10;
	});

	const isPrevDisabled = computed(() => {
		return startIndex.value <= 0;
	});

	function selectDay(date) {
		selectedDay.value = date;
	}

	onMounted(() => {
		updateVisibleDates();
	});
</script>

<template>
	<div class="flex flex-col items-center">
		<div class="flex items-center gap-3 max-w-[412px]">
			<button
				@click="prevDay"
				class="text-xl cursor-pointer left-arrow"
				:disabled="isPrevDisabled"
			>
				<i
					v-if="isPrevDisabled"
					class="rotate-90 pi pi-sort-down text-primary"
				></i>
				<i
					v-if="!isPrevDisabled"
					class="rotate-90 pi pi-sort-down-fill text-primary"
				></i>
			</button>
			<div class="flex justify-center gap-4 overflow-hidden">
				<TransitionGroup
					name="slide"
					tag="span"
					class="flex justify-center gap-3 overflow-hidden"
				>
					<span
						v-for="date in visibleDates"
						:key="date"
						class="text-base size-[24px] aspect-square items-center justify-center flex border border-primary rounded-md hover:bg-secondary hover:text-white cursor-pointer smooth_effect"
						>{{ date }}</span
					>
				</TransitionGroup>
			</div>
			<button
				@click="nextDay"
				class="text-xl cursor-pointer right-arrow"
				:disabled="isNextDisabled"
			>
				<i
					v-if="isNextDisabled"
					class="rotate-90 pi pi-sort-up text-primary"
				></i>
				<i
					v-if="!isNextDisabled"
					class="rotate-90 pi pi-sort-up-fill text-primary"
				></i>
			</button>
		</div>
	</div>
</template>
