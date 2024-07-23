import "reflect-metadata";
import { PrismaClient } from "@prisma/client";
import { AuthService } from "../src/components/auth/auth.service"; // Assurez-vous que le chemin est correct
import { Container } from "typedi";
import { RegisterDto } from "../src/components/auth/auth.validation"; // Assurez-vous que le chemin est correct

const prisma = new PrismaClient();
const authService = Container.get(AuthService);

async function main() {
  const buttons = Array.from({ length: 16 }, (_, i) => ({
    name: `Button ${i + 1}`,
  }));

  if (buttons.length > 0) {
    await prisma.button.createMany({
      data: buttons,
    });
  }

  const activeSessionData = {
    user_id: null,
    active_token: null,
  };

  if (Object.values(activeSessionData).some((value) => value !== null)) {
    await prisma.activeSession.create({
      data: activeSessionData,
    });
  }

  const globalSettingData = {
    standby: false,
    standby_start_time: 0,
    standby_end_time: 0,
    restart_at: 0,
  };

  if (Object.values(globalSettingData).some((value) => value !== 0)) {
    await prisma.globalSetting.create({
      data: globalSettingData,
    });
  }

  const userData: RegisterDto = {
    username: "admin",
    password: "admin",
  };
  await authService.register(userData);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
