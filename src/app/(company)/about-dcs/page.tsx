'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Building2, Target, Check, Star, Lightbulb, HeartHandshake, Globe, TrendingUp, Sprout } from 'lucide-react'
import Link from 'next/link'
import PageHero from '@/components/ui/design-system/PageHero'
import StandardHeading from '@/components/ui/design-system/StandardHeading'

export default function AboutDCSPage() {
    const storyRef = useRef(null)
    const visionRef = useRef(null)
    const valuesRef = useRef(null)

    const isStoryInView = useInView(storyRef, { once: true, margin: '-100px' })
    const isVisionInView = useInView(visionRef, { once: true, margin: '-100px' })
    const isValuesInView = useInView(valuesRef, { once: true, margin: '-100px' })

    const coreValues = [
        { title: 'Excellence', description: 'We strive for excellence in everything we do, from service delivery to client relationships.', icon: Star, color: 'primary' },
        { title: 'Innovation', description: 'Embracing change and continuously innovating to stay ahead in a dynamic world.', icon: Lightbulb, color: 'secondary' },
        { title: 'Integrity', description: 'Operating with transparency, honesty, and ethical practices in all engagements.', icon: HeartHandshake, color: 'emerald' },
        { title: 'Collaboration', description: 'Working together with clients, partners, and teams to achieve shared goals.', icon: Globe, color: 'amber' },
        { title: 'Impact', description: 'Creating measurable, lasting impact for our clients and communities.', icon: TrendingUp, color: 'violet' },
        { title: 'Growth', description: 'Committed to continuous learning and development for individuals and organizations.', icon: Sprout, color: 'cyan' },
    ]

    const valueColorClasses: Record<string, string> = {
        primary: 'text-primary bg-primary/5 group-hover:bg-primary',
        secondary: 'text-secondary bg-secondary/5 group-hover:bg-secondary',
        emerald: 'text-emerald-600 bg-emerald-50 group-hover:bg-emerald-600',
        amber: 'text-amber-600 bg-amber-50 group-hover:bg-amber-600',
        violet: 'text-violet-600 bg-violet-50 group-hover:bg-violet-600',
        cyan: 'text-cyan-600 bg-cyan-50 group-hover:bg-cyan-600',
    }

    const pillars = [
        'Students work directly with industry experts',
        'Real-time industrial projects become part of the curriculum',
        'Innovation labs and live project environments are set up within the campus',
        'Practical problem-solving becomes a core learning method',
    ]

    return (
        <>
            <PageHero
                badge="About DCS"
                badgeIcon={Building2}
                title="Empowering Innovation"
                titleHighlight="Transforming Industries"
                subtitle="Through the Industry Inside Institute model — seamlessly bridging real-world industrial experience with academic education."
                primaryCta={{ href: '/partner-with-us', label: 'Partner With Us' }}
                secondaryCta={{ href: '#approach', label: 'Our Approach' }}
                backgroundImage="/images/classroom.jpg"
            />

            {/* Our Unique Approach */}
            <section id="approach" ref={storyRef} className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
                                Industry Inside Institute
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                                Our Unique{' '}
                                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                    Approach
                                </span>
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                                <p>
                                    At <span className="font-semibold text-primary">DCS</span>, we redefine learning through our pioneering &quot;Industry Inside Institute&quot; model&mdash;an approach that seamlessly integrates real-world industrial experience with academic education. This model eliminates the traditional gap between classroom learning and industry expectations.
                                </p>
                                <p>
                                    Through strategic collaborations with universities and technical institutes, we create an industry-embedded learning ecosystem where:
                                </p>
                            </div>
                            <div className="space-y-3">
                                {pillars.map((pillar, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                            <Check className="w-3.5 h-3.5 text-primary" />
                                        </div>
                                        <p className="text-gray-700 text-sm sm:text-base">{pillar}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group"
                        >
                            <Image
                                src="/images/classroom.jpg"
                                alt="Industry Inside Institute"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section ref={visionRef} className="section-padding bg-gradient-to-b from-gray-50 to-white">
                <div className="container-custom">
                    <StandardHeading
                        title="Our Vision & Mission"
                        badge="Direction"
                        centered
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisionInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative rounded-2xl p-7 sm:p-8 border border-primary/20 bg-primary/[0.02] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                        >
                            <div className="absolute -top-3 -right-3 text-[80px] font-black leading-none text-primary/[0.04] select-none">01</div>
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                                <Target className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                To be a globally recognized leader in integrated business solutions, driving innovation and sustainable growth across industries through cutting-edge technology, world-class training, and strategic consulting.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisionInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="relative rounded-2xl p-7 sm:p-8 border border-secondary/20 bg-secondary/[0.02] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                        >
                            <div className="absolute -top-3 -right-3 text-[80px] font-black leading-none text-secondary/[0.04] select-none">02</div>
                            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary transition-colors duration-300">
                                <ArrowRight className="w-7 h-7 text-secondary group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                To empower organizations and individuals with the knowledge, tools, and strategic support they need to thrive in an ever-evolving world — by delivering best-in-class training, consultancy, and technology services.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section ref={valuesRef} className="section-padding bg-white">
                <div className="container-custom">
                    <StandardHeading
                        title="Our Core Values"
                        badge="Principles"
                        centered
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {coreValues.map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="relative bg-gray-50 rounded-2xl p-7 hover:bg-white hover:shadow-xl border border-gray-100 transition-all duration-300 group overflow-hidden text-center"
                            >
                                <span className="absolute -top-4 -right-2 text-[100px] font-black leading-none select-none text-gray-900/[0.03] group-hover:text-gray-900/[0.06] group-hover:scale-110 transition-all duration-500">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <motion.div 
                                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 relative z-10 ${valueColorClasses[value.color]}`}
                                    whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.1 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <value.icon className="w-8 h-8 transition-colors duration-300 group-hover:text-white" />
                                </motion.div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2 relative z-10">{value.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed relative z-10">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DCS Transforming Education */}
            <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
                <div className="container-custom">
                    <StandardHeading
                        title="DCS Transforming Education"
                        badge="Impact"
                        centered
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative w-full max-w-5xl mx-auto  overflow-hidden"
                    >
                        <Image
                            src="/images/dscscore.png"
                            alt="DCS Transforming Education"
                            width={1200}
                            height={800}
                            className="w-full h-auto block"
                        />
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-[#0c0c1d] text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'url("/images/classroom.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
                <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-secondary/15 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.03]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/[0.05]" />

                <div className="relative z-10 container-custom text-center py-4 sm:py-8">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Get Started
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 max-w-3xl mx-auto leading-tight">
                            Ready to Partner with DCS?
                        </h2>
                        <p className="text-base sm:text-lg mb-8 sm:mb-10 text-white/40 leading-relaxed max-w-2xl mx-auto">
                            Get in touch with us to explore how we can help you achieve your goals through our Industry Inside Institute model.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                            >
                                Contact Us <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/our-leaders"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300"
                            >
                                Meet Our Team
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
