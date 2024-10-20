<template>
	<div class="space-y-6">
		<div
			class="flex items-center justify-between w-full h-auto px-4 py-6 bg-white drop-shadow-md rounded-xl"
		>
			<PageHeader
				title="Dashboard"
				description="One Degree more In Every Day &#128293;. "
			/>

			<div class="relative h-[50px] flex items-center gap-5 w-1/2">
				<div class="absolute flex items-center h-full left-3">
					<i class="text-xl font-light text-center pi pi-search"></i>
				</div>
				<input
					type="text"
					class="w-full h-full px-10 border rounded-lg focus:outline-primary border-secondary"
					placeholder="Search Here"
				/>
				<button
					class="p-2 border hover:bg-green-300 aspect-square size-12 smooth_effect rounded-xl border-primary"
				>
					<i class="text-xl font-light text-center pi pi-send"></i>
				</button>
				<button
					class="p-2 border hover:bg-green-300 aspect-square size-12 smooth_effect rounded-xl border-primary"
				>
					<i class="text-xl font-light text-center pi pi-bell"></i>
				</button>
				<button
					class="flex items-center justify-center px-4 py-2 text-lg text-white rounded-lg active:scale-110 bg-secondary hover:bg-primary smooth_effect text-nowrap"
				>
					<i
						class="flex items-center justify-center pi pi-plus-circle size-6"
					></i>

					Add Task
				</button>
			</div>
		</div>
		<div class="w-full h-full p-4 space-y-5 bg-white rounded-xl drop-shadow-md">
			<div class="grid w-full grid-cols-12 gap-5">
				<div
					class="flex items-center justify-start col-span-4 gap-3 px-4 py-2 border-[2px] hover:scale-[1.02] smooth_effect cursor-pointer border-blue-400 rounded-xl"
				>
					<img
						src="/assets/clock.png"
						alt="dailies"
						class="size-24"
					/>
					<div>
						<h1 class="text-base capitalize">best productive Time</h1>
						<span class="text-xl font-bold"> 8:00 A.M. to 4:00 P.M. </span>
					</div>
				</div>
				<div
					class="flex items-center justify-start col-span-4 gap-3 px-4 py-2 border-[2px] hover:scale-[1.02] smooth_effect cursor-pointer border-purple-400 rounded-xl"
				>
					<img
						src="/assets/coffeeTime.webp"
						alt="dailies-break"
						class="size-24"
					/>
					<div>
						<h1 class="text-base capitalize">break session (in total)</h1>
						<span class="text-xl font-bold">
							2 Hours: 10 Minutes: 05 Seconds
						</span>
					</div>
				</div>
				<div
					class="flex items-center justify-start col-span-4 gap-3 px-4 py-2 border-[2px] hover:scale-[1.02] smooth_effect cursor-pointer border-red-400 rounded-xl"
				>
					<img
						src="/assets/focus-target.png"
						alt="dailies-focus"
						class="size-24"
					/>
					<div>
						<h1 class="text-base capitalize">best productive Time</h1>
						<span class="text-xl font-bold"> 8:00 A.M. to 4:00 P.M. </span>
					</div>
				</div>
			</div>
			<div class="grid w-full grid-cols-12 gap-5">
				<div class="col-span-4 space-y-3">
					<div class="flex items-center justify-between w-full">
						<h1 class="text-2xl font-bold">To Do List</h1>
						<ManualControlDatePicker />
					</div>
					<DatePicker />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import PageHeader from '../components/PageHeader.vue';
	import DatePicker from '../components/DatePicker.vue';
	import ManualControlDatePicker from '../components/ManualControlDatePicker.vue';
</script>

<style></style>
