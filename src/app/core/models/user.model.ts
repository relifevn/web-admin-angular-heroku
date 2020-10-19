import { USER_TYPE } from '../constants';

export class UserModel {
    username: string;
    userType: USER_TYPE;
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
}
