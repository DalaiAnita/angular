
export const users: IUser[] = [
    { userId: 1001, userName: 'admin11@gmail.com', password: '11111111', role: 'admin', createdDate: new Date(), isActive: true },
    { userId: 1002, userName: 'admin22@gmail.com', password: '22222222', role: 'admin', createdDate: new Date(), isActive: true },
    { userId: 1003, userName: 'admin33@gmail.com', password: '33333333', role: 'admin', createdDate: new Date(), isActive: true },
    { userId: 1004, userName: 'admin44@gmail.com', password: '44444444', role: 'admin', createdDate: new Date(), isActive: false },
    { userId: 1005, userName: 'admin55@gmail.com', password: '55555555', role: 'admin', createdDate: new Date(), isActive: true },
    { userId: 1006, userName: 'admin66@gmail.com', password: '66666666', role: 'user', createdDate: new Date(), isActive: false },
    { userId: 1007, userName: 'admin77@gmail.com', password: '77777777', role: 'user', createdDate: new Date(), isActive: true },
    { userId: 1008, userName: 'admin88@gmail.com', password: '88888888', role: 'user', createdDate: new Date(), isActive: false },
    { userId: 1009, userName: 'admin99@gmail.com', password: '99999999', role: 'user', createdDate: new Date(), isActive: true },
    { userId: 1010, userName: 'admin1010@gmail.com', password: '10101010', role: 'user', createdDate: new Date(), isActive: false },

];
export interface IUser {
    userId: number,
    userName: string,
    password: string,
    role: string,
    createdDate: Date,
    isActive: boolean,
}
