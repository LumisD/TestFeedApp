import axios from "axios";
import { Post } from "../../domain/models/Post";

const API_URL = "https://662029f13bf790e070af2cd8.mockapi.io/api/v1/posts";

export async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(API_URL);
  return response.data;
}
