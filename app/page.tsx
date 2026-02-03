import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const candidates = [
  {
    name: 'Roberto G.',
    role: 'Senior AI Developer',
    country: 'Argentina',
    salary: '$8000/month',
    imageBg: 'bg-gradient-to-br from-purple-500 to-blue-600',
  },
  {
    name: 'Sebastian B.',
    role: 'RITE AWS Developer',
    country: 'Peru',
    salary: '$2000/month',
    imageBg: 'bg-gradient-to-br from-amber-700 to-amber-900',
  },
  {
    name: 'Nathalia G.',
    role: 'Junior Media Buyer',
    country: 'Brazil',
    salary: '$2000/month',
    imageBg: 'bg-gradient-to-br from-green-600 to-green-800',
  },
  {
    name: 'Rodrigo V.',
    role: 'Lead Engineer',
    country: 'Uruguay',
    salary: '$5000/month',
    imageBg: 'bg-gradient-to-br from-red-600 to-red-800',
  },
  {
    name: 'Leon R.',
    role: 'Social Media Manager',
    country: 'The Bahamas',
    salary: '$3000/month',
    imageBg: 'bg-gradient-to-br from-blue-600 to-blue-800',
  },
  {
    name: 'Bruna C.',
    role: 'Web Designer',
    country: 'Brazil',
    salary: '$1800/month',
    imageBg: 'bg-gradient-to-br from-purple-600 to-pink-600',
  },
  {
    name: 'Naliel R.',
    role: 'Project Manager',
    country: 'Chile',
    salary: '$2000/month',
    imageBg: 'bg-gradient-to-br from-indigo-600 to-indigo-800',
  },
  {
    name: 'Erick S.',
    role: 'Marketing Account Manager',
    country: 'Honduras',
    salary: '$2500/month',
    imageBg: 'bg-gradient-to-br from-teal-600 to-teal-800',
  },
  {
    name: 'Vinicius A.',
    role: 'Media Buyer',
    country: 'Brazil',
    salary: '$2200/month',
    imageBg: 'bg-gradient-to-br from-orange-600 to-orange-800',
  },
  {
    name: 'Givenia T.',
    role: 'Legal Manager',
    country: 'Indonesia',
    salary: '$900/month',
    imageBg: 'bg-gradient-to-br from-cyan-600 to-cyan-800',
  },
  {
    name: 'Valeria R.',
    role: 'Lifecycle Account Manager',
    country: 'Ecuador',
    salary: '$2500/month',
    imageBg: 'bg-gradient-to-br from-violet-600 to-violet-800',
  },
  {
    name: 'Tyron M.',
    role: 'YouTube Host',
    country: 'South Africa',
    salary: '$1000/month',
    imageBg: 'bg-gradient-to-br from-rose-600 to-rose-800',
  },
  {
    name: 'Paulo S.',
    role: 'Creative Producer/Strategist',
    country: 'Brazil',
    salary: '$2500/month',
    imageBg: 'bg-gradient-to-br from-emerald-600 to-emerald-800',
  },
  {
    name: 'Jonathan M.',
    role: 'Web Designer',
    country: 'Indonesia',
    salary: '$1500/month',
    imageBg: 'bg-gradient-to-br from-sky-600 to-sky-800',
  },
  {
    name: 'Patricia W.',
    role: 'Executive Assistant',
    country: 'Indonesia',
    salary: '$950/month',
    imageBg: 'bg-gradient-to-br from-fuchsia-600 to-fuchsia-800',
  },
]

