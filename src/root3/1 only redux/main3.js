import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

// const variable
const inc = "inc";
const dec = "dec";
const incByNum = "incByNum";
const decByNum = "decByNum";
const init = "init";

// store
const store = createStore(
  reducer,
  applyMiddleware(logger.default, thunk.default)
);

//
//
// reducer
function reducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case inc:
      return { amount: state.amount + 1 };
    case dec:
      return { amount: state.amount - 1 };
    case incByNum:
      return { amount: state.amount + action.payload };
    case decByNum:
      return { amount: state.amount - action.payload };
    case init:
      return { amount: action.payload };
    default:
      return state;
  }
}

//
//
// action creaters
function increment() {
  return { type: inc };
}

function decrement() {
  return { type: dec };
}

function incrementByNumber(value) {
  return { type: incByNum, payload: value };
}

async function decrementByNumber() {
  const { data } = await axios.get("http://localhost:3000/accounts/1");
  return { type: decByNum, payload: data.amount };
}

// error - Actions must be plain objects.
// jyare store.dispatch call thay che tema sync function hovu joiye je normal object return kartu hoy.
// pan atyare async function che je by default promise return kare che.
// jyare dispatch thay tyare te instantly dispatch thavu joiye.
// pan ahi action creator hold karave che te nai chale.

// to apne aevu joiye che ke dispatch call thay tyare te thodi var hold thai jay aetle ke async function chalvu joiye and 
// pachi je action creator mathi je return thayu che te data sathe dispatch thay.
// avu karva mate thunk middleware. npm i redux-thunk

// have dispatch ma function call karavani jarur nathi.
// have khali function nu name lakhi nakhsu to pan chalse.

// thunk middleware aa function ne dispatch and getState ni access dese.

// have dispatch two phase ma thay che.

async function decrementByNumber2(dispatch, getState) {
  const { data } = await axios.get("http://localhost:3000/accounts/1");
  dispatch({ type: decByNum, payload: data.amount });
}

// middleware lagavya pachi dispatch ma bane functionality che.
// jo store.dispatch ma direct j plain object hase to tene dispatch kari dese.
// jo store.dispatch ma function defination hase to te function ne dispatch and getState provide karse.

async function getUser(dispatch, getState) {
  const { data } = await axios.get("http://localhost:3000/accounts/1");
  dispatch(initUser(data.amount));
}

// have jo id ne function mathi input levu hoy to aa rite thase.
// jyare store.dispatch ma async function return thase tyare thunk middleware tene dispatch and getState provide kari dese.

function getUser2(id) {
  return async function (dispatch, getState) {
    const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
    dispatch(initUser(data.amount));
  };
}

function initUser(value) {
  return { type: init, payload: value };
}

//
//
//
//

setTimeout(() => {
  //   store.dispatch(incrementByNumber(500));
  //   store.dispatch(decrementByNumber());
  //   store.dispatch(decrementByNumber2);
  // store.dispatch(getUser);
  //   store.dispatch({ type: incByNum, payload: 25 });
  store.dispatch(getUser2(2));
}, 5000);
