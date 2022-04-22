import { requestAdvices } from '../services/requestAPIs';

async function handleAdvice() {
  const advice = await requestAdvices();
  return advice;
}

export default handleAdvice;
