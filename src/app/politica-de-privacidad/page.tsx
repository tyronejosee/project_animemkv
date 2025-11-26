import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto my-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Política de Privacidad</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>En AnimeFLV Clone, valoramos tu privacidad.</p>
          <h3>Recopilación de Datos</h3>
          <p>
            Este sitio utiliza cookies básicas para mejorar la experiencia del
            usuario. No compartimos datos con terceros.
          </p>
          <h3>Contacto</h3>
          <p>
            Si tienes preguntas sobre nuestra política de privacidad,
            contáctanos.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
