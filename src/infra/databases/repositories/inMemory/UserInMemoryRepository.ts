import { IUserRepository } from "../../../../domain/repositories/IUserRepository";
import { User } from '../../../../domain/entities/User';
import { UpdateUserDto } from "@application/dto/user/updateUserDto";

export class UserInMemoryRepository implements IUserRepository {
    private users: User[] = [];
    private userIdCounter = 1;

    async createEntity(user: User): Promise<void> {
        const newUser: User = {
            id: this.userIdCounter++,
            username: user.username,
            password: user.password,
        };
        this.users.push(newUser);
        Promise.resolve()
    }

    async updateEntity(userId: number, inforInput: UpdateUserDto): Promise<void> {
        this.users[userId] = {
            id:userId,
            ...inforInput,
        };
        Promise.resolve()
    }

    async deleteEntity(userId: number): Promise<void> {
        this.users.splice(userId, 1);
    }

    async getEntityById(userId: number): Promise<User|null> {
        const user = this.users.find((user) => user.id === userId);
        if(!user){
            return null
        }
        return user;
    }

    async showListEntity(): Promise<User[]|null> {
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
