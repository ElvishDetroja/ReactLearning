import axios from "axios";

// const variable

const incAcc = "incAcc";
const decAcc = "decAcc";
const incAccByNum = "incAccByNum";
const incBonus = "incBonus";
const decBonus = "decBonus";
const incBonusByNum = "incBonusByNum";

const getUserPending = "getUserPending";
const getUserFulFilled = "getUserFulFilled";
const getUserRejected = "getUserRejected";

export function incrementAccount() {
  return { type: incAcc };
}

export function decrementAccount() {
  return { type: decAcc };
}

export function incrementAccountByNumber(value) {
  return { type: incAccByNum, payload: value };
}

export function incrementBonus() {
  return { type: incBonus };
}

export function decrementBonus() {
  return { type: decBonus };
}

export function incrementBonusByNumber(value) {
  return { type: incBonusByNum, payload: value };
}

//
//
//
//
//

function getUserPendingfunc() {
  return { type: getUserPending };
}

function getUserFulFilledfunc(data) {
  return { type: getUserFulFilled, payload: data };
}

function getUserRejectedfunc(err) {
  return { type: getUserRejected, error: err };
}

export function getUser(id) {
  return async function (dispatch, getState) {
    try {
      dispatch(getUserPendingfunc());
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      dispatch(getUserFulFilledfunc(data));
    } catch (error) {
      dispatch(getUserRejectedfunc(error.message));
    }
  };
}
