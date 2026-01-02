import { Globe, Heart, Sparkles, Target, Users, Video } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-4 max-w-5xl">
      <div className="space-y-4">
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="text-sm px-4 py-1">
            Sobre Nosotros
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Bienvenido a <span className="text-primary">AnimeMKV</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tu plataforma de confianza para disfrutar del mejor anime en alta calidad
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Nuestra Misión</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p>
                AnimeMKV tiene como objetivo brindarte un amplio catálogo de series anime
                que no son transmitidas en los canales de televisión tradicionales.
                Compartimos con nuestra comunidad la mayor cantidad de episodios y series
                que se estrenan cada temporada, ofreciendo contenido de alta calidad en
                formato MKV.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Innovación Constante</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p>
                Conocemos nuestras limitaciones y por ello trabajamos constantemente en
                mejorar la calidad del servicio. Mes a mes implementamos nuevas
                funcionalidades y optimizaciones para brindarte la mejor experiencia
                posible al disfrutar de tu anime favorito.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Calidad y Experiencia</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Cada mes estamos implementando mejoras significativas y hacemos todo lo
              posible por evolucionar día a día. Nuestra plataforma está diseñada para
              ofrecer una navegación fluida y sin interrupciones, permitiéndote disfrutar
              de tus series favoritas sin complicaciones.
            </p>
            <p>
              Además de ser una plataforma para visualizar episodios de anime en alta
              calidad, aspiramos a convertirnos en un referente para compartir y celebrar
              la cultura asiática. En un futuro cercano, tenemos preparadas actualizaciones
              que transformarán tu experiencia y te sorprenderán gratamente.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-primary/5">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Nuestra Comunidad</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Estamos convencidos de que somos una de las mejores plataformas de anime
              en línea en español, y todo esto es gracias al apoyo incondicional de
              nuestra comunidad. Cada visita, cada comentario y cada recomendación nos
              motiva a seguir mejorando.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <Heart className="h-5 w-5 text-red-500 fill-red-500" />
              <span className="font-semibold">
                Gracias por ser parte de AnimeMKV
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">¿Por qué MKV?</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p>
              El término MKV hace referencia al formato Matroska Video, un contenedor
              multimedia de código abierto que se ha convertido en el estándar para
              distribución de contenido de alta calidad. Este formato nos permite
              ofrecerte episodios con la mejor calidad de video y audio, múltiples
              pistas de subtítulos, y un tamaño de archivo optimizado. MKV representa
              nuestro compromiso con la excelencia técnica y la mejor experiencia de
              visualización para todos nuestros usuarios.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
