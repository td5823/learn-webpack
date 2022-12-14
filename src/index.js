// import Print from './print';

async function getComponent() {
  const element = document.createElement('div');
  const { default: _ } = await import('lodash');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.onclick = Print.bind(null, 'Hello webpack!');
  return element;
 }
 getComponent().then((component) => {
  document.body.appendChild(component);
});

// function getComponent() {
//   return import('lodash')
//     .then(({ default: _ }) => {
//       const element = document.createElement('div');

//       element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//       return element;
//     })
//     .catch((error) => 'An error occurred while loading the component');
// }

// getComponent().then((component) => {
//   document.body.appendChild(component);
// });