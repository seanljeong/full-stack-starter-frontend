import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const deploymentSteps = [
  {
    title: 'Discovery',
    description: 'We learn your business, workflows, and goals. Then we design a tailored Clawdbot deployment—model choice, skills, and integrations—so your AI employee fits how you work.',
  },
  {
    title: 'Build & Harden',
    description: 'We install Clawdbot on your hardware, wire email, calendar, CRM, and more. We engineer prompts around your workflows and lock down security before you go live.',
  },
  {
    title: 'Go Live',
    description: 'Your assistant is usable the same day. We walk your team through it so everyone knows how to get the most out of your new AI employee.',
  },
  {
    title: '14‑Day TetheredCare',
    description: 'Priority support and tuning via a dedicated Slack channel. We fix issues, refine prompts, and make sure you&apos;re fully tethered to peace of mind.',
  },
  {
    title: 'Managed Care',
    description: 'Optional ongoing monitoring, updates, and new workflows. Every machine reports to our operations center—fleet health, security, and service status in real time.',
  },
]

const pillars = [
  {
    title: 'Configuration',
    description: 'Choosing the right model for your budget and use case, selecting skills, and designing integrations so your Clawdbot does exactly what you need.',
  },
  {
    title: 'Wiring',
    description: 'Connecting email, calendar, CRM, messaging, and databases. We ensure end‑to‑end testing so every integration works before handoff.',
  },
  {
    title: 'Tuning',
    description: 'Engineering prompts around your specific workflows, tuning memory, and managing API costs so your AI employee performs reliably and affordably.',
  },
  {
    title: 'Hardening',
    description: 'Locking down access controls, hardening the server, restricting tool permissions, and auditing everything so your deployment is secure from day one.',
  },
]

const packages = [
  {
    name: 'Tethered In‑Person VIP Deployment',
    price: '$2,400',
    priceNote: 'Launch special: $1,200',
    description: 'We come to your city and deploy a fully hardened Clawdbot on a dedicated machine. Includes discovery, configuration, integrations, security hardening, hands‑on training, and 14‑day TetheredCare. Hardware not included.',
  },
  {
    name: 'Tethered Remote Deployment',
    price: '$1,200',
    priceNote: 'Launch discount: $600',
    description: 'Full Clawdbot deployment over a call on your hardware (Mac Mini/home server) or cloud VPS. Includes discovery, configuration, integrations, security hardening, training, and 14‑day TetheredCare. Available worldwide.',
  },
  {
    name: 'Additional Agent',
    price: '$1,200',
    priceNote: 'per agent',
    description: 'Deploy another Clawdbot instance for a separate identity (e.g., CEO, CFO, or shared inbox). Same hardening, configuration, and 14‑day TetheredCare.',
  },
]

const carePlans = [
  { name: 'Basic Care', agents: '1–2 agents', price: '$500/month' },
  { name: 'Super Care', agents: 'Up to 5 agents', price: '$2,000/month' },
  { name: 'Enterprise Care', agents: 'Unlimited agents', price: 'From $5,000/month', note: 'Dedicated account manager, weekly strategy calls, compliance reporting' },
]

