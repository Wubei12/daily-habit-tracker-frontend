import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import { createRouter, createWebHistory } from 'vue-router';
import HabitList from './views/HabitList.vue';
import 'primeicons/primeicons.css';
import TasksView from './views/TasksView.vue';
import DashboardView from './views/DashboardView.vue';
import { Calendar, DatePicker, setupCalendar } from 'v-calendar';
import { createPinia } from 'pinia';
import 'v-calendar/style.css';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', name: 'Home', component: DashboardView },
		{ path: '/habit-list', name: 'HabitList', component: HabitList },
		{ path: '/tasks', name: 'Tasks', component: TasksView },
	],
});

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router).mount('#app');
app.use(setupCalendar, {});
app.component('VCalendar', Calendar);
app.component('VDatePicker', DatePicker);
