(async () => {
  const { default: constants } = await import('./constants');
  const target = {};
  console.info(constants);
  Object.assign(target, constants);
  document.body.innerText = target.text;
})();