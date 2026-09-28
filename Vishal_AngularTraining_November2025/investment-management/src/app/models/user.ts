export interface User{
    id: number,
    name: string,
    email: string,
    gender: string,
    phone: string,
    password: string,
    role: 'user' | 'admin'
}