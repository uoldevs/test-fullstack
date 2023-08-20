export type UserType = {
    id?: number;
    name: string;
    email: string;
    cpf: string;
    phone: string;
    status: string;
    createdAt?: Date | string | null;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
};
