import "dotenv/config";
import { Injectable } from "@nestjs/common";
import axios from "axios";
import { CreateBandDto } from "./dto/create-band.dto";
import { UpdateBandDto } from "./dto/update-band.dto";

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
    return res.data.items;
  }

  async getOneById(id: string) {
    const response = await this.client.get(`/${id}`);
    return response.data;
  }

  async createBand(dto: CreateBandDto, token: string) {
    const response = await axios.post(
      `${process.env.BANDS_URL}`,
      {
        ...dto,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return response.data;
  }

  async updateBand(dto: UpdateBandDto, token: string, id: string) {
    const response = await axios.put(
      `${process.env.BANDS_URL}/${id}`,
      {
        ...dto,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return response.data;
  }

  async deleteBand(token: string, id: string) {
    const response = await axios.delete(`${process.env.BANDS_URL}/${id}`, {
      headers: {
        authorization: token,
      },
    });
    return response.data;
  }
}
