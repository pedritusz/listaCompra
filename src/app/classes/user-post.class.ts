import { RoleEnum } from '../enums/role.enum';

export class UserPostClass {
    name: string;
    email: string;
    password: string;
    role: RoleEnum;

    constructor(name: string, email: string, password: string, role?: RoleEnum) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role ? role : RoleEnum.current;
    }
}
