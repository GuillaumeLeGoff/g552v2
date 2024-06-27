/* import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import AuthService from "../../api/authService"; // Import AuthService

function ChangePasswordOnFirstLoginFormComponent() {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChangePassword = async (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    try {
      await AuthService.changePasswordOnFirstLogin(password);
      setSuccessMessage("Password changed successfully");
      setErrorMessage(null); // Clear any previous error message
    } catch (error) {
      console.error("Password change failed:", error);
      setErrorMessage((error as { message: string }).message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
        </CardHeader>
        <form onSubmit={handleChangePassword}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">New Password</Label>
                <Input
                  id="password"
                  placeholder="Enter your new password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  placeholder="Confirm your new password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="items-center justify-center flex">
                {errorMessage && (
                  <div className="text-red-500 text-sm">{errorMessage}</div>
                )}
                {successMessage && (
                  <div className="text-green-500 text-sm">{successMessage}</div>
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
              <span>Change Password</span>
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default ChangePasswordOnFirstLoginFormComponent;

 */