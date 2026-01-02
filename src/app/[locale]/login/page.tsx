import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div className="container mx-auto flex items-center justify-center min-h-[60vh]">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Iniciar Sesión</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Email
              </label>
              <Input type="email" placeholder="tu@email.com" />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Contraseña
              </label>
              <Input type="password" placeholder="••••••••" />
            </div>

            <Button className="w-full" size="lg">
              Entrar
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>
              ¿No tienes cuenta?{" "}
              <Link href="#" className="text-primary hover:underline">
                Regístrate
              </Link>
            </p>
            <p className="mt-2 text-xs">(Esta es una página de demostración)</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
