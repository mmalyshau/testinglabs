export class UserFactory {
    static getAdminUser() {
        return { username: 'standard_user', password: 'secret_sauce' };
    }

    static getInvalidUser() {
        return { username: 'invalid_user', password: 'wrong_password' };
    }
}