const testimonials = [
  {
    name: 'Meesh & Dee',
    role: 'Founders',
    company: '',
    text: 'Working with Tethered was a fantastic experience. They guided us through every step of the hiring process and helped us find Tomas, our amazing full-stack developer. He\'s been with us for the past four months and has become an integral part of our team—super reliable, talented, and a true joy to work with. We\'re so grateful.',
    bgColor: 'bg-gradient-to-br from-green-500 to-emerald-600',
  },
  {
    name: 'Trey I.',
    role: 'CEO',
    company: '',
    text: 'Within the first two candidates, I found one guy who was completely perfect for the role. I didn\'t even end up interviewing the second candidate. I just hired the first guy because I knew there wasn\'t going to be anyone else with the exact experience and additional skills I was interested in. I guess I got a little lucky, but we found a candidate.',
    bgColor: 'bg-gray-900',
  },
  {
    name: 'Troy M.',
    role: 'Founder',
    company: '',
    text: 'I can\'t speak highly enough about Tethered Recruiting. As a small business owner, finding the right talent is crucial. They not only understood our specific staffing needs but also delivered exceptional candidates promptly. Their professionalism and dedication made the entire hiring process seamless - we found a perfect fit for our team.',
    bgColor: 'bg-gray-900',
  },
  {
    name: 'Kim R.',
    role: 'Director',
    company: '',
    text: 'As a leading subcontractor in our field, finding top talent is crucial. Tethered has been an invaluable asset in our hiring process. From our initial contact to our first successful hire, their team was professional, efficient, and genuinely invested in our needs. We\'ve continued to partner with Tethered for our overseas hiring.',
    bgColor: 'bg-gray-900',
  },
]

const companies = [
  'startupwise',
  'motif DIGITAL',
  'REACH MEDIA',
  'doe',
  'PRIME PRESENCE',
  'JADE JEWELERS',
  'SKINPASS',
  'OffCourt',
  'MERCHDROP',
]

