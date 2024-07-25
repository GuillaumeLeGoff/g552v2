import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreatePlaylistDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(32)
  public name: string;
}
