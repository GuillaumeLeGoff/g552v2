import express from "express";
import authRouter from "../components/auth/auth.route";
import buttonRouter from "../components/button/button.route";
import folderRouter from "../components/folder/folder.route";
import globalSettingRouter from "../components/global-settings/global-setting.route";

const app = express();

app.use("/auth", authRouter);
app.use("/button", buttonRouter);
app.use("/folder", folderRouter);
app.use("/global-setting", globalSettingRouter);

export default app;
