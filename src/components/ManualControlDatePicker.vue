<template>
	<VDatePicker
		v-model="date"
		:popover="true"
	>
		<template #default="{ togglePopover, inputValue, inputEvents }">
			<div class="flex overflow-hidden border border-gray-300 rounded-lg">
				<button
					class="flex items-center justify-center px-2 border-r border-gray-300"
					@click="() => togglePopover()"
				>
					<i class="pi pi-calendar text-primary size-5"></i>
				</button>
				<input
					:value="inputValue"
					v-on="inputEvents"
					class="px-2 py-1"
				/>
			</div>
		</template>
	</VDatePicker>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';

	const date = ref(new Date());
</script>
