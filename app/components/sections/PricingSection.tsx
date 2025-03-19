import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Hobby",
    description: "Perfect for side projects and learning",
    price: "Free",
    features: [
      "Up to 3 projects",
      "Basic components",
      "Community support",
      "Dark mode",
      "Basic analytics",
    ],
  },
  {
    name: "Pro",
    description: "For professional developers and small teams",
    price: "$19/mo",
    features: [
      "Unlimited projects",
      "Advanced components",
      "Priority support",
      "Custom themes",
      "Advanced analytics",
      "Team collaboration",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large teams and organizations",
    price: "Custom",
    features: [
      "Everything in Pro",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
      "Advanced security",
      "Training sessions",
    ],
  },
]

export function PricingSection() {
  return (
    <section className="container py-20">
      <div className="mx-auto max-w-[980px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
            Simple, transparent pricing
            <span className="block text-primary">for everyone</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={
                plan.popular
                  ? "relative border-primary shadow-lg"
                  : "border-border"
              }
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </span>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{plan.price}</div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 