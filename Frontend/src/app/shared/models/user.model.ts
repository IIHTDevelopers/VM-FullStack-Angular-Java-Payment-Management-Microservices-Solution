export interface User {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password?: string; // Optional for security reasons, typically not sent back from server
    createdDate: Date;
    updatedDate: Date;
    status: UserStatus;
}

export enum UserStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    PENDING = 'PENDING'
}
