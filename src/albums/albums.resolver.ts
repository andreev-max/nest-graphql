import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { Id } from 'src/decorators/id.decorator';
import { Token } from 'src/decorators/token.decorator';
import { AlbumsService } from './albums.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Resolver('Album')
export class AlbumsResolver {
  constructor(private readonly albumsService: AlbumsService) {}

  @Query()
  async album(@Args('id') id: string) {
    return this.albumsService.getOneById(id);
  }

  @Query()
  async albums() {
    const result = await this.albumsService.getAll();
    console.log('RESULT', result);
    return result;
  }

  @Mutation()
  async createAlbum(
    @Token() token: string,
    @Args('input') args: CreateAlbumDto,
  ) {
    const result = await this.albumsService.createAlbum(args, token);
    return result;
  }

  @Mutation()
  async updateAlbum(
    @Token() token: string,
    @Args('input') args: UpdateAlbumDto,
    @Id() id: string,
  ) {
    const result = await this.albumsService.updateAlbum(args, token, id);
    return result;
  }

  @Mutation()
  async deleteAlbum(@Token() token: string, @Id() id: string) {
    const result = await this.albumsService.deleteAlbum(token, id);
    return result;
  }
}
