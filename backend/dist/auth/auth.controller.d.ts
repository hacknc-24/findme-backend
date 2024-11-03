import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { createUserDto } from './dto/createUser.dto';
import { ChangePasswordDto } from './dto/changePassword.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(createUserDto: createUserDto): Promise<{
        message: string;
    }>;
    login(authPayload: AuthPayloadDto): Promise<{
        access_token: string;
    }>;
    changePassword(changePasswordDto: ChangePasswordDto): Promise<{
        message: string;
    }>;
}
