import { bind, wire } from 'hyperhtml';
import './styles/index.css';

import Heartbeat from './ui/Heartbeat';
import DisplayBMI from './ui/DisplayBMI';
import Debug from './ui/Debug';

const render = bind(document.body);

const store = {
  gender: 'male',
  age: 22,
  height: 180,
  weight: 60,
  bmi: null,
  setStore(key, value) {
    this[key] = value;
    App(render, this);
  },
};

const num = number => Number.parseFloat(number);

function App(html, store) {
  const render = store.bmi ? DisplayBMI(store) : Heartbeat(store);

  function handleEvent({ target }) {
    store.setStore(target.name, target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { height, weight } = store;

    const bmi = num(weight) / Math.pow(num(height), 2);
  }

  html`
    <header class="header">
      <h3 class="header__title">Calculateur d'IMC</h3>
    </header>

    <main class="main">
      ${render}

      <form class="form" onsubmit=${handleSubmit}>
        <section class="gender">
          <div class="gender__input">
            <input onchange=${handleEvent} type="radio" id="homme" name="gender" value="homme" checked />
            <label for="homme">Homme</label>
          </div>

          <div class="gender__input">
            <input onchange=${handleEvent} type="radio" id="femme" name="gender" value="femme" />
            <label for="femme">Femme</label>
          </div>
        </section>

        <section class="inputs">
          <div class="input">
            <label class="input__label" for="age">age</label>
            <input class="input__field" name="age" oninput=${handleEvent} type="text" id="age"/>
          </div>
          <div class="input">
            <label class="input__label" for="taille">taille</label>
            <input class="input__field" name="height" oninput=${handleEvent} type="text" id="taille" name="taille"/>
            <span class="input__metric">Cm</span>
          </div>
          <div class="input">
            <label class="input__label" for="poids">poids</label>
            <input class="input__field" name="weight" oninput=${handleEvent} type="text" id="poids" name="poids"/>
            <span class="input__metric">Kg</span>
          </div>
        </section>

        <button type="submit" class="form__submit">Calculer</button>
      </form>
    </main>
  `;
}

function handleClick(e) {
  store.name = 'Paux';
  App(render, store);
}

App(render, store);
