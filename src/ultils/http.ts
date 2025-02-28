/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from 'axios';

class Http {
  public api: AxiosInstance;
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_VITE,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async get(url: string, params?: any) {
    try {
      const response = await this.api.get(url, { params });
      return response.data;
    } catch (error: any) {
      return error.response.data;
    }
  }
  async post(url: string, data?: any, config?: any) {
    try {
      const response = await this.api.post(url, data, config);
      return response;
    } catch (error: any) {
      return error.response.data;
    }
  }

  async update(url: string, data: any, config?: any) {
    try {
      const response = await this.api.put(url, data, config);
      return response.data;
    } catch (error: any) {
      return error.response.data;
    }
  }

  async delete(url: string, id: string) {
    try {
      const response = await this.api.delete(`${url}/${id}`);
      return response.data;
    } catch (error: any) {
      return error.response.data;
    }
  }
}

export const http = new Http();
