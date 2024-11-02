import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart, Globe, MessageSquare, Rocket, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const services = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Digital Marketing",
      description: "Strategic campaigns that drive growth and engagement across all digital channels."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "SEO Optimization",
      description: "Boost your search rankings and increase organic traffic with data-driven SEO."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Social Media",
      description: "Build and engage your community with compelling social media strategies."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Content Creation",
      description: "Engaging content that tells your story and connects with your audience."
    }
  ];

  const testimonials = [
    {
      quote: "Digital Helper transformed our online presence and doubled our leads within 6 months.",
      author: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "Their strategic approach to digital marketing helped us achieve record-breaking growth.",
      author: "Michael Chen",
      role: "Marketing Director, GrowthCo",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  return (
    <>
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070&h=1080"
            alt="Digital marketing team collaboration"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4">Leading Digital Agency</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              We help businesses grow through innovative digital marketing strategies
              and data-driven solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl font-bold mb-6">
                Results-Driven Digital Marketing Agency
              </h2>
              <p className="text-muted-foreground mb-8">
                We combine creativity with data-driven strategies to deliver
                exceptional results for our clients. Our team of experts is
                passionate about helping businesses succeed in the digital world.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-4xl font-bold text-primary mb-2">250+</h3>
                  <p className="text-muted-foreground">Clients Served</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-primary mb-2">95%</h3>
                  <p className="text-muted-foreground">Client Retention</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-primary mb-2">15+</h3>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-primary mb-2">40+</h3>
                  <p className="text-muted-foreground">Team Members</p>
                </div>
              </div>
            </div>
            <div className="relative h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=1000"
                alt="Digital marketing team"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8">
                <p className="text-lg mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl p-8 md:p-16 text-primary-foreground text-center">
            <Rocket className="h-16 w-16 mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital marketing goals
              and take your business to the next level.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}