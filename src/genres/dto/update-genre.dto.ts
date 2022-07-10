import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';
import { UpdatedGenre } from 'src/graphql.schema';

export class UpdateGenreDto extends UpdatedGenre {
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsNotEmpty()
  @IsOptional()
  description: string;

  @IsNotEmpty()
  @IsOptional()
  country: string;

  @IsNotEmpty()
  @IsInt()
  @IsOptional()
  year: number;
}
