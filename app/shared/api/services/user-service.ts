import { apiClient } from '../base';

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateUserRequest {
  name?: string;
  email?: string;
}

export class UserService {
  static async getProfile(): Promise<User> {
    return apiClient.get<User>('/user/profile');
  }

  static async updateProfile(data: UpdateUserRequest): Promise<User> {
    return apiClient.put<User>('/user/profile', data);
  }

  static async getUsers(): Promise<User[]> {
    return apiClient.get<User[]>('/users');
  }

  static async getUserById(id: string): Promise<User> {
    return apiClient.get<User>(`/users/${id}`);
  }
} 