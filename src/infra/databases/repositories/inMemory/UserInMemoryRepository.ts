import { IUserRepository } from "../../../../domain/repositories/IUserRepository";
import { User } from '../../../../domain/entities/User';

export class UserInMemoryRepository implements IUserRepository {
    private users: User[] = [];
    private userIdCounter = 1;

    async createEntity(user: User): Promise<User> {
        const newUser: User = {
            id: this.userIdCounter++,
            username: user.username,
            password: user.password,
        };
        this.users.push(newUser);
        return newUser;
    }

    async updateEntity(user: User): Promise<User> {
        const userIndex = this.users.findIndex((u) => u.id === user.id);
        if (userIndex === -1) {
            throw new Error(`User with ID ${user.id} not found.`);
        }

        this.users[userIndex] = {
            ...this.users[userIndex],
            ...user,
        };
        return this.users[userIndex];
    }

    async deleteEntity(user: User): Promise<void> {
        const userIndex = this.users.findIndex((u) => u.id === user.id);
        if (userIndex === -1) {
            throw new Error(`User with ID ${user.id} not found.`);
        }
        this.users.splice(userIndex, 1);
    }

    async getEntityById(userId: number): Promise<User> {
        const user = this.users.find((user) => user.id === userId);
        if (!user) {
            throw new Error(`User with ID ${userId} not found.`);
        }
        return user;
    }

    async showListEntity(): Promise<User[]> {
        if (this.users.length === 0) {
            throw new Error('No users found.');
        }
        return this.users;
    }

    async getByUsername(username: string): Promise<User> {
        const user = this.users.find((user) => user.username === username);
        if (!user) {
            throw new Error(`User with username "${username}" not found.`);
        }
        return user;
    }
}
