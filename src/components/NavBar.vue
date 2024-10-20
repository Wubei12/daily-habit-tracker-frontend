<template>
	<div
		class="h-full drop-shadow-md fixed w-[250px] px-8 flex flex-col items-center space-y-6 bg-white rounded-xl font-poppins"
	>
		<a
			href="/"
			class="flex items-center justify-center w-full gap-3 px-6 py-6"
		>
			<img
				src="../../public/logo.png"
				alt="dailies-logo"
				class="size-12 rounded-xl border border-[#16c48a]"
			/>
			<div class="w-full text-nowrap">
				<h1 class="text-xl font-bold">Dailies</h1>
				<p class="text-sm">Track your profile</p>
			</div>
		</a>
		<nav
			class="flex flex-col items-start justify-center w-full space-y-4 text-lg text-gray-700"
		>
			<router-link
				to="/"
				class="nav-link"
				exact-active-class="active-link"
			>
				<i class="pi pi-objects-column"></i>
				Dashboard
			</router-link>
			<router-link
				to="/tasks"
				class="nav-link"
				exact-active-class="active-link"
			>
				<i class="pi pi-book"></i>

				Tasks
			</router-link>
			<router-link
				to="/habit-list"
				class="nav-link"
				exact-active-class="active-link"
			>
				<i class="pi pi-list-check"></i>

				Habit List
			</router-link>
		</nav>
	</div>
</template>

<script lang="ts" setup></script>
