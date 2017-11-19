import { wire } from 'hyperhtml';

export default function DisplayBMI(store) {
  const html = wire(store, ':bmi');
  const bmi = store.bmi.toFixed(2);

  const displayBMI = html`
        <div class="score" data-anime="score">
            <h2 class="score__msg">Great Shape!</h2>
            <h2 class="score__bmi">IMC : <strong>${bmi}</strong></h2>
        </div>
    `;

  return displayBMI;
}
