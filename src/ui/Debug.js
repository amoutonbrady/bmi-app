import { wire } from 'hyperhtml'

export default store => {
  return wire(store, ':bmi')`
    <div class="debug">
      ${store.bmi}
    </div>
  `
}
