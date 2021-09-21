import dummyData from './dummydata.json';

export default {
  getUsers: () => new Promise((resolve) => {
    resolve(dummyData);
  }),
};
