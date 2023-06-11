// const variable

const incAcc = "incAcc";
const decAcc = "decAcc";
const incAccByNum = "incAccByNum";
const incBonus = "incBonus";
const decBonus = "decBonus";
const incBonusByNum = "incBonusByNum";

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
