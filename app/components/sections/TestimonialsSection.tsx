"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content:
      "The team at this company is exceptional. They delivered beyond our expectations and helped us achieve our goals.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateCorp",
    content:
      "Working with them has been a game-changer for our business. Their expertise and dedication are unmatched.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthCo",
    content:
      "The results we've seen since partnering with them have been incredible. Highly recommended!",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "CTO, FutureTech",
    content:
      "Their innovative solutions and professional approach have helped us stay ahead of the competition.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 md:text-xl dark:text-gray-400 max-w-[600px] mx-auto">
            Don't just take our word for it. Here's what some of our satisfied clients have to say about
            working with us.
          </p>
        </div>
        <div className="relative px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 mb-4 flex-grow">
                        {testimonial.content}
                      </p>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
} 