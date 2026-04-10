'use client'

import { motion } from 'framer-motion'
import { HeartHandshake as HandshakeIcon } from 'lucide-react'
import PageHero from '@/components/ui/design-system/PageHero'
import StandardHeading from '@/components/ui/design-system/StandardHeading'

export default function OurPartnersPage() {
    const partnerTypes = [
        { title: 'Academic Partners', desc: 'Leading universities and technical institutes that integrate our curriculum into their programs.', icon: '🏛️', color: 'primary' },
        { title: 'Corporate Partners', desc: '140+ top-tier companies providing placement opportunities and real-world project access.', icon: '🏢', color: 'secondary' },
        { title: 'Technology Partners', desc: 'Cutting-edge technology vendors enabling our labs with industry-standard tools.', icon: '⚙️', color: 'emerald' },
        { title: 'Healthcare Partners', desc: 'Pharmaceutical and biotech companies sponsoring clinical research training programs.', icon: '💊', color: 'amber' },
    ]

    const colorBorder: Record<string, string> = {
        primary: 'border-primary/20',
        secondary: 'border-secondary/20',
        emerald: 'border-emerald-500/20',
        amber: 'border-amber-500/20',
    }

    return (
        <>
            <PageHero
                badge="Partnerships"
                badgeIcon={HandshakeIcon}
                title="Our"
                titleHighlight="Partners"
                subtitle="Collaborating with industry leaders, academic institutions, and technology innovators to deliver world-class education and innovation."
                primaryCta={{ href: '/partner-with-us', label: 'Partner With Us' }}
                backgroundImage="/images/classroom.jpg"
            />

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <StandardHeading
                        title="Strategic Collaborations"
                        badge="Our Ecosystem"
                        subtitle="Our partners play a crucial role in the Industry Inside Institute model, providing students access to live technologies and real-world projects."
                        centered
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                        {partnerTypes.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative rounded-2xl p-7 border ${colorBorder[p.color]} bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group overflow-hidden`}
                            >
                                <div className={`text-6xl font-black leading-none mb-4 text-gray-900/[0.03]`}>
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                                <div className="text-3xl mb-3">{p.icon}</div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Partner logo placeholders */}
                    <div>
                        <h3 className="text-center text-lg font-semibold text-gray-500 mb-8">Partner Logos</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[1, 2, 3, 4].map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.07 }}
                                    className="aspect-video rounded-2xl border border-gray-100 bg-gray-50 flex items-center justify-center group hover:border-primary/20 hover:bg-primary/[0.02] hover:shadow-md transition-all duration-300"
                                >
                                    <span className="text-gray-400 text-sm font-bold group-hover:text-primary transition-colors">Partner {i}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
