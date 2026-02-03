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
  {
    name: 'Rodrigo V.',
    role: 'Lead Engineer',
    country: 'Uruguay',
    salary: '$5000/month',
  },
  {
    name: 'Leon R.',
    role: 'Social Media Manager',
    country: 'The Bahamas',
    salary: '$3000/month',
  },
  {
    name: 'Bruna C.',
    role: 'Web Designer',
    country: 'Brazil',
    salary: '$1800/month',
  },
  {
    name: 'Naliel R.',
    role: 'Project Manager',
    country: 'Chile',
    salary: '$2000/month',
  },
  {
    name: 'Erick S.',
    role: 'Marketing Account Manager',
    country: 'Honduras',
    salary: '$2500/month',
  },
  {
    name: 'Vinicius A.',
    role: 'Media Buyer',
    country: 'Brazil',
    salary: '$2200/month',
  },
  {
    name: 'Givenia T.',
    role: 'Legal Manager',
    country: 'Indonesia',
    salary: '$900/month',
  },
  {
    name: 'Valeria R.',
    role: 'Lifecycle Account Manager',
    country: 'Ecuador',
    salary: '$2500/month',
  },
  {
    name: 'Tyron M.',
    role: 'YouTube Host',
    country: 'South Africa',
    salary: '$1000/month',
  },
  {
    name: 'Paulo S.',
    role: 'Creative Producer/Strategist',
    country: 'Brazil',
    salary: '$2500/month',
  },
  {
    name: 'Jonathan M.',
    role: 'Web Designer',
    country: 'Indonesia',
    salary: '$1500/month',
  },
  {
    name: 'Patricia W.',
    role: 'Executive Assistant',
    country: 'Indonesia',
    salary: '$950/month',
  },
]

