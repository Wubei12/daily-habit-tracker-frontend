// src/repositories/BaseRepository.ts
import { ofetch } from 'ofetch';

class BaseRepository {
	private baseUrl: string;

	constructor() {
		this.baseUrl = process.env.VITE_API_BASE_URL as string;
	}

	async get<T>(endpoint: string): Promise<T> {
		return ofetch(`${this.baseUrl}${endpoint}`);
	}

	async post<T>(endpoint: string, body: object): Promise<T> {
		return ofetch(`${this.baseUrl}${endpoint}`, {
			method: 'POST',
			body,
		});
	}

	async delete<T>(endpoint: string): Promise<T> {
		return ofetch(`${this.baseUrl}${endpoint}`, {
			method: 'DELETE',
		});
	}

	async put<T>(endpoint: string, body: object): Promise<T> {
		return ofetch(`${this.baseUrl}${endpoint}`, {
			method: 'PUT',
			body,
		});
	}
}

export default BaseRepository;
