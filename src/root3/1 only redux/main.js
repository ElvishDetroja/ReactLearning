import { createStore } from "redux";

// store
const store = createStore(reducer);

//
//

let history = [];

// reducer
function reducer(state = { amount: 1 }, action) {
  if (action.type == "increment") {
    // state.amount += 1;
    return { amount: state.amount + 1 };
  }
  return state;
}

//
//

// global state
console.log(store.getState());


setInterval(() => {
  store.dispatch({ type: "increment" });
}, 1000);



// jyare jyare state change thase tyare aa call thase.

store.subscribe(() => {
  history.push(store.getState());
  console.log(history);
});







// state.amount += 1; ma state ni koi copy create nathi thati.
// koi ek address pr state object che teni j value change thay che.
// state array ni andar push thay che.
// history = [state, state, state]
// ahi array ni andar je state object che te ek j object ne represent kare che.

// { amount: state.amount + 1 }
// history = [state, state, state]
// ahi je state che te state ni biji koi copy object j bani gai che.



// redux three main principals

// global store hovo joiye.
// state ne directly change nai karvana, copy maintain thay tem change karva. aetle ke immutable updates.
// reducer should be pure.
