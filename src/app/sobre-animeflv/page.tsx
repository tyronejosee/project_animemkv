import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto my-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Sobre AnimeFLV Clone</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            Este proyecto es un clon de AnimeFLV creado con fines educativos y
            demostrativos.
          </p>
          <p>Tecnologías utilizadas:</p>
          <ul>
            <li>Next.js 16</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Shadcn UI</li>
            <li>Supabase</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
