const keyed = [];
const secret = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
window.addEventListener("keydown", event => {
  console.log(event.key);
  keyed.push(event.key);
  keyed.splice(-secret.length - 1, keyed.length - secret.length);
  console.log(keyed);
  if (keyed.includes(secret)) {
    cornify_add();
  }
});
