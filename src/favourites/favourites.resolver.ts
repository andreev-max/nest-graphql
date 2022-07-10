import { Args, Resolver, Query, Mutation } from "@nestjs/graphql";
import { Id } from "src/decorators/id.decorator";
import { Token } from "src/decorators/token.decorator";
import { AddToFavouritesDto } from "./dto/add-to-favourites.dto";
import { RemoveFromFavouritesDto } from "./dto/remove-from-favourites.dto";
import { FavouritesService } from "./favourites.service";

@Resolver("Favourite")
export class FavouritesResolver {
  constructor(private readonly favouritesService: FavouritesService) {}

  @Mutation()
  async addToFavourite(
    @Token() token: string,
    @Args("input") args: AddToFavouritesDto,
    @Id() id: string
  ) {
    console.log(token);
    console.log(args);
    console.log(id);
    const result = await this.favouritesService.add(args, token, id);
    console.log(result);
    return result;
  }

  @Mutation()
  async removeFromFavourite(
    @Token() token: string,
    @Args("input") args: RemoveFromFavouritesDto,
    @Id() id: string
  ) {
    console.log(token);
    console.log(args);
    console.log(id);
    const result = await this.favouritesService.remove(args, token, id);
    console.log(result);
    return result;
  }
}
