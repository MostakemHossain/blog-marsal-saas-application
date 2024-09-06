import { Button } from "@/components/ui/button";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const session = await getUser();
  return (
    <div>
      {session ? (
        <div>
          <LogoutLink>
            <Button>Logout</Button>
          </LogoutLink>
        </div>
      ) : (
        <div>
          <RegisterLink>
            <Button>Register</Button>
          </RegisterLink>
          <LoginLink>
            <Button>Login</Button>
          </LoginLink>
        </div>
      )}
    </div>
  );
}
