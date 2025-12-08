async function getState(promise) {
  const unique = Symbol("unique");

  return Promise.race([promise, unique]).then(
    (value) => (value === unique ? "pending" : "fulfilled"),
    () => "rejected"
  );
}

const p = Promise.resolve();
const state = await getState(p);
console.log(state);

const q = Promise.reject();
const state2 = await getState(q);
console.log(state2);

const r = new Promise(() => {});
const state3 = await getState(r);
console.log(state3);
