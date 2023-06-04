export const getImages = () => {
  
  const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

  return images;
}

function importAll(r) {
  return r.keys().map(r);
}

