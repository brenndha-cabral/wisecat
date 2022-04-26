export const requestAdvices = async () => {
  try {
    const URL = 'https://api.adviceslip.com/advice';
    const response = await fetch(URL);
    const { slip: { advice } } = await response.json();
    return advice;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const requestCatsImages = async () => {
  try {
    const URL = 'https://api.thecatapi.com/v1/images/search';
    const response = await fetch(URL);
    const catImage = await response.json();
    return catImage[0].url;
  } catch (error) {
    throw new Error(error.message);
  }
};
