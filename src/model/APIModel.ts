interface ImageObject {
  index: number;
  url: string;
}
interface OpenAiDishJsonResponse {
  name: string;
  cuisine: string;
  summary: string;
  costtime: string;
  prompt: string;
  complexity: string;
  image_url?: string;
  imagePrompt: string;
}
interface StepResponse {
  description: string;
  imageurl: string;
}

export { ImageObject, OpenAiDishJsonResponse, StepResponse };
