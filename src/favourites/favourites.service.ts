import "dotenv/config";
import { Injectable } from "@nestjs/common";
import axios from "axios";
import { AddToFavouritesDto } from "./dto/add-to-favourites.dto";
import { RemoveFromFavouritesDto } from "./dto/remove-from-favourites.dto";

@Injectable()
export class FavouritesService {
  private client;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.FAVOURITES_URL,
    });
  }

  async add(dto: AddToFavouritesDto, token: string, id: string) {
    const response = await axios.put(
      `${process.env.FAVOURITES_URL}/add`,
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

  async remove(dto: RemoveFromFavouritesDto, token: string, id: string) {
    const response = await axios.put(
      `${process.env.FAVOURITES_URL}/add`,
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
}
