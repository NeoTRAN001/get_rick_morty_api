import { LitElement, html } from 'lit-element';
import './components/GetData';
import './components/ApiTemplate';

import styles from './styles/RickMortyStyles';

export class RickMorty extends LitElement {
  static get properties() {
    return {
      wiki: { type: Array }
    };
  }

  static get styles() {
    return [styles];
  }

  constructor() {
    super();

    this.wiki = [];

    this.addEventListener('ApiData', (e) => { 
      this._dataFormat(e.detail.data);
    });
  }

  _dataFormat(data) {
    let characters = [];

    data["results"].forEach((character) => {
      characters.push({
        img: character.image,
        name: character.name,
        species: character.species,
        status: character.status
      });
    });

    this.wiki = characters;
  }

  render() {
    return html`
      <get-data url="https://rickandmortyapi.com/api/character/" method="GET"></get-data>
      
      <api-template></api-template>
      
      <div class="container">
        ${this.dataTemplate}
      </div>
    `;
  }

  get dataTemplate() {
    return html`
        ${this.wiki.map(character => html`
          <div class="card">
              <div class="card-content aToDo">
                  <h2 class="text-content"> ${ character.name }</h2> 
                  <img src="${character.img}">
                  <p>${character.species} | ${character.status}</p>
              </div>
          </div>
        `)}
    `;
  } 
}
