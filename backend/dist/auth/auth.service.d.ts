import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { AuthPayloadDto } from './dto/auth.dto';
import { createUserDto } from './dto/createUser.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    create(createUserDto: createUserDto): Promise<void>;
    validateUser({ username, password }: AuthPayloadDto): Promise<string>;
    changePassword(oldPassword: string, newPassword: string, username: string): Promise<void>;
}
