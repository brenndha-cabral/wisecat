import { requestAdvices, requestCatsImages } from '../services/requestAPIs';

const handleAdviceAndCatImage = async () => (
  Promise.all([await requestAdvices(), await requestCatsImages()])
    .then(([advice, catImage]) => ({ advice, catImage }))
);

export default handleAdviceAndCatImage;
