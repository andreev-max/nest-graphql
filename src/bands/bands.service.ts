import 'dotenv/config';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateBandDto } from './dto/create-band.dto';
import { UpdateBandDto } from './dto/update-band.dto';

@Injectable()
export class BandsService {
  private client;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.BANDS_URL,
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

  async createBand(dto: CreateBandDto, token: string) {
    console.log({ dto, token });
    const response = await axios.post(
      `${process.env.BANDS_URL}`,
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

  async updateBand(dto: UpdateBandDto, token: string, id: string) {
    console.log({ dto, token, id });
    const response = await axios.put(
      `${process.env.BANDS_URL}/${id}`,
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

  async deleteBand(token: string, id: string) {
    console.log({ id, token });
    const response = await axios.delete(`${process.env.BANDS_URL}/${id}`, {
      headers: {
        authorization: token,
      },
    });
    console.log(response.data);
    return response.data;
  }
}
