import { PrismaClient, Playlist } from "@prisma/client";
import { Service } from "typedi";
import { CreatePlaylistDto } from "./playlist.validation";
import { UserType } from "../../types/user.type";

const prisma = new PrismaClient();

@Service()
export class PlaylistService {
  async getUserPlaylists(user: UserType): Promise<Playlist[]> {
    const playlists = await prisma.playlist.findMany({
      where: {
        user_id: user.id,
      },
    });
    return playlists;
  }

  async getPlaylistById(id: number): Promise<Playlist | null> {
    const playlist = await prisma.playlist.findUnique({
      where: { id },
    });
    return playlist;
  }

  async createPlaylist(
    playlistData: CreatePlaylistDto,
    user: UserType
  ): Promise<Playlist> {
    const playlist = await prisma.playlist.create({
      data: {
        name: playlistData.name,
        user_id: user.id,
      },
    });
    console.log(playlist);

    return playlist;
  }

  async updatePlaylist(
    id: number,
    playlistData: CreatePlaylistDto
  ): Promise<Playlist | null> {
    const playlist = await prisma.playlist.update({
      where: { id },
      data: {
        name: playlistData.name,
      },
    });
    return playlist;
  }

  async deletePlaylist(id: number): Promise<Playlist | null> {
    const playlist = await prisma.playlist.delete({
      where: { id },
    });
    return playlist;
  }
}
