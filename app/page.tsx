import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ImageWithFallback } from '@/components/image-with-fallback'

const candidates = [
  {
    name: 'Roberto G.',
    role: 'Senior AI Developer',
    country: 'Argentina',
    salary: '$8000/month',
  },
  {
    name: 'Sebastian B.',
    role: 'RITE AWS Developer',
    country: 'Peru',
    salary: '$2000/month',
  },
  {
    name: 'Nathalia G.',
    role: 'Junior Media Buyer',
    country: 'Brazil',
    salary: '$2000/month',
  },
]

const testimonials = [
  {
    name: 'Meesh & Dee',
    role: 'Founders',
    text: 'Working with Tethered was a fantastic experience. They guided us through every step of the hiring process and helped us find Tomas, our amazing full-stack developer. He\'s been with us for the past four months and has become an integral part of our team—super reliable, talented, and a true joy to work with.',
  },
  {
    name: 'Trey I.',
    role: 'CEO',
    text: 'Within the first two candidates, I found one guy who was completely perfect for the role. I didn\'t even end up interviewing the second candidate. I just hired the first guy because I knew there wasn\'t going to be anyone else with the exact experience and additional skills I was interested in.',
  },
  {
    name: 'Troy M.',
    role: 'Founder',
    text: 'I can\'t speak highly enough about Tethered Recruiting. As a small business owner, finding the right talent is crucial. They not only understood our specific staffing needs but also delivered exceptional candidates promptly.',
  },
]

const steps = [
  {
    title: 'Target',
    description: 'Define your ideal candidate profile with our team. We understand your needs, company culture, and specific requirements to create the perfect hiring blueprint.',
  },
  {
    title: 'Recruit',
    description: 'Our expert recruiters search globally, reaching out to top talent across every major platform. We screen thousands of candidates so you don\'t have to.',
  },
  {
    title: 'Validate',
    description: 'Every candidate undergoes rigorous skill assessments, multiple interview rounds, and reference checks. Only the top 0.2% make it to you.',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md border-b border-orange-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <a href="#" className="text-2xl font-bold text-orange-600">
                TETHERED
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-slate-700 hover:text-orange-600 transition-colors text-sm font-medium">Company</a>
              <a href="#" className="text-slate-700 hover:text-orange-600 transition-colors text-sm font-medium">Technology</a>
              <a href="#" className="text-slate-700 hover:text-orange-600 transition-colors text-sm font-medium">Talent</a>
              <a href="#" className="text-slate-700 hover:text-orange-600 transition-colors text-sm font-medium">FAQs</a>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white border-0 shadow-lg">
                Get Started
              </Button>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" className="text-slate-900">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
            {/* Left Side - Text Content */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                  Connect with world-class talent
                </h1>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg font-light">
                  Scale your team with top global professionals. We connect you with the best talent, anywhere in the world.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-5 border-0 shadow-lg text-base">
                  Get Started
                </Button>
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-50 border-2 border-slate-300 px-6 py-5 shadow-md text-base">
                  Learn More
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-2">
                <div>
                  <div className="text-2xl font-bold text-slate-900">80%</div>
                  <div className="text-xs text-slate-500 font-medium">Cost Savings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">14 Days</div>
                  <div className="text-xs text-slate-500 font-medium">Avg. Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">99.7%</div>
                  <div className="text-xs text-slate-500 font-medium">Vetted</div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Square Pixel Art Image */}
            <div className="relative w-full aspect-square flex items-center justify-center">
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl border border-slate-200">
                <img 
                  src="/hero-background.jpg" 
                  alt="Creative workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Building the Future of{' '}
              <span className="text-orange-500">
                Remote Work
              </span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Our platform connects innovative companies with exceptional talent from around the globe. Through advanced matching, cultural alignment, and rigorous vetting, we&apos;re making world-class teams accessible to everyone.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg shadow-lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Process */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-orange-50/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="border-2 border-orange-200 bg-white hover:shadow-xl transition-all hover:border-orange-400">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-3xl font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Talent Showcase */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Talent
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Real professionals from our global network, ready to join your team.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {candidates.map((candidate, index) => (
              <Card key={index} className="border-2 border-orange-100 bg-orange-50/30 hover:shadow-xl transition-all hover:border-orange-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-orange-200">
                      <ImageWithFallback
                        src={`https://images.unsplash.com/photo-${1500000000000 + index}?w=200&h=200&fit=crop&crop=faces`}
                        alt={candidate.name}
                        className="w-full h-full object-cover"
                        name={candidate.name}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{candidate.name}</h3>
                      <p className="text-sm text-slate-600 mb-2">{candidate.role}</p>
                      <p className="text-xs text-slate-500">{candidate.country}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-orange-100">
                    <p className="text-2xl font-bold text-orange-600">
                      {candidate.salary}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-orange-50/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
            Trusted by Leaders
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-yellow-200 bg-white hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-orange-200 flex-shrink-0">
                      <ImageWithFallback
                        src={`https://images.unsplash.com/photo-${1470000000000 + index}?w=200&h=200&fit=crop&crop=faces`}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        name={testimonial.name}
                      />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{testimonial.name}</p>
                      <p className="text-sm text-slate-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed italic">&quot;{testimonial.text}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Global Team?
          </h2>
          <p className="text-xl text-orange-50 mb-10 max-w-2xl mx-auto">
            Join hundreds of companies scaling faster with world-class remote talent.
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-10 py-7 shadow-2xl font-bold">
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-wider text-orange-600 font-semibold mb-4">GET THE DATA BEFORE YOU HIRE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get Our Free Global Salary Guide</h2>
            <p className="text-slate-600 mb-6">What&apos;s Inside:</p>
            <ul className="space-y-3 text-slate-700 mb-8 text-left max-w-md mx-auto">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                Salary Benchmarks by Role & Country
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                Negotiation Tips & Cost-Saving Strategies
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                Payroll & Compliance Insights
              </li>
            </ul>
          </div>
          <Card className="border-2 border-orange-200 bg-orange-50/30 shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-4">
                <Input type="email" placeholder="Enter your email" className="w-full h-12 bg-white border-2 border-orange-200 focus:border-orange-400 text-slate-900" />
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 font-bold shadow-lg">
                  Get Free Guide
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4 text-orange-400">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-orange-400">About</a></li>
                <li><a href="#" className="hover:text-orange-400">Careers</a></li>
                <li><a href="#" className="hover:text-orange-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-orange-400">Technology</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-orange-400">How It Works</a></li>
                <li><a href="#" className="hover:text-orange-400">Platform</a></li>
                <li><a href="#" className="hover:text-orange-400">Features</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-orange-400">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-orange-400">FAQs</a></li>
                <li><a href="#" className="hover:text-orange-400">Salary Guide</a></li>
                <li><a href="#" className="hover:text-orange-400">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-orange-400">Get in touch</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="mailto:hire@tethered.so" className="hover:text-orange-400">hire@tethered.so</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400 mb-4 md:mb-0">
              © 2025 Tethered Technology Corporation
            </p>
            <p className="text-sm text-slate-400">
              Connecting talent, anywhere in the world.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
