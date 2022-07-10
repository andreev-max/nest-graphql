
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class NewAlbum {
    name: string;
    released?: Nullable<number>;
    artists?: Nullable<Nullable<NewArtist>[]>;
    bands?: Nullable<Nullable<NewBand>[]>;
    tracks?: Nullable<Nullable<NewTrack>[]>;
    genres?: Nullable<Nullable<NewGenre>[]>;
    image?: Nullable<string>;
}

export class UpdatedAlbum {
    name?: Nullable<string>;
    released?: Nullable<number>;
    artists?: Nullable<Nullable<UpdatedArtist>[]>;
    bands?: Nullable<Nullable<UpdatedBand>[]>;
    tracks?: Nullable<Nullable<UpdatedTrack>[]>;
    genres?: Nullable<Nullable<UpdatedGenre>[]>;
    image?: Nullable<string>;
}

export class NewArtist {
    firstName: string;
    secondName: string;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country: string;
    bands?: Nullable<Nullable<NewBand>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export class UpdatedArtist {
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<Nullable<NewBand>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export class IMember {
    artist?: Nullable<string>;
    instrument?: Nullable<string>;
    years?: Nullable<Nullable<string>[]>;
}

export class NewBand {
    name: string;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<IMember>[]>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<NewGenre>[]>;
}

export class UpdatedBand {
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<IMember>[]>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<NewGenre>[]>;
}

export class NewGenre {
    name: string;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export class UpdatedGenre {
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export class NewTrack {
    title: string;
    album?: Nullable<NewAlbum>;
    artists?: Nullable<Nullable<NewArtist>[]>;
    bands?: Nullable<Nullable<NewBand>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<NewGenre>[]>;
}

export class UpdatedTrack {
    title?: Nullable<string>;
    album?: Nullable<NewAlbum>;
    artists?: Nullable<Nullable<UpdatedArtist>[]>;
    bands?: Nullable<Nullable<UpdatedBand>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<UpdatedGenre>[]>;
}

export class NewUser {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
}

export class Album {
    _id: string;
    name: string;
    released?: Nullable<number>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    image?: Nullable<string>;
}

export abstract class IQuery {
    abstract albums(): Nullable<Nullable<Album>[]> | Promise<Nullable<Nullable<Album>[]>>;

    abstract album(id: string): Nullable<Album> | Promise<Nullable<Album>>;

    abstract artists(): Nullable<Nullable<Artist>[]> | Promise<Nullable<Nullable<Artist>[]>>;

    abstract artist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;

    abstract bands(): Nullable<Nullable<Band>[]> | Promise<Nullable<Nullable<Band>[]>>;

    abstract band(id: string): Nullable<Band> | Promise<Nullable<Band>>;

    abstract genres(): Nullable<Nullable<Genre>[]> | Promise<Nullable<Nullable<Genre>[]>>;

    abstract genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;

    abstract tracks(): Nullable<Nullable<Track>[]> | Promise<Nullable<Nullable<Track>[]>>;

    abstract track(id: string): Nullable<Track> | Promise<Nullable<Track>>;

    abstract jwt(email: string, password: string): Nullable<JWT> | Promise<Nullable<JWT>>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export class DeleteOutput {
    acknowledged?: Nullable<boolean>;
    deletedCount?: Nullable<number>;
}

export abstract class IMutation {
    abstract createAlbum(input?: Nullable<NewAlbum>): Nullable<Album> | Promise<Nullable<Album>>;

    abstract updateAlbum(input?: Nullable<UpdatedAlbum>): Nullable<Album> | Promise<Nullable<Album>>;

    abstract deleteAlbum(): Nullable<DeleteOutput> | Promise<Nullable<DeleteOutput>>;

    abstract createArtist(input?: Nullable<NewArtist>): Nullable<Artist> | Promise<Nullable<Artist>>;

    abstract updateArtist(input?: Nullable<UpdatedArtist>): Nullable<Artist> | Promise<Nullable<Artist>>;

    abstract deleteArtist(): Nullable<DeleteOutput> | Promise<Nullable<DeleteOutput>>;

    abstract createBand(input?: Nullable<NewBand>): Nullable<Band> | Promise<Nullable<Band>>;

    abstract updateBand(input?: Nullable<UpdatedBand>): Nullable<Band> | Promise<Nullable<Band>>;

    abstract deleteBand(): Nullable<DeleteOutput> | Promise<Nullable<DeleteOutput>>;

    abstract createGenre(input?: Nullable<NewGenre>): Nullable<Genre> | Promise<Nullable<Genre>>;

    abstract updateGenre(input?: Nullable<UpdatedGenre>): Nullable<Genre> | Promise<Nullable<Genre>>;

    abstract deleteGenre(): Nullable<DeleteOutput> | Promise<Nullable<DeleteOutput>>;

    abstract createTrack(input?: Nullable<NewTrack>): Nullable<Track> | Promise<Nullable<Track>>;

    abstract updateTrack(input?: Nullable<UpdatedTrack>): Nullable<Track> | Promise<Nullable<Track>>;

    abstract deleteTrack(): Nullable<DeleteOutput> | Promise<Nullable<DeleteOutput>>;

    abstract register(input?: Nullable<NewUser>): Nullable<User> | Promise<Nullable<User>>;
}

export class Artist {
    _id: string;
    firstName: string;
    secondName: string;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country: string;
    bands?: Nullable<Nullable<Band>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export class Member {
    artist?: Nullable<string>;
    instrument?: Nullable<string>;
    years?: Nullable<Nullable<string>[]>;
}

export class Genre {
    _id: string;
    name: string;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export class Band {
    _id: string;
    name: string;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<Member>[]>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export class Track {
    _id: string;
    title: string;
    album?: Nullable<Album>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export class JWT {
    jwt: string;
}

export class User {
    _id: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    password?: Nullable<string>;
    email?: Nullable<string>;
}

type Nullable<T> = T | null;
