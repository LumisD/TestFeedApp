import { Post } from "@/app/domain/models/Post";
import axios from "axios";

export const API_BASE = "https://662029f13bf790e070af2cd8.mockapi.io/api/v1";

export const feedApi = {
  async fetchPosts(): Promise<Post[]> {
    const res = await axios.get<Post[]>(`${API_BASE}/posts`);
    return res.data;
  },

  async likePost(postId: string): Promise<void> {
    await axios.post(`${API_BASE}/posts/${postId}/like`);
  },

  async savePost(postId: string): Promise<void> {
    await axios.post(`${API_BASE}/posts/${postId}/save`);
  },

  async commentOnPost(postId: string, comment: string): Promise<void> {
    await axios.post(`${API_BASE}/posts/${postId}/comment`, { comment });
  },
};
