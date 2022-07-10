import { IsArray, IsOptional, IsString } from 'class-validator';
import { Member, NewBand } from 'src/graphql.schema';


export class CreateBandDto extends NewBand {
    @IsString()
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
