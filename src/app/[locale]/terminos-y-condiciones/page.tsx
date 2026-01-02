import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="container mx-auto my-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Términos y Condiciones</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            Bienvenido a AnimeFLV Clone. Al usar nuestro sitio, aceptas los
            siguientes términos y condiciones.
          </p>
          <h3>1. Uso del Sitio</h3>
          <p>
            Este sitio es una demostración técnica y no aloja contenido
            protegido por derechos de autor. Todo el contenido es simulado o
            incrustado de fuentes externas.
          </p>
          <h3>2. Privacidad</h3>
          <p>No recopilamos información personal sin tu consentimiento.</p>
          <h3>3. Modificaciones</h3>
          <p>
            Nos reservamos el derecho de modificar estos términos en cualquier
            momento.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
