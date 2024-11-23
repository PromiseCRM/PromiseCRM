import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-3/12 bg-white shadow-top-bottom rounded-lg px-6 py-4">
        <h2 className="text-2xl font-medium antialiased text-center mb-4">Promise CRM</h2>
        <form action="">
            <div className="mb-3">
              <Label htmlFor="email">E-mail</Label>
              <Input type="email" name="email" id="email" />
            </div>
            <div className="mb-3">
              <Label htmlFor="password">Password</Label>
              <Input type="password" name="password" id="password" />
            </div>

            <div className="mb-3">
                <a href="#" className="text-sm text-primary">Forget password ?</a>
            </div>
            <Button>Login</Button>
        </form>
      </div>
    </div>
  );
}
