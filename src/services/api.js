import axios from "axios";

export const fetchPollinationsImage = async (prompt, params = {}) => {
  const defaultParams = {
    width: 1024,
    height: 1024
  };
  const queryParams = new URLSearchParams({ ...defaultParams, ...params });
  const encodedPrompt = encodeURIComponent(prompt);
  const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?${queryParams.toString()}`;

  const response = await axios.get(url, { responseType: "blob" });
  return URL.createObjectURL(response.data);
};