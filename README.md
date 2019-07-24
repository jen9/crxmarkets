This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

To run project:
1. Install all dependencies: `npm i`
2. Run project `npm start`
3. It should open app in browser at `localhost:3000` URL
4. Credentials: crudadmin/password, readonlyadmin/password

Project analysis:
1. Projects is based on React library. For managing state I've been using `Redux` for managing data flow and `Redux-saga` middleware for async actions. For routing I used `react-router (v5)`.
2. Actively used hooks and functional components.
3. Used mocks for data (users). Therefore updating particular user were done only for locale state of user component. (I decided do not store data about user in store for whole redux store lifetime).
4. Used styled components for styling.
5. Added a few tests: DOM, util, saga. Cover main types of unit tests.
6. Added paginating, sorting, searching, editing functionality for users.

TODO:
1. Add props validation
2. Fix console warnings 
3. Add role based behaviour (for crud and regular admin)


