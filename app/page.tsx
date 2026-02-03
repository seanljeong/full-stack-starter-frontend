import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const candidates = [
  {
    name: 'Roberto G.',
    role: 'Senior AI Developer',
    country: 'Argentina',
    salary: '$8000/month',
    resume: [
      'Senior AI & Automation Technology Leader',
      '25+ years technology executive with proven ability to architect AI-driven solutions',
      'Full-Stack AI Application Developer',
      'Enterprise AI Implementation Expert',
    ],
  },
  {
    name: 'Sebastian B.',
    role: 'RITE AWS Developer',
    country: 'Peru',
    salary: '$2000/month',
    resume: [
      'AWS Certified Data Engineer',
      'Data Lakehouse & Pipeline Specialist',
      'Python & Cloud Analytics Expert',
      'Multi-Platform Data Architecture Developer',
    ],
  },
  {
    name: 'Nathalia G.',
    role: 'Junior Media Buyer',
    country: 'Brazil',
    salary: '$2000/month',
    resume: [
      'Multi-Platform Media Buyer',
      'Lead Generation Specialist',
      'Data-Driven Campaign Optimizer',
      'Sales & Customer Acquisition Expert',
    ],
  },
  {
    name: 'Rodrigo V.',
    role: 'Lead Engineer',
    country: 'Uruguay',
    salary: '$5000/month',
    resume: [
      'Engineering Leadership Expert',
      'DevOps & Infrastructure Specialist',
      'Full-Stack Development Professional',
      'Startup Growth Contributor',
    ],
  },
  {
    name: 'Leon R.',
    role: 'Social Media Manager',
    country: 'The Bahamas',
    salary: '$3000/month',
    resume: [
      'Multi-Platform Content Creator & Growth Expert',
      'Top-Performing Social Media Manager',
      'Brand Partnership & Collaboration Specialist',
      'Full-Service Video Production Manager',
    ],
  },
  {
    name: 'Bruna C.',
    role: 'Web Designer',
    country: 'Brazil',
    salary: '$1800/month',
    resume: [
      'High-Conversion Web Designer',
      'Full-Stack Design & Development Professional',
      'Multi-Platform Design Expert',
      'Remote-Ready Agile Collaborator',
    ],
  },
  {
    name: 'Naliel R.',
    role: 'Project Manager',
    country: 'Chile',
    salary: '$2000/month',
    resume: [
      'High-Performance Project Manager',
      'Executive Support & Operations Leader',
      'Process Improvement Specialist',
      'Multi-Platform Project Coordination Expert',
    ],
  },
  {
    name: 'Erick S.',
    role: 'Marketing Account Manager',
    country: 'Honduras',
    salary: '$2500/month',
    resume: [
      'Marketing Account Manager',
      'Campaign Strategy & Execution',
      'Client Relationship Management',
      'Performance Analytics Expert',
    ],
  },
  {
    name: 'Vinicius A.',
    role: 'Media Buyer',
    country: 'Brazil',
    salary: '$2200/month',
    resume: [
      'Media Buying Specialist',
      'Campaign Optimization Expert',
      'ROI-Focused Strategist',
      'Multi-Platform Advertising Professional',
    ],
  },
  {
    name: 'Givenia T.',
    role: 'Legal Manager',
    country: 'Indonesia',
    salary: '$900/month',
    resume: [
      'Legal Compliance Expert',
      'Contract Management Specialist',
      'Regulatory Affairs Professional',
      'Corporate Legal Advisor',
    ],
  },
  {
    name: 'Valeria R.',
    role: 'Lifecycle Account Manager',
    country: 'Ecuador',
    salary: '$2500/month',
    resume: [
      'Customer Lifecycle Management',
      'Account Growth Strategist',
      'Retention & Upsell Expert',
      'Client Success Professional',
    ],
  },
  {
    name: 'Tyron M.',
    role: 'YouTube Host',
    country: 'South Africa',
    salary: '$1000/month',
    resume: [
      'Content Creation Expert',
      'Video Production Specialist',
      'Audience Engagement Professional',
      'Digital Media Personality',
    ],
  },
  {
    name: 'Paulo S.',
    role: 'Creative Producer/Strategist',
    country: 'Brazil',
    salary: '$2500/month',
    resume: [
      'Creative Strategy Expert',
      'Content Production Specialist',
      'Brand Development Professional',
      'Multi-Media Creative Director',
    ],
  },
  {
    name: 'Jonathan M.',
    role: 'Web Designer',
    country: 'Indonesia',
    salary: '$1500/month',
    resume: [
      'UI/UX Design Specialist',
      'Responsive Web Design Expert',
      'Frontend Development Professional',
      'Design System Architect',
    ],
  },
  {
    name: 'Patricia W.',
    role: 'Executive Assistant',
    country: 'Indonesia',
    salary: '$950/month',
    resume: [
      'Executive Support Specialist',
      'Administrative Excellence',
      'Calendar & Travel Management',
      'Communication Coordinator',
    ],
  },
]

