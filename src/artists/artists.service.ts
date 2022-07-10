import "dotenv/config";
import { Injectable } from "@nestjs/common";
import axios from "axios";
import { CreateArtistDto } from "./dto/create-artist.dto";
import { UpdateArtistDto } from "./dto/update-artist.dto";

@Injectable()
export class ArtistsService {
  private client;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.ARTISTS_URL,
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

  async createArtist(dto: CreateArtistDto, token: string) {
    const response = await axios.post(
      `${process.env.ARTISTS_URL}`,
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

  async updateArtist(dto: UpdateArtistDto, token: string, id: string) {
    const response = await axios.put(
      `${process.env.ARTISTS_URL}/${id}`,
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

  async deleteArtist(token: string, id: string) {
    const response = await axios.delete(`${process.env.ARTISTS_URL}/${id}`, {
      headers: {
        authorization: token,
      },
    });
    return response.data;
  }
}