const testimonials = [
  {
    name: 'Andrej Karpathy',
    role: 'AI researcher, former Tesla AI',
    text: 'The future of work is agents that actually do the work. Clawdbot represents that direction—autonomous, connected, and running where you control it.',
  },
  {
    name: 'Series A Founder',
    role: 'SaaS, 40-person team',
    text: 'We tried to set up our own Clawdbot and lost a week to config and security headaches. Tethered had us live in a day with prompts that matched our workflows. Worth every penny.',
  },
  {
    name: 'Operations Lead',
    role: 'E-commerce',
    text: 'Our Clawdbot triages support emails and drafts replies. With Tethered&apos;s hardening and TetheredCare, we&apos;re confident it&apos;s secure and we have someone to call when we need to tune it.',
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
              <a href="#what-you-get" className="text-slate-700 hover:text-orange-600 transition-colors text-sm font-medium">What You Get</a>
              <a href="#why-setup" className="text-slate-700 hover:text-orange-600 transition-colors text-sm font-medium">Why Setup Matters</a>
              <a href="#how-it-works" className="text-slate-700 hover:text-orange-600 transition-colors text-sm font-medium">How It Works</a>
              <a href="#pricing" className="text-slate-700 hover:text-orange-600 transition-colors text-sm font-medium">Pricing</a>
              <a href="#contact" className="text-slate-700 hover:text-orange-600 transition-colors text-sm font-medium">Contact</a>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white border-0 shadow-lg" asChild>
                <a href="#contact">Book Your Setup</a>
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20" id="hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                  Your Clawdbot setup, done right the first time — tether your business to the future of AI.
                </h1>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg font-light">
                  Tethered professionally deploys and maintains Clawdbot: the AI assistant that clears your inbox, manages your calendar, researches topics, monitors systems, and remembers your preferences. It runs on your hardware, with security hardening and ongoing care.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-5 border-0 shadow-lg text-base" asChild>
                  <a href="#contact">Book Your Setup Call</a>
                </Button>
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-50 border-2 border-slate-300 px-6 py-5 shadow-md text-base" asChild>
                  <a href="#what-you-get">What You&apos;re Getting</a>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-2">
                <div>
                  <div className="text-2xl font-bold text-slate-900">Open source</div>
                  <div className="text-xs text-slate-500 font-medium">MIT-licensed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">Your hardware</div>
                  <div className="text-xs text-slate-500 font-medium">Privacy & control</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">Live in a day</div>
                  <div className="text-xs text-slate-500 font-medium">With Tethered</div>
                </div>
              </div>
            </div>
            <div className="relative w-full aspect-square flex items-center justify-center">
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src="/hero-background.jpg"
                  alt="Person on a hill with laptop, tethered by golden lines to the sky — tether your business to the future of AI"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You&apos;re Setting Up */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50" id="what-you-get">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What you&apos;re setting up
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Clawdbot isn&apos;t just another chatbot. It&apos;s a cutting‑edge, autonomous AI employee that acts across email, calendar, Slack, CRM, code, and more. Think of it as a digital employee that actually does work.
          </p>
          <ul className="space-y-4 text-slate-700 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">•</span>
              <span><strong>Triage your inbox</strong> and draft replies so you focus on what matters.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">•</span>
              <span><strong>Schedule meetings</strong> and resolve conflicts across calendars.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">•</span>
              <span><strong>Research topics</strong> and deliver formatted reports on demand.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">•</span>
              <span><strong>Monitor systems</strong>, run scripts, and push code—safely and audited.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">•</span>
              <span><strong>Remember every conversation</strong> and learn your preferences over time.</span>
            </li>
          </ul>
          <p className="text-slate-600 mt-8">
            New skills are shipped regularly by the open‑source community. Once you&apos;re tethered to Clawdbot, you stay ahead without starting from scratch.
          </p>
        </div>
      </section>

      {/* Why Professional Setup Matters */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-orange-50/30" id="why-setup">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Clawdbot setup is where most people get stuck
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mb-12">
            The open‑source software is free. But proper setup requires server configuration, security hardening, API integration, and custom prompt engineering. We do that so you don&apos;t have to.
          </p>
          <p className="text-lg font-semibold text-slate-800 mb-8">The four pillars of a proper deployment:</p>
          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={index} className="border-2 border-orange-200 bg-white hover:shadow-xl transition-all hover:border-orange-400">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-orange-400 rounded-xl flex items-center justify-center mb-4 text-white font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Managed Monitoring */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Managed monitoring — tethered to peace of mind
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            Tethered offers optional managed monitoring plans (TetheredCare). Every machine reports back to our operations center: fleet health, security baselines, and service status in real time. When something drifts, we catch it before you do.
          </p>
          <p className="text-slate-600">
            Stay tethered to the future without watching the dashboard yourself.
          </p>
        </div>
      </section>

      {/* Honest Truth: DIY vs. Tethered */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-orange-50/50" id="honest-truth">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
            The honest truth: DIY vs. Tethered
          </h2>
          <p className="text-xl text-slate-600 text-center max-w-3xl mx-auto mb-12">
            Going it alone has a real cost. Here&apos;s the comparison.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-slate-200 bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Going it alone</h3>
                <ul className="space-y-3 text-slate-600">
                  <li>20–40 hours of configuration and troubleshooting</li>
                  <li>Wrong model choices and wasted API spend</li>
                  <li>Security gaps that could have been avoided</li>
                  <li>Trial‑and‑error prompting with no best practices</li>
                  <li>Half‑working integrations and silent failures</li>
                  <li>No one to call when it goes down</li>
                </ul>
                <p className="mt-6 text-slate-700 font-medium">
                  The real expense? Wasted time and potential security breaches.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange-300 bg-orange-50/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">With Tethered</h3>
                <ul className="space-y-3 text-slate-700">
                  <li><strong>Live in a day</strong> — we handle build and config</li>
                  <li><strong>Right model selection</strong> for your budget and use case</li>
                  <li><strong>Hardened and audited</strong> server before handoff</li>
                  <li><strong>Prompts engineered</strong> around how your business works</li>
                  <li><strong>Tested integrations</strong> so everything works end‑to‑end</li>
                  <li><strong>Dedicated support</strong> — someone to call when you need to tune or fix</li>
                </ul>
                <p className="mt-6 text-orange-700 font-medium">
                  Tether your business to AI the right way.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white" id="how-it-works">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
            How it works
          </h2>
          <div className="space-y-6">
            {deploymentSteps.map((step, index) => (
              <Card key={index} className="border-2 border-orange-200 bg-white hover:shadow-xl transition-all hover:border-orange-400">
                <CardContent className="p-8 flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-14 h-14 bg-orange-400 rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Packages */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-orange-50/30" id="pricing">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
            Pricing & packages
          </h2>
          <p className="text-xl text-slate-600 text-center max-w-2xl mx-auto mb-12">
            One-time deployments and optional ongoing care. Hardware not included (e.g. Mac Mini from ~$599).
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <Card key={index} className="border-2 border-orange-200 bg-white hover:shadow-xl transition-all">
                <CardContent className="p-8 flex flex-col h-full">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{pkg.name}</h3>
                  <p className="text-2xl font-bold text-orange-600 mb-1">{pkg.price}</p>
                  <p className="text-sm text-slate-500 mb-4">{pkg.priceNote}</p>
                  <p className="text-slate-600 leading-relaxed flex-1">{pkg.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Tethered Care Plans (ongoing support)</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {carePlans.map((plan, index) => (
              <Card key={index} className="border-2 border-orange-100 bg-white">
                <CardContent className="p-6 text-center">
                  <p className="font-bold text-slate-900">{plan.name}</p>
                  <p className="text-sm text-slate-600">{plan.agents}</p>
                  <p className="text-xl font-bold text-orange-600 mt-2">{plan.price}</p>
                  {plan.note && <p className="text-xs text-slate-500 mt-2">{plan.note}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
            What leaders say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-orange-100 bg-orange-50/30 hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-orange-200 flex-shrink-0 flex items-center justify-center text-orange-600 font-bold">
                      {testimonial.name.charAt(0)}
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

      {/* CTA & Contact */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-orange-500 text-white relative overflow-hidden" id="contact">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tether your business to the future of AI
          </h2>
          <p className="text-xl text-orange-50 mb-6 max-w-2xl mx-auto">
            Book your setup call and get a Clawdbot that actually works—deployed, hardened, and supported by Tethered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-10 py-7 shadow-2xl font-bold" asChild>
              <a href="https://cal.com/tethered" target="_blank" rel="noopener noreferrer">Book Your Setup Call</a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-7 font-bold" asChild>
              <a href="https://cal.com/tethered/consultation" target="_blank" rel="noopener noreferrer">Not sure which plan? Free consultation</a>
            </Button>
          </div>
          <div className="text-orange-100 text-lg space-y-2">
            <p><a href="mailto:hello@tethered.so" className="underline hover:text-white">hello@tethered.so</a></p>
            <p>@tethered (Twitter / X)</p>
            <p><strong className="text-white">Austin, TX</strong> for in‑person deployments • Remote deployments available worldwide</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4 text-orange-400">Tethered</h4>
              <p className="text-sm text-slate-400">
                Professional Clawdbot deployment and support. Tether your business to the future of AI.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-orange-400">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#what-you-get" className="hover:text-orange-400">What You Get</a></li>
                <li><a href="#why-setup" className="hover:text-orange-400">Why Setup Matters</a></li>
                <li><a href="#how-it-works" className="hover:text-orange-400">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-orange-400">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-orange-400">Clawdbot</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Open-source, MIT-licensed</li>
                <li>Runs on your hardware</li>
                <li>Privacy and control</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-orange-400">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="mailto:hello@tethered.so" className="hover:text-orange-400">hello@tethered.so</a></li>
                <li>@tethered</li>
                <li>Austin, TX • Worldwide remote</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400 mb-4 md:mb-0">
              © 2025 Tethered. Clawdbot deployment, done right.
            </p>
            <p className="text-sm text-slate-400">
              Tethered to the future. Tethered to AI. Tethered to peace of mind.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
