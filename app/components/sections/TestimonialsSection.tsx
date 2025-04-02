import { getTranslations } from 'next-intl/server'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { AnimatedSection } from './AnimatedSection'

export async function TestimonialsSection() {
  const t = await getTranslations('Testimonials')

  // Get testimonials array from translation
  const testimonials = [
    {
      content: t('testimonial1.content'),
      name: t('testimonial1.name'),
      role: t('testimonial1.role')
    },
    {
      content: t('testimonial2.content'),
      name: t('testimonial2.name'),
      role: t('testimonial2.role')
    },
    {
      content: t('testimonial3.content'),
      name: t('testimonial3.name'),
      role: t('testimonial3.role')
    }
  ]

  return (
    <AnimatedSection>
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10" />
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t('title')}
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              {t('subtitle')}
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-4">
                        <p className="text-gray-500 dark:text-gray-400">
                          "{testimonial.content}"
                        </p>
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-gray-500">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="relative" />
              <CarouselNext className="relative" />
            </div>
          </Carousel>
        </div>
      </section>
    </AnimatedSection>
  )
}