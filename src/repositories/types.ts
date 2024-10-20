import { Habit } from '../models/Habit';

export interface HabitListResponse {
	data: Array<Habit>;
	meta: {
		totalCount: number;
		currentPage: number;
		perPage: number;
	};
}
