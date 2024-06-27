import { log } from "console";
import { PrismaClient, UserSetting } from "@prisma/client";
import { Service } from "typedi";
import { HttpException } from "../exceptions/HttpException";
const prisma = new PrismaClient();
@Service()
export class UserSettingService {
  public async createUserSetting(
    userSettingData: UserSetting
  ): Promise<UserSetting> {
    const user = await prisma.user.findUnique({
      where: { id: userSettingData.user_id },
    });

    if (!user) {
      throw new HttpException(
        404,
        `User with ID ${userSettingData.user_id} doesn't exist.`
      );
    }
    const userSetting = await prisma.userSetting.findUnique({
      where: { user_id: userSettingData.user_id },
    });

    if (userSetting) {
      console.log(userSettingData.user_id);

      throw new HttpException(
        404,
        `User setting for user with ID ${userSettingData.user_id} already exists.`
      );
    }

    return prisma.userSetting.create({
      data: {
        ...userSettingData,
        user_id: userSettingData.user_id,
      },
    });
  }
  public async findAllUserSetting(): Promise<UserSetting[]> {
    return prisma.userSetting.findMany({});
  }

  public async findUserSetting(userId: number): Promise<UserSetting> {
    const userSetting = await prisma.userSetting.findUnique({
      where: { user_id: userId },
    });

    if (!userSetting) {
      throw new HttpException(
        404,
        `User setting for user with ID ${userId} doesn't exist.`
      );
    }

    return userSetting;
  }

  public async updateUserSetting(
    userId: number,
    userSettingData: Partial<UserSetting>
  ): Promise<UserSetting> {
    const userSetting = await prisma.userSetting.findUnique({
      where: { user_id: userId },
    });

    if (!userSetting) {
      throw new HttpException(
        404,
        `User setting for user with ID ${userId} doesn't exist.`
      );
    }

    return prisma.userSetting.update({
      where: { user_id: userId },
      data: userSettingData,
    });
  }

  public async deleteUserSetting(userId: number): Promise<UserSetting> {
    const userSetting = await prisma.userSetting.findUnique({
      where: { user_id: userId },
    });

    if (!userSetting) {
      throw new HttpException(
        404,
        `User setting for user with ID ${userId} doesn't exist.`
      );
    }

    return prisma.userSetting.delete({
      where: { user_id: userId },
    });
  }
}
