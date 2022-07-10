import 'dotenv/config';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenresService {
  private client;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.GENRES_URL,
    });
  }

  async getAll() {
    const res = await this.client.get();
    console.log(res);
    return res.data.items;
  }

  async getOneById(id: string) {
    const response = await this.client.get(`/${id}`);
    console.log('RESPONSE', response);
    return response.data;
  }

  async createGenre(dto: CreateGenreDto, token: string) {
    console.log({ dto, token });
    const response = await axios.post(
      `${process.env.GENRES_URL}`,
      {
        ...dto,
      },
      {
        headers: {
          authorization: token,
        },
      },
    );
    console.log(response.data);
    return response.data;
  }

  async updateGenre(dto: UpdateGenreDto, token: string, id: string) {
    console.log({ dto, token, id });
    const response = await axios.put(
      `${process.env.GENRES_URL}/${id}`,
      {
        ...dto,
      },
      {
        headers: {
          authorization: token,
        },
      },
    );
    console.log(response.data);
    return response.data;
  }

  async deleteGenre(token: string, id: string) {
    console.log({ id, token });
    const response = await axios.delete(`${process.env.GENRES_URL}/${id}`, {
      headers: {
        authorization: token,
      },
    });
    console.log(response.data);
    return response.data;
  }
}
