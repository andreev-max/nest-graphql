import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { Id } from 'src/decorators/id.decorator';
import { Token } from 'src/decorators/token.decorator';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { GenresService } from './genres.service';

@Resolver('Genre')
export class GenresResolver {
  constructor(private readonly genresService: GenresService) {}

  @Query()
  async genre(@Args('id') id: string) {
    return this.genresService.getOneById(id);
  }

  @Query()
  async genres() {
    const result = await this.genresService.getAll();
    console.log('RESULT', result);
    return result;
  }

  @Mutation()
  async createGenre(
    @Token() token: string,
    @Args('input') args: CreateGenreDto,
  ) {
    console.log(token);
    console.log(args);
    const result = await this.genresService.createGenre(args, token);
    console.log(result);
    return result;
  }

  @Mutation()
  async updateGenre(
    @Token() token: string,
    @Args('input') args: UpdateGenreDto,
    @Id() id: string,
  ) {
    console.log(token);
    console.log(args);
    console.log(id);
    const result = await this.genresService.updateGenre(args, token, id);
    console.log(result);
    return result;
  }

  @Mutation()
  async deleteGenre(@Token() token: string, @Id() id: string) {
    console.log(token);
    console.log(id);
    const result = await this.genresService.deleteGenre(token, id);
    console.log(result);
    return result;
  }
}
