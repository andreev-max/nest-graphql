import { Args, Resolver, Query, Mutation } from "@nestjs/graphql";
import { Id } from "src/decorators/id.decorator";
import { Token } from "src/decorators/token.decorator";
import { ArtistsService } from "./artists.service";
import { CreateArtistDto } from "./dto/create-artist.dto";
import { UpdateArtistDto } from "./dto/update-artist.dto";

@Resolver("Artist")
export class ArtistsResolver {
  constructor(private readonly artistsService: ArtistsService) {}

  @Query()
  async artist(@Args("id") id: string) {
    return this.artistsService.getOneById(id);
  }

  @Query()
  async artists() {
    const result = await this.artistsService.getAll();
    return result;
  }

  @Mutation()
  async createArtist(
    @Token() token: string,
    @Args("input") args: CreateArtistDto
  ) {
    const result = await this.artistsService.createArtist(args, token);
    return result;
  }

  @Mutation()
  async updateArtist(
    @Token() token: string,
    @Args("input") args: UpdateArtistDto,
    @Id() id: string
  ) {
    const result = await this.artistsService.updateArtist(args, token, id);
    return result;
  }

  @Mutation()
  async deleteArtist(@Token() token: string, @Id() id: string) {
    const result = await this.artistsService.deleteArtist(token, id);
    return result;
  }
}
