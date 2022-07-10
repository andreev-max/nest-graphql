import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { NewUserDTO } from './dto/new-user.dto';
import { UsersService } from './users.service';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query()
  async user(@Args({ name: 'id', type: () => String }) id: string) {
    return this.usersService.getOneById(id);
  }

  @Query()
  async jwt(@Args('email') email: string, @Args('password') password: string) {
    console.log(email);
    console.log(password);
    return this.usersService.login(email, password);
  }

  @Mutation()
  async register(@Args('input') args: NewUserDTO) {
    console.log(args);
    const result = await this.usersService.register(args);
    console.log(result);
    return result;
  }
}
