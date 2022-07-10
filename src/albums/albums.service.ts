import 'dotenv/config';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Injectable()
export class AlbumsService {
  private client;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.ALBUMS_URL,
    });
  }

  async getAll() {
    console.log(process.env.ALBUMS_URL);
    const response = await this.client.get();
    console.log('RESPONSE', response);
    return response.data.items;
  }

  async getOneById(id: string) {
    const response = await this.client.get(`/${id}`);
    console.log('RESPONSE', response);
    return response.data;
  }

  async createAlbum(dto: CreateAlbumDto, token: string) {
    console.log({ dto, token });
    const response = await axios.post(
      `${process.env.ALBUMS_URL}`,
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

  async updateAlbum(dto: UpdateAlbumDto, token: string, id: string) {
    console.log({ dto, token, id });
    const response = await axios.put(
      `${process.env.ALBUMS_URL}/${id}`,
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

  async deleteAlbum(token: string, id: string) {
    console.log({ id, token });
    const response = await axios.delete(`${process.env.ALBUMS_URL}/${id}`, {
      headers: {
        authorization: token,
      },
    });
    console.log(response.data);
    return response.data;
  }
}
