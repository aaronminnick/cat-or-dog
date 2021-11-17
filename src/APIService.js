export default class APIService {
  static getDog() {
    return fetch('https://random.dog/woof.json')
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json().url;// image path
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  static getCat() {
    return fetch()
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return ;// image path
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  static getBear() {
    return fetch()
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return ;// image path
    })
    .catch(function(error) {
      console.log(error);
    });
  }
}