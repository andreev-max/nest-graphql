import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { Id } from 'src/decorators/id.decorator';
import { Token } from 'src/decorators/token.decorator';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { TracksService } from './tracks.service';

@Resolver('Track')
export class TracksResolver {
  constructor(private readonly tracksService: TracksService) {}

  @Query()
  async track(@Args('id') id: string) {
    return this.tracksService.getOneById(id);
  }

  @Query()
  async tracks() {
    const result = await this.tracksService.getAll();
    console.log('RESULT', result);
    return result;
  }

  @Mutation()
  async createTrack(
    @Token() token: string,
    @Args('input') args: CreateTrackDto,
  ) {
    console.log(token);
    console.log(args);
    const result = await this.tracksService.createTrack(args, token);
    console.log(result);
    return result;
  }

  @Mutation()
  async updateTrack(
    @Token() token: string,
    @Args('input') args: UpdateTrackDto,
    @Id() id: string,
  ) {
    console.log(token);
    console.log(args);
    console.log(id);
    const result = await this.tracksService.updateTrack(args, token, id);
    console.log(result);
    return result;
  }

  @Mutation()
  async deleteTrack(@Token() token: string, @Id() id: string) {
    console.log(token);
    console.log(id);
    const result = await this.tracksService.deleteTrack(token, id);
    console.log(result);
    return result;
  }
}
