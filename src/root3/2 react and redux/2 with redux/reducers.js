// const variable

const incAcc = "incAcc";
const decAcc = "decAcc";
const incAccByNum = "incAccByNum";
const incBonus = "incBonus";
const decBonus = "decBonus";
const incBonusByNum = "incBonusByNum";

//
//
//

export function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case incAcc:
      return { amount: state.amount + 1 };

    case decAcc:
      return { amount: state.amount - 1 };

    case incAccByNum:
      return { amount: state.amount + action.payload };

    default:
      return state;
  }
}

//
//
//

export function bonusReducer(state = { points: 1 }, action) {
  switch (action.type) {
    case incBonus:
      return { points: state.points + 1 };

    case decBonus:
      return { points: state.points - 1 };

    case incBonusByNum:
      return { points: state.points + action.payload };

    default:
      return state;
  }
}
