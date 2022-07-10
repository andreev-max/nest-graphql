import 'dotenv/config';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { NewUserDTO } from './dto/new-user.dto';
import { User } from 'src/graphql.schema';

console.log('URL', `${process.env.USERS_URL}/login`);

@Injectable()
export class UsersService {
  private client;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.USERS_URL,
    });
  }

  async getOneById(id: string) {
    const response = await this.client.get(`/${id}`);
    console.log('RESPONSE', response.data);
    return response.data;
  }

  async login(email: string, password: string) {
    const response = await axios.post(`${process.env.USERS_URL}/login`, {
      email,
      password,
    });
    console.log('RESPONSE', response.data);
    return response.data;
  }

  async register(newUserDTO: NewUserDTO) {
    console.log(newUserDTO);
    const response = await axios.post(`${process.env.USERS_URL}/register`, {
      ...newUserDTO,
    });
    console.log(response.data);
    return response.data;
  }
}
