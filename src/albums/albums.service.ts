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
    const response = await this.client.get();
    return response.data.items;
  }

  async getOneById(id: string) {
    const response = await this.client.get(`/${id}`);
    return response.data;
  }

  async createAlbum(dto: CreateAlbumDto, token: string) {
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
    return response.data;
  }

  async updateAlbum(dto: UpdateAlbumDto, token: string, id: string) {
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
    return response.data;
  }

  async deleteAlbum(token: string, id: string) {
    const response = await axios.delete(`${process.env.ALBUMS_URL}/${id}`, {
      headers: {
        authorization: token,
      },
    });
    return response.data;
  }
}
