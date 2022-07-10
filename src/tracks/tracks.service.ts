import 'dotenv/config';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';

@Injectable()
export class TracksService {
  private client;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.TRACKS_URL,
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

  async createTrack(dto: CreateTrackDto, token: string) {
    console.log({ dto, token });
    const response = await axios.post(
      `${process.env.TRACKS_URL}`,
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

  async updateTrack(dto: UpdateTrackDto, token: string, id: string) {
    console.log({ dto, token, id });
    const response = await axios.put(
      `${process.env.TRACKS_URL}/${id}`,
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

  async deleteTrack(token: string, id: string) {
    console.log({ id, token });
    const response = await axios.delete(`${process.env.TRACKS_URL}/${id}`, {
      headers: {
        authorization: token,
      },
    });
    console.log(response.data);
    return response.data;
  }
}