const testimonials = [
  {
    name: 'Andrew B.',
    role: 'Co Founder',
    company: 'Prime Presence',
    text: 'Tethered has been amazing for us. They help us find the quality talent needed to grow your company and have that customer success. So, if you\'re looking to grow your agency, get better quality talent, and have a seamless recruiting process, we all know how hard it is to find quality talent. Go to Tethered and get a call with them. They will ensure you have the best experience and invest in your success.',
  },
  {
    name: 'Hieu V.',
    role: 'Founder',
    company: 'Jade Jewelers',
    text: 'We used Tethered to find us an amazing video editor so that we could 5X our social media content. They found us a team member that I couldn\'t imagine not having anymore, all while saving us significantly on payroll costs. This is a business game-changer!',
  },
  {
    name: 'Marley G.',
    role: 'CEO',
    company: 'Smile or Die',
    text: 'Working with Tethered has completely changed my creative agency. We have been able to grow and scale super rapidly. Thanks to all of the amazing talent we\'ve been able to bring to the team through Tethered. Overall great talents, outstanding creatives, and at a completely unbeatable price.',
  },
  {
    name: 'Hayoung P.',
    role: 'CEO',
    company: 'Hyp',
    text: 'I can\'t say enough positive things about Tethered! The costs are a fraction of what we would be paying if we hired a support engineer in the States—incredible quality, native fluent English, and honestly overqualified for the role.',
  },
  {
    name: 'Janell O.',
    role: 'Founder',
    company: 'belle vie medical',
    text: 'For the past few years, I struggled to find a reliable editor with the proper skill set to support my business. Tethered connected me with a video editor that has exceeded my expectations. I couldn\'t be happier!',
  },
]