const steps = [
  {
    number: '1',
    title: 'Tell Us What You Need',
    description: 'Book a call and share the role(s) you\'re hiring for. If you\'re not sure, we\'ll brainstorm what roles would benefit your business at its current stage. Next, we\'ll define the right country, responsibilities, budget, and requirements. This becomes the blueprint for your ideal hire.\n\nOur clients love our personalized approach to getting started, and we\'re here to make the process as smooth as possible for you.',
    visual: 'folders',
  },
  {
    number: '2',
    title: 'We Find Your Candidates',
    description: 'A senior recruiter leads the search, directly headhunting top performers, while a junior recruiter runs sponsored job posts across every major global platform.\n\nFrom there, we screen up to 1,000 applicants per role. Each candidate goes through skill assessments, multiple interview rounds, and reference checks. By the time they reach you, they\'ve already cleared every filter.\n\nIn about 14 business days, you\'ll receive 2 to 3 finalists, representing the top ~0.2% of applicants, each rigorously vetted for both skill and cultural fit.',
    visual: 'network',
  },
  {
    number: '3',
    title: 'You Hire. We Handle the Rest',
    description: 'We guide you through final interviews, help negotiate compensation, and support onboarding. After that, it\'s a clean handoff. No payroll markups, no management fees, no hidden layers.\n\nOn average, our clients save more than $10,000 per year compared to traditional recruiting agencies, while building stronger teams with world-class talent.',
    visual: 'profile',
  },
  {
    number: '4',
    title: 'Continued Support',
    description: 'We\'ll regularly check in to see how your talent is performing and if there\'s anything we can help assist you with. Our three month guarantee means we\'ll replace anyone if they happen to not work out in that timeframe. This is rare, and only happens to about 1.5% of hires.\n\nOur goal is to ensure everything runs smoothly after your talent is onboarded.',
    visual: 'chat',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 sticky top-0 bg-black z-50 backdrop-blur-sm bg-opacity-95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-2xl font-normal text-white lowercase">
                tethered
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-gray-300 text-sm">About Us</a>
              <a href="#" className="text-white hover:text-gray-300 text-sm">Success Stories</a>
              <div className="relative group">
                <button className="text-white hover:text-gray-300 flex items-center text-sm">
                  Resources
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <div className="relative group">
                <button className="text-white hover:text-gray-300 flex items-center text-sm">
                  Industry
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <a href="#" className="text-white hover:text-gray-300 text-sm">For Talent</a>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white border-0">
                Book a Call
              </Button>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-2 mb-8">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-white text-sm">Trusted by 250+ Businesses Worldwide</p>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-5xl">
            Hire world-class overseas talent and reduce payroll costs by{' '}
            <span className="text-purple-500">up to 80%</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl leading-relaxed">
            Our rigorous vetting process filters out 99.7% of candidates so you skip the guesswork, hire faster, and cut payroll costs.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6 border-0">
            Book a Call
          </Button>
        </div>
      </section>

      {/* Candidate Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
            {candidates.map((candidate, index) => (
              <div key={index} className="relative group">
                <div className={`${candidate.imageBg} rounded-lg aspect-square flex items-center justify-center overflow-hidden relative`}>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-white text-2xl font-bold">
                      {candidate.name.split(' ')[0][0]}{candidate.name.split(' ')[1]?.[0] || ''}
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-white text-sm font-medium">{candidate.role}, {candidate.country}</p>
                  <Button className="bg-green-600 hover:bg-green-700 text-white text-xs mt-2 w-full border-0">
                    ${candidate.salary.split('/')[0].replace('$', '').replace(',', '')}/month
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-white text-sm">Actual Tethered Candidates</p>
        </div>
      </section>

      {/* Company Logos */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {companies.map((company, index) => (
              <div key={index} className="text-white/60 text-sm font-medium hover:text-white transition-colors">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                The painful reality of hiring without Tethered
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-400 text-lg">Poor performance</p>
              <p className="text-white text-lg">Exaggerated resumes</p>
              <p className="text-white text-lg">Inflated costs</p>
              <p className="text-white text-lg">Low retention</p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tethered Helps You Cut Costs, Save Time, & Find{' '}
              <span className="text-purple-500 italic">Rockstar</span> Talent
            </h2>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Access our global talent pool</h3>
              <p className="text-gray-300 leading-relaxed">
                We recruit, vet, and interview talent from around the world so you don't have to. Our team handles the entire process, presenting you with only the best candidates.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Budget-friendly talent</h3>
              <p className="text-gray-300 leading-relaxed">
                Save an average of 83% on payroll costs by hiring overseas talent. We help you negotiate fair compensation that works for both you and your new team member.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Talent for Every Role</h3>
              <p className="text-gray-300 leading-relaxed">
                From executive assistants to C-suite hires, we can place talent for almost every job role. Whatever your needs, we have the right candidate for you.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Fast and Stress-free</h3>
              <p className="text-gray-300 leading-relaxed">
                We present you with top candidates within ~14 business days. No more sifting through hundreds of resumes or conducting endless interviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Hear From{' '}
            <span className="text-purple-400 italic">Operators</span>{' '}
            That Hired Our Talent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className={`${testimonial.bgColor} border-0 text-white`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center text-white font-bold flex-shrink-0">
                      {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                    </div>
                  </div>
                  <p className="text-white/90 leading-relaxed text-sm">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-4">
            Getting Started Is{' '}
            <span className="text-purple-500 italic">Easy</span>
          </h2>
          <div className="space-y-20 mt-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-8 -top-8 text-[200px] font-bold text-gray-800/30 select-none">
                  {step.number}
                </div>
                <div className="relative grid md:grid-cols-2 gap-12 items-center">
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line text-lg">{step.description}</p>
                  </div>
                  <div className="flex-1">
                    {step.visual === 'folders' && (
                      <div className="bg-gray-800 rounded-lg p-8 h-64 flex items-center justify-center">
                        <div className="space-y-4">
                          <div className="bg-purple-600/20 border border-purple-500/30 rounded p-4 w-48">
                            <div className="text-purple-400 text-sm font-medium">Job Requirements</div>
                          </div>
                          <div className="bg-purple-600/20 border border-purple-500/30 rounded p-4 w-48 ml-8">
                            <div className="text-purple-400 text-sm font-medium">Finance Associate</div>
                          </div>
                        </div>
                      </div>
                    )}
                    {step.visual === 'network' && (
                      <div className="bg-gray-800 rounded-lg p-8 h-64 flex items-center justify-center relative">
                        <div className="relative w-full h-full">
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-12 h-12 rounded-full bg-purple-500/30 border-2 border-purple-400 flex items-center justify-center"
                              style={{
                                left: `${20 + (i % 3) * 30}%`,
                                top: `${20 + Math.floor(i / 3) * 40}%`,
                              }}
                            >
                              <div className="w-8 h-8 rounded-full bg-white/20"></div>
                            </div>
                          ))}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-purple-500/50 flex items-center justify-center">
                              <div className="w-12 h-12 rounded-full bg-purple-400"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {step.visual === 'profile' && (
                      <div className="bg-gray-800 rounded-lg p-8 h-64 flex items-center justify-center">
                        <div className="relative">
                          <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                            <div className="w-24 h-24 rounded-lg bg-white/20"></div>
                          </div>
                          <div className="absolute -bottom-2 -right-2 w-16 h-20 bg-gray-700 rounded border border-gray-600 flex items-center justify-center">
                            <div className="w-12 h-16 bg-gray-600 rounded"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    {step.visual === 'chat' && (
                      <div className="bg-gray-800 rounded-lg p-8 h-64 flex items-center justify-center">
                        <div className="space-y-4 w-full">
                          <div className="bg-gray-700 rounded-lg p-4 w-3/4 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold">P</div>
                            <div className="flex-1 space-y-2">
                              <div className="h-2 bg-gray-600 rounded w-full"></div>
                              <div className="h-2 bg-gray-600 rounded w-2/3"></div>
                            </div>
                          </div>
                          <div className="bg-gray-700 rounded-lg p-4 w-3/4 ml-auto flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                              <div className="w-6 h-6 rounded-full bg-white/20"></div>
                            </div>
                            <div className="flex-1 space-y-2">
                              <div className="h-2 bg-gray-600 rounded w-full"></div>
                              <div className="h-2 bg-gray-600 rounded w-3/4"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get started today and hire the best global talent
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Build a high-performing team without the traditional hiring headaches. We'll connect you with top talent from around the world so you can grow faster and focus on what matters most.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-10 py-7 border-0">
            Find The Best Fit
          </Button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-white/60 text-sm uppercase tracking-wider mb-4">GET THE DATA BEFORE YOU HIRE</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get Our Free Global Salary Guide</h2>
              <p className="text-gray-300 mb-4 font-medium">What's Inside:</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Salary Benchmarks by Role & Country
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Negotiation Tips & Cost-Saving Strategies
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Payroll & Compliance Insights
                </li>
              </ul>
              <div className="mt-8 space-y-4">
                <Input type="email" placeholder="Enter your email" className="w-full h-12 bg-gray-900 border-gray-700 text-white placeholder:text-gray-500" />
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white h-12 text-base border-0 uppercase">
                  GET FREE SALARY GUIDE
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 relative transform rotate-2">
                <div className="bg-gray-900 rounded p-6">
                  <div className="text-gray-400 text-sm mb-2">tethered</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Salary Guide</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-800 rounded p-3 text-sm text-gray-300">VP Engineering</div>
                    <div className="bg-gray-800 rounded p-3 text-sm text-gray-300">Lead Project Manager</div>
                    <div className="bg-gray-800 rounded p-3 text-sm text-gray-300">Director of Sales</div>
                    <div className="bg-gray-800 rounded p-3 text-sm text-gray-300">Head of Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-purple-900/20 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <a href="#" className="text-xl font-normal text-gray-400 lowercase mb-4 block">tethered</a>
              <a href="mailto:hire@tethered.so" className="text-gray-400 text-sm block mb-2 hover:text-white">
                hire@tethered.so
              </a>
              <p className="text-gray-400 text-sm">
                Copyright © 2025 Tethered Recruiting LLC. | All Rights Reserved
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-white text-sm">Follow Us</p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <span className="text-white text-xs font-bold">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
