export default class APIService {
  static async getDog() {
    return fetch('https://random.dog/woof.json?include=jpg')
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  // static getCat() {

  // }

  // static getBear() {

  // }
}