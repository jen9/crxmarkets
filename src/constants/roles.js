export const CRUD_ADMIN = "CRUD_ADMIN";
export const READ_ONLY_ADMIN = "READ_ONLY_ADMIN";

const roles = {
    'crudadmin': {
        role: CRUD_ADMIN,
        password: 'password'
    },
    'readonlyadmin': {
        role: READ_ONLY_ADMIN,
        password: 'password'
    }
};

export default roles;
