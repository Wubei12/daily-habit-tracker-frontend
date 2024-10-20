import { Habit } from '../../../models/Habit';
import BaseRepository from '../../BaseRepository';
import { HabitListResponse } from '../../types';

export class HabitRepository extends BaseRepository {
	async getHabits() {
		const response: HabitListResponse = await this.get('habits');

		return response;
	}
}
