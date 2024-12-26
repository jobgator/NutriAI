import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Brain, Utensils, Calendar, Leaf } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Utensils className="h-6 w-6 mr-2" />
          <span className="font-bold text-lg">NutriAI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                alt="AI-generated meal plan"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                height="550"
                src="/placeholder.svg?height=550&width=550&text=AI+Meal+Plan"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    AI-Powered Meal Planning Made Easy
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Say goodbye to meal planning stress. NutriAI creates personalized, nutritious meal plans tailored to your preferences and dietary needs.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/sign-in">
                    <Button size="lg">Sign In</Button>
                  </Link>
                  <Link href="/sign-up">
                    <Button size="lg" variant="outline">Sign Up</Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100" id="features">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Brain className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">AI-Powered Recommendations</h3>
                <p className="text-gray-500">Our advanced AI analyzes your preferences and nutritional needs to create perfect meal plans.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Calendar className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Weekly Meal Planning</h3>
                <p className="text-gray-500">Get a full week's worth of meals planned out, saving you time and reducing food waste.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Leaf className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Dietary Customization</h3>
                <p className="text-gray-500">Whether you're vegan, keto, or have allergies, our app adapts to your specific dietary needs.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="how-it-works">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Set Your Preferences</h3>
                <p className="text-gray-500">Tell us about your dietary needs, allergies, and food preferences.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">AI Creates Your Plan</h3>
                <p className="text-gray-500">Our AI generates a personalized meal plan based on your inputs.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Enjoy Your Meals</h3>
                <p className="text-gray-500">Follow your plan and enjoy delicious, nutritious meals all week long.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100" id="pricing">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Simple Pricing</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Free</h3>
                <p className="text-4xl font-bold mb-4">$0<span className="text-base font-normal">/month</span></p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    1 meal plan per week
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Basic customization
                  </li>
                </ul>
                <Button>Get Started</Button>
              </div>
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg border-2 border-primary">
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <p className="text-4xl font-bold mb-4">$9.99<span className="text-base font-normal">/month</span></p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Unlimited meal plans
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Advanced customization
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Grocery list generation
                  </li>
                </ul>
                <Button>Subscribe Now</Button>
              </div>
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Family</h3>
                <p className="text-4xl font-bold mb-4">$19.99<span className="text-base font-normal">/month</span></p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    All Pro features
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Up to 6 family members
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Family meal coordination
                  </li>
                </ul>
                <Button>Subscribe Now</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Start Your AI Meal Planning Journey Today</h2>
              <p className="max-w-[600px] text-primary-foreground md:text-xl">
                Join thousands of happy users who have transformed their meal planning experience with NutriAI.
              </p>
              <Button size="lg" variant="secondary">
                Get Started for Free
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 NutriAI. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

