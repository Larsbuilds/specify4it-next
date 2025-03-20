"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animations"
import { useCallback } from "react"
import type { UseEmblaCarouselType } from "embla-carousel-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "This platform has transformed how we manage our business. The efficiency gains are remarkable.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateCorp",
    content: "The best solution we&apos;ve found in the market. Highly recommended for any growing business.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, GrowthCo",
    content: "Incredible features and excellent support. It&apos;s exactly what we needed to scale our operations.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Founder, StartupX",
    content: "The user experience is outstanding. It&apos;s intuitive and powerful at the same time.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10" />
      <div className="container px-4 md:px-6">
        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            What Our Clients Say
          </h2>
          <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about their experience.
          </p>
        </motion.div>
        <div className="relative mx-auto max-w-7xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              containScroll: "trimSnaps",
              dragFree: false,
            }}
            className="w-full"
            setApi={(api: UseEmblaCarouselType[1]) => {
              if (!api) return;

              // Auto-play functionality
              let autoplayInterval: NodeJS.Timeout;
              const startAutoplay = () => {
                autoplayInterval = setInterval(() => {
                  if (api.canScrollNext()) {
                    api.scrollNext();
                  }
                }, 5000); // Change slide every 5 seconds
              };
              const stopAutoplay = () => {
                if (autoplayInterval) {
                  clearInterval(autoplayInterval);
                }
              };

              // Start autoplay when the carousel is mounted
              startAutoplay();

              // Stop autoplay when the user interacts with the carousel
              api.on("pointerDown", stopAutoplay);
              api.on("pointerUp", startAutoplay);
              api.on("settle", startAutoplay);

              // Cleanup on unmount
              return () => {
                stopAutoplay();
                api.off("pointerDown", stopAutoplay);
                api.off("pointerUp", startAutoplay);
                api.off("settle", startAutoplay);
              };
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                  aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col justify-between min-h-[250px] p-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-5 h-5 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">
                            &ldquo;{testimonial.content}&rdquo;
                          </p>
                        </div>
                        <div className="mt-6">
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4 md:mt-0 md:absolute md:inset-y-0 md:left-0 md:right-0 md:justify-between md:items-center md:pointer-events-none">
              <CarouselPrevious className="relative md:absolute md:left-0 md:translate-x-[-3rem] pointer-events-auto" />
              <CarouselNext className="relative md:absolute md:right-0 md:translate-x-[3rem] pointer-events-auto" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
} 