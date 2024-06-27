import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import LoginIcon from "@mui/icons-material/Login";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import type { User } from "../../types/user";
import AuthService from "../../api/authService";
import useUserStore from "@/stores/userStore";
import DisconnectUserDialog from "../dialog/DisconnectUser";

function LoginFormComponent() {
  const users = useLoaderData() as User[];
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const selectedUser = useUserStore((state) => state.selectedUser);
  const setSelectedUser = useUserStore((state) => state.setSelectedUser);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedUser && password) {
      try {
        const result = await AuthService.login(selectedUser, password);
        console.log("Login successful:", result);
        setErrorMessage(null);
      } catch (error) {
        console.error("Login failed:", error);
        const message = (error as { message: string }).message
        setErrorMessage(message);
        if (message === "User already logged in") {
          // Show the disconnect dialog
          console.log("Show disconnect dialog");
          setShowDisconnectDialog(true);
        }
      }
    }
  };

  const [showDisconnectDialog, setShowDisconnectDialog] = useState(false);

  const handleDisconnect = async () => {
    setErrorMessage(null);
    console.log("handleDisconnect");
    
   /*  try {
      await AuthService.disconnect(selectedUser);
      setShowDisconnectDialog(false);
      setErrorMessage(null);
    } catch (error) {
      console.error("Disconnect failed:", error);
    } */
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="pb-1">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="user">Select User</Label>
                <Select onValueChange={(value) => setSelectedUser(value)}>
                  <SelectTrigger id="user">
                    <SelectValue placeholder="User" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {users.map((user) => (
                      <SelectItem key={user.id} value={user.username}>
                        {user.username}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={!selectedUser}
                  />
                  <Button
                    type="button"
                    className="absolute top-1/2 right-2 -translate-y-1/2"
                    size="icon"
                    variant="ghost"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={!selectedUser}
                  >
                    {showPassword ? (
                      <VisibilityIcon className="h-5 w-5" />
                    ) : (
                      <VisibilityOffIcon className="h-5 w-5" />
                    )}
                    <span className="sr-only">Toggle password visibility</span>
                  </Button>
                </div>
              </div>

              <div className="items-center justify-center flex">
                {errorMessage && (
                  <div className="text-red-500 text-sm">{errorMessage}</div>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              type="submit"
              className="rounded-full"
              size="icon"
              variant="ghost"
            >
              <LoginIcon className="h-5 w-5" />
              <span className="sr-only">Login</span>
            </Button>
          </CardFooter>
        </form>
      </Card>
      {showDisconnectDialog && (
        <DisconnectUserDialog onConfirm={handleDisconnect} onCancel={() => setShowDisconnectDialog(false)} />
      )}
    </div>
  );
}

export default LoginFormComponent;
