export default class APIService {
  static getDog() {
    return fetch('https://random.dog/woof.json?include=jpg,gif,png')
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

  static getCat() {
    return fetch('https://aws.random.cat/meow')
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
}