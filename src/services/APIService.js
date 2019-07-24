import users from '../mocks/users';
import roles from '../constants/roles';

export const fetchUsersMock = (searchTherm) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(Array.from(users).filter(user => user.last_name.includes(searchTherm))), 700);
    });
};

export const fetchUserMock = (id) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(Array.from(users).find(user => +id === user.id)), 500);
    });
};

export const authorize = data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (roles[data.login] && roles[data.login].password === data.password) {
                resolve(roles[data.login].role);
            } else {
                reject('Wrong credentials');
            }
        }, 500)
    });
};
