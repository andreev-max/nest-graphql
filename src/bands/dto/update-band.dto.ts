import { IsArray, IsOptional, IsString } from 'class-validator';
import { Member, UpdatedBand } from 'src/graphql.schema';


export class UpdateBandDto extends UpdatedBand {
    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    origin: string;

    @IsArray()
    @IsOptional()
    members: Member[];

    @IsString()
    @IsOptional()
    website: string;

    @IsArray()
    @IsOptional()
    genresIds: string[];
}