const testimonials = [
  {
    name: 'Meesh & Dee',
    role: 'Founders',
    company: '',
    text: 'Working with Tethered was a fantastic experience. They guided us through every step of the hiring process and helped us find Tomas, our amazing full-stack developer. He\'s been with us for the past four months and has become an integral part of our team—super reliable, talented, and a true joy to work with. We\'re so grateful.',
  },
  {
    name: 'Trey I.',
    role: 'CEO',
    company: '',
    text: 'Within the first two candidates, I found one guy who was completely perfect for the role. I didn\'t even end up interviewing the second candidate. I just hired the first guy because I knew there wasn\'t going to be anyone else with the exact experience and additional skills I was interested in. I guess I got a little lucky, but we found a candidate.',
  },
  {
    name: 'Troy M.',
    role: 'Founder',
    company: '',
    text: 'I can\'t speak highly enough about Tethered Recruiting. As a small business owner, finding the right talent is crucial. They not only understood our specific staffing needs but also delivered exceptional candidates promptly. Their professionalism and dedication made the entire hiring process seamless - we found a perfect fit for our team.',
  },
  {
    name: 'Kim R.',
    role: 'Director',
    company: '',
    text: 'As a leading subcontractor in our field, finding top talent is crucial. Tethered has been an invaluable asset in our hiring process. From our initial contact to our first successful hire, their team was professional, efficient, and genuinely invested in our needs. We\'ve continued to partner with Tethered for our overseas hiring.',
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <a href="#" className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Tethered
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-slate-700 hover:text-teal-600 transition-colors font-medium">About Us</a>
              <a href="#" className="text-slate-700 hover:text-teal-600 transition-colors font-medium">Success Stories</a>
              <div className="relative group">
                <button className="text-slate-700 hover:text-teal-600 flex items-center font-medium transition-colors">
                  Resources
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <div className="relative group">
                <button className="text-slate-700 hover:text-teal-600 flex items-center font-medium transition-colors">
                  Industry
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <a href="#" className="text-slate-700 hover:text-teal-600 transition-colors font-medium">For Talent</a>
              <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white border-0 shadow-lg">
                Book a Call
              </Button>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" className="text-slate-700">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 opacity-50"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex items-center gap-2 mb-8 justify-center">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-amber-400" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-600 text-sm font-medium">Trusted by 250+ Businesses Worldwide</p>
          </div>
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Hire world-class overseas talent and reduce payroll costs by{' '}
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">up to 80%</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Our rigorous vetting process filters out 99.7% of candidates so you skip the guesswork, hire faster, and cut payroll costs.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white text-lg px-10 py-7 shadow-xl border-0">
              Book a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Candidate Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">Our Top Talent</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {candidates.map((candidate, index) => (
              <Card key={index} className="bg-white border border-slate-200 hover:shadow-xl transition-all duration-300 hover:border-teal-300 overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative h-48 bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center overflow-hidden">
                    {/* Placeholder Image - Use professional headshot here */}
                    <ImageWithFallback
                      src={`https://images.unsplash.com/photo-${1500000000000 + index}?w=400&h=400&fit=crop&crop=faces`}
                      alt={candidate.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      name={candidate.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{candidate.name}</h3>
                    <p className="text-slate-600 text-sm mb-4">{candidate.role}, {candidate.country}</p>
                    <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white border-0 shadow-md">
                      {candidate.salary}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <p className="text-center text-slate-500 text-sm mb-8 font-medium">Trusted by leading companies</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {companies.map((company, index) => (
              <div key={index} className="text-slate-400 text-lg font-semibold hover:text-teal-600 transition-colors">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                The painful reality of hiring without Tethered
              </h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <p className="text-gray-300 text-lg">Poor performance</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                <p className="text-white text-lg font-medium">Exaggerated resumes</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <p className="text-white text-lg font-medium">Inflated costs</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                <p className="text-white text-lg font-medium">Low retention</p>
              </div>
            </div>
          </div>
          <div className="mt-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tethered Helps You Cut Costs, Save Time, & Find{' '}
              <span className="text-cyan-400 italic">Rockstar</span> Talent
            </h2>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 border-slate-200 hover:border-teal-300 transition-colors bg-gradient-to-br from-white to-teal-50/30">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Access our global talent pool</h3>
                <p className="text-slate-600 leading-relaxed">
                  We recruit, vet, and interview talent from around the world so you don't have to. Our team handles the entire process, presenting you with only the best candidates.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-slate-200 hover:border-teal-300 transition-colors bg-gradient-to-br from-white to-cyan-50/30">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Budget-friendly talent</h3>
                <p className="text-slate-600 leading-relaxed">
                  Save an average of 83% on payroll costs by hiring overseas talent. We help you negotiate fair compensation that works for both you and your new team member.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-slate-200 hover:border-teal-300 transition-colors bg-gradient-to-br from-white to-teal-50/30">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Talent for Every Role</h3>
                <p className="text-slate-600 leading-relaxed">
                  From executive assistants to C-suite hires, we can place talent for almost every job role. Whatever your needs, we have the right candidate for you.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-slate-200 hover:border-teal-300 transition-colors bg-gradient-to-br from-white to-cyan-50/30">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Fast and Stress-free</h3>
                <p className="text-slate-600 leading-relaxed">
                  We present you with top candidates within ~14 business days. No more sifting through hundreds of resumes or conducting endless interviews.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-4">
            Hear From{' '}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent italic">Operators</span>{' '}
            That Hired Our Talent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-teal-100">
                      {/* Placeholder Image - Use professional headshot here */}
                      <ImageWithFallback
                        src={`https://images.unsplash.com/photo-${1470000000000 + index}?w=200&h=200&fit=crop&crop=faces`}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        name={testimonial.name}
                      />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-sm">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 text-center mb-4">
            Getting Started Is{' '}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent italic">Easy</span>
          </h2>
          <div className="space-y-16 mt-20">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="relative">
                    <div className="absolute -left-4 -top-4 text-[120px] font-bold text-teal-100 select-none -z-10">
                      {step.number}
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed whitespace-pre-line text-lg">{step.description}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <Card className="border-2 border-slate-200 bg-gradient-to-br from-teal-50 to-cyan-50 overflow-hidden">
                      <CardContent className="p-0">
                        {/* Placeholder Image - Use relevant illustration here */}
                        <div className="h-64 bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center relative">
                          <ImageWithFallback
                            src={`https://images.unsplash.com/photo-${1550000000000 + index}?w=600&h=400&fit=crop`}
                            alt={`Step ${step.number}`}
                            className="w-full h-full object-cover"
                            fallback={`https://ui-avatars.com/api/?name=Step+${step.number}&size=400&background=0891b2&color=fff&bold=true`}
                          />
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="text-6xl text-teal-300/30 font-bold">{step.number}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get started today and hire the best global talent
          </h2>
          <p className="text-xl text-cyan-50 mb-10 max-w-3xl mx-auto leading-relaxed">
            Build a high-performing team without the traditional hiring headaches. We'll connect you with top talent from around the world so you can grow faster and focus on what matters most.
          </p>
          <Button size="lg" className="bg-white text-teal-600 hover:bg-slate-50 text-lg px-10 py-7 shadow-2xl border-0 font-bold">
            Find The Best Fit
          </Button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal-600 text-sm uppercase tracking-wider mb-4 font-semibold">GET THE DATA BEFORE YOU HIRE</p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get Our Free Global Salary Guide</h2>
              <p className="text-slate-600 mb-6 font-medium">What's Inside:</p>
              <ul className="space-y-4 text-slate-700 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Salary Benchmarks by Role & Country
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Negotiation Tips & Cost-Saving Strategies
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Payroll & Compliance Insights
                </li>
              </ul>
              <div className="space-y-4">
                <Input type="email" placeholder="Enter your email" className="w-full h-14 bg-slate-50 border-2 border-slate-200 focus:border-teal-500 text-slate-900 placeholder:text-slate-400 text-base" />
                <Button type="submit" className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white h-14 text-base border-0 uppercase font-bold shadow-lg">
                  GET FREE SALARY GUIDE
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <Card className="border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-teal-50 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xl">
                <CardContent className="p-0">
                  <div className="bg-white p-8">
                    <div className="text-teal-600 text-sm mb-2 font-semibold">tethered</div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-6">Salary Guide</h3>
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-4 border border-teal-100">
                        <p className="text-slate-700 font-medium">VP Engineering</p>
                      </div>
                      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-4 border border-teal-100">
                        <p className="text-slate-700 font-medium">Lead Project Manager</p>
                      </div>
                      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-4 border border-teal-100">
                        <p className="text-slate-700 font-medium">Director of Sales</p>
                      </div>
                      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-4 border border-teal-100">
                        <p className="text-slate-700 font-medium">Head of Growth</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <a href="#" className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-4 block">
                Tethered
              </a>
              <a href="mailto:hire@tethered.so" className="text-slate-400 text-sm block mb-2 hover:text-teal-400 transition-colors">
                hire@tethered.so
              </a>
              <p className="text-slate-400 text-sm">
                Copyright © 2025 Tethered Recruiting LLC. | All Rights Reserved
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-white text-sm font-medium">Follow Us</p>
              <div className="flex gap-3">
                <a href="#" className="w-11 h-11 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors">
                  <span className="text-white text-xs font-bold">in</span>
                </a>
                <a href="#" className="w-11 h-11 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-11 h-11 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                <a href="#" className="w-11 h-11 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors">
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
