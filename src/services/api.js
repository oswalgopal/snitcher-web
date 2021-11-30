import axios from 'axios';

export class Api {
  serverUrl = 'https://all-cp-contest-info.herokuapp.com';
  constructor() {}
  getApi(param) {
    console.log(param);
    // console.log(this.serverUrl + param.url);
    return axios
      .get('https://all-cp-contest-info.herokuapp.com' + param.url)
      // .get('http://localhost:8080' + param.url)
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  }
}