const steps = [
  {
    number: '1',
    title: 'Tell Us What You Need',
    description: 'Book a call and share the role(s) you\'re hiring for. If you\'re not sure, we\'ll brainstorm what roles would benefit your business at its current stage. Next, we\'ll define the right country, responsibilities, budget, and requirements. This becomes the blueprint for your ideal hire.\n\nOur clients love our personalized approach to getting started, and we\'re here to make the process as smooth as possible for you.',
  },
  {
    number: '2',
    title: 'We Find Your Candidates',
    description: 'A senior recruiter leads the search, directly headhunting top performers, while a junior recruiter runs sponsored job posts across every major global platform.\n\nFrom there, we screen up to 1,000 applicants per role. Each candidate goes through skill assessments, multiple interview rounds, and reference checks. By the time they reach you, they\'ve already cleared every filter.\n\nIn about 14 business days, you\'ll receive 2 to 3 finalists, representing the top ~0.2% of applicants, each rigorously vetted for both skill and cultural fit.',
  },
  {
    number: '3',
    title: 'You Hire. We Handle the Rest',
    description: 'We guide you through final interviews, help negotiate compensation, and support onboarding. After that, it\'s a clean handoff. No payroll markups, no management fees, no hidden layers.\n\nOn average, our clients save more than $10,000 per year compared to traditional recruiting agencies, while building stronger teams with world-class talent.',
  },
  {
    number: '4',
    title: 'Continued Support',
    description: 'We\'ll regularly check in to see how your talent is performing and if there\'s anything we can help assist you with. Our three month guarantee means we\'ll replace anyone if they happen to not work out in that timeframe. This is rare, and only happens to about 1.5% of hires.\n\nOur goal is to ensure everything runs smoothly after your talent is onboarded.',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-2xl font-bold text-black">
                Tethered
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-black">About Us</a>
              <a href="#" className="text-gray-700 hover:text-black">Success Stories</a>
              <div className="relative group">
                <button className="text-gray-700 hover:text-black flex items-center">
                  Resources
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-black flex items-center">
                  Industry
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <a href="#" className="text-gray-700 hover:text-black">For Talent</a>
              <Button className="bg-black text-white hover:bg-gray-800">
                Book a Call
              </Button>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-sm text-gray-600 mb-6 font-medium">Trusted by 250+ Businesses Worldwide</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8 leading-tight">
            Hire world-class overseas talent and reduce payroll costs by up to 80%
          </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Our rigorous vetting process filters out 99.7% of candidates so you skip the guesswork, hire faster, and cut payroll costs.
          </p>
          <Button size="lg" className="bg-black text-white hover:bg-gray-800 text-lg px-10 py-7 rounded-md">
            Book a Call
          </Button>
        </div>
      </section>

      {/* Candidate Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {candidates.map((candidate, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow overflow-hidden">
                <CardContent className="p-5">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-black mb-1">{candidate.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{candidate.role}, {candidate.country}</p>
                    <p className="text-2xl font-bold text-black">{candidate.salary}</p>
                  </div>
                  <div className="space-y-2 pt-3 border-t border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Resume Brief</p>
                    <ul className="space-y-1.5 text-sm text-gray-700">
                      {candidate.resume.map((item, i) => (
                        <li key={i} className="text-sm leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed text-sm">{testimonial.text}</p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="font-semibold text-black text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-600 mt-1">{testimonial.role}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-16">Getting Started Is Easy</h2>
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-8">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-semibold text-black mb-5">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Get started today and hire the best global talent
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Build a high-performing team without the traditional hiring headaches. We'll connect you with top talent from around the world so you can grow faster and focus on what matters most.
          </p>
          <Button size="lg" className="bg-black text-white hover:bg-gray-800 text-lg px-10 py-7 rounded-md">
            Find The Best Fit
          </Button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">Get the data before you hire</h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-black mb-6">Get Our Free Global Salary Guide</h3>
            <p className="text-gray-700 mb-3 font-medium">What's Inside:</p>
            <ul className="text-gray-700 space-y-1.5 mb-8 text-left max-w-md mx-auto">
              <li>• Salary Benchmarks by Role & Country</li>
              <li>• Negotiation Tips & Cost-Saving Strategies</li>
              <li>• Payroll & Compliance Insights</li>
            </ul>
          </div>
          <Card className="bg-white border-gray-200">
            <CardContent className="p-8">
              <form className="space-y-4">
                <Input type="email" placeholder="Enter your email" className="w-full h-12 text-base" />
                <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 h-12 text-base">
                  Get Free Guide
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-black mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">About Us</a></li>
                <li><a href="#" className="hover:text-black">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">Salary Guide 2025</a></li>
                <li><a href="#" className="hover:text-black">Remote Talent Onboarding Playbook</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Industry</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">Creative</a></li>
                <li><a href="#" className="hover:text-black">Service-based</a></li>
                <li><a href="#" className="hover:text-black">Real Estate</a></li>
                <li><a href="#" className="hover:text-black">Accounting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">For Talent</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">Apply Now</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              Copyright © 2025 <strong>Tethered Recruiting LLC.</strong> | All Rights Reserved
            </p>
            <div className="flex items-center space-x-4">
              <p className="text-sm text-gray-600">Follow Us</p>
              <a href="mailto:hire@tethered.so" className="text-sm text-gray-600 hover:text-black">
                hire@tethered.so
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
