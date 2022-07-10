import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { Id } from 'src/decorators/id.decorator';
import { Token } from 'src/decorators/token.decorator';
import { BandsService } from './bands.service';
import { CreateBandDto } from './dto/create-band.dto';
import { UpdateBandDto } from './dto/update-band.dto';

@Resolver('Band')
export class BandsResolver {
  constructor(private readonly bandsService: BandsService) {}

  @Query()
  async band(@Args('id') id: string) {
    return this.bandsService.getOneById(id);
  }

  @Query()
  async bands() {
    const result = await this.bandsService.getAll();
    console.log('RESULT', result);
    return result;
  }

  @Mutation()
  async createBand(@Token() token: string, @Args('input') args: CreateBandDto) {
    console.log(token);
    console.log(args);
    const result = await this.bandsService.createBand(args, token);
    console.log(result);
    return result;
  }

  @Mutation()
  async updateBand(
    @Token() token: string,
    @Args('input') args: UpdateBandDto,
    @Id() id: string,
  ) {
    console.log(token);
    console.log(args);
    console.log(id);
    const result = await this.bandsService.updateBand(args, token, id);
    console.log(result);
    return result;
  }

  @Mutation()
  async deleteBand(@Token() token: string, @Id() id: string) {
    console.log(token);
    console.log(id);
    const result = await this.bandsService.deleteBand(token, id);
    console.log(result);
    return result;
  }
}
