// import $ from 'jquery';
import APIService from "./APIService";

export default class Game {
  constructor(numberOfImages, imageArea) {
    this.score = 0;
    this.images = new Map();
    this.loaded = false;
    this.imageArea = imageArea;
    this.addImages(numberOfImages)
      .then(() => {
        console.log("making tags");
        this.makeImgTags();
        this.loaded = true;
      });
  }

  async addImages(numberOfImages) {
    let promises = [];
    for (let i = 0; i < numberOfImages; i++) {
      let animal = Math.floor(Math.random() * 2);
      promises.push(await this.addImage(animal, i));
    }
    return Promise.all(promises);
  }

  addImage(animal, index) {
    return new Promise(resolve => {
      if (animal === 0) {
        APIService.getDog()
          .then((dog) => this.images.set(index, new ImageCard(dog.url, 'dog')))
          .then(() => {
            console.log(`added dog at ${index}`);
            resolve();
          });
      } else {
        APIService.getCat()
          .then((cat) => this.images.set(index, new ImageCard(cat.file, 'cat')))
          .then(() => {
            console.log(`added cat at ${index}`);
            resolve();
          });
      }
    });
  }

  makeImgTags() {
    this.images.forEach((img, key) => {
      this.imageArea.append(`<img src='${img.url}' class='${img.animal}' id='image${key}'>`);
    });
  }
}

class ImageCard {
  constructor(url, animal) {
    this.url = url;
    this.animal = animal;
  }
}