import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";

function LoginFormComponent() {
  return (<div className="flex items-center justify-center min-h-screen">
  <Card className="w-[300px] py-4">
    <form >
      <CardContent className="pb-1">
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="user" className="font-bold">Nom d'utilisateur</Label>
            <Select /* onValueChange={(value) => setSelectedUser(value)} */>
             {/*  <SelectTrigger id="user">
                <SelectValue placeholder="User" />
              </SelectTrigger>
              <SelectContent position="popper">
                {users.map((user) => (
                  <SelectItem key={user.id} value={user.username}>
                    {user.username}
                  </SelectItem>
                ))}
              </SelectContent> */}
            </Select>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password" className="font-bold">Mot de passe</Label>
            <div className="relative">
              <Input
                id="password"
                /* placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={!selectedUser} */
              />
              <Button
                type="button"
                className="absolute top-1/2 right-2 -translate-y-1/2"
                variant="ghost"
               /*  size="icon"
                
                onClick={() => setShowPassword(!showPassword)}
                disabled={!selectedUser} */
              >
                {/* {showPassword ? (
                  <VisibilityIcon className="h-5 w-5" />
                ) : (
                  <VisibilityOffIcon className="h-5 w-5" />
                )} */}
                <span className="sr-only">Toggle password visibility</span>
              </Button>
            </div>
          </div>

          {/* <div className="items-center justify-center flex">
            {errorMessage && (
              <div className="text-red-500 text-sm">{errorMessage}</div>
            )}
          </div> */}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col justify-center">
      <Button variant="link">Mot de passe oublié</Button>
      <Button variant="default">Connexion</Button>
      </CardFooter>
    </form>
  </Card>
  {/* {showDisconnectDialog && (
    <DisconnectUserDialog onConfirm={handleDisconnect} onCancel={() => setShowDisconnectDialog(false)} />
  )} */}

</div>);
}

export default LoginFormComponent;
