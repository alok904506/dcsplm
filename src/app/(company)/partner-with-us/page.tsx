'use client'

import { useState } from 'react'
import { Building2, BookOpen, Users, Send, Rocket, HeartHandshake as HandshakeIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { BackgroundBeams } from '@/components/ui/BackgroundBeams'
import { SparklesCore } from '@/components/ui/SparklesCore'
import PageHero from '@/components/ui/design-system/PageHero'
import StandardHeading from '@/components/ui/design-system/StandardHeading'

export default function PartnerWithUsPage() {
    const [formData, setFormData] = useState({
        organization: '',
        name: '',
        email: '',
        phone: '',
        partnershipType: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null
        message: string
    }>({ type: null, message: '' })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus({ type: null, message: '' })

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, subject: `Partnership Inquiry: ${formData.organization} - ${formData.partnershipType}` }),
            })

            const data = await response.json()

            if (response.ok) {
                setSubmitStatus({
                    type: 'success',
                    message: data.message || 'Thank you for your partnership inquiry! We will get back to you soon.',
                })
                setFormData({ organization: '', name: '', email: '', phone: '', partnershipType: '', message: '' })
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: data.error || 'Failed to submit form. Please try again.',
                })
            }
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'Network error. Please check your connection and try again.',
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const benefits = [
        {
            title: 'Industry Inside Institute',
            description: 'Integrate real-world practical experience directly into your educational framework.',
            icon: Building2,
            color: 'primary'
        },
        {
            title: 'Access to Talent',
            description: 'Connect with a vast pool of trained professionals ready to make an impact in the industry.',
            icon: Users,
            color: 'secondary'
        },
        {
            title: 'Innovative Curriculum',
            description: 'Stay ahead of the curve with our dynamic market-responsive syllabus.',
            icon: BookOpen,
            color: 'emerald'
        },
        {
            title: 'Boosted Growth',
            description: 'Elevate your organization’s potential with strategic alignments and expert support.',
            icon: Rocket,
            color: 'amber'
        }
    ]

    const colorClasses: Record<string, string> = {
        primary: 'text-primary bg-primary/10 group-hover:bg-primary',
        secondary: 'text-secondary bg-secondary/10 group-hover:bg-secondary',
        emerald: 'text-emerald-500 bg-emerald-500/10 group-hover:bg-emerald-500',
        amber: 'text-amber-500 bg-amber-500/10 group-hover:bg-amber-500',
    }

    return (
        <>
            <PageHero
                badge="Collaboration"
                badgeIcon={HandshakeIcon}
                title="Partner"
                titleHighlight="With Us"
                subtitle="Join our ecosystem of industry leaders and educational champions to redefine the future of professional learning."
                backgroundImage="/images/classroom.jpg"
            />

            {/* Why Partner With Us */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <StandardHeading
                        title="Why Collaborate With DCS?"
                        badge="Benefits"
                        centered
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group p-8 flex flex-col items-center text-center"
                            >
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${colorClasses[benefit.color]}`}>
                                    <benefit.icon className="w-8 h-8 group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership Form Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto card p-8 sm:p-12 shadow-xl border border-gray-100 relative overflow-hidden rounded-3xl">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10">
                            <div className="text-center mb-10">
                                <h3 className="text-3xl sm:text-4xl font-bold mb-4">Start the Conversation</h3>
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    Fill out the form below to let us know about your organization and how we can achieve great things together.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="organization" className="block text-sm font-semibold mb-2">
                                            Organization Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="organization"
                                            name="organization"
                                            value={formData.organization}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                            placeholder="Your Company / Institute"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold mb-2">
                                            Contact Person *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                            placeholder="you@company.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="partnershipType" className="block text-sm font-semibold mb-2">
                                        Type of Partnership *
                                    </label>
                                    <select
                                        id="partnershipType"
                                        name="partnershipType"
                                        value={formData.partnershipType}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                                    >
                                        <option value="" disabled>Select partnership type</option>
                                        <option value="Academic Integration">Academic Integration</option>
                                        <option value="Corporate Placement">Corporate Placement / Hiring</option>
                                        <option value="Technology Provision">Technology Provision</option>
                                        <option value="Research & Development">Research & Development</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                                        Tell us about your goals *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                        placeholder="Briefly describe what you're looking to achieve with this partnership..."
                                    />
                                </div>

                                {/* Status Message */}
                                {submitStatus.type && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`p-4 rounded-lg ${submitStatus.type === 'success'
                                            ? 'bg-green-50 text-green-800 border border-green-200'
                                            : 'bg-red-50 text-red-800 border border-red-200'
                                            }`}
                                    >
                                        {submitStatus.message}
                                    </motion.div>
                                )}

                                <div className="text-center pt-4">
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                        className={`btn-primary px-10 py-4 text-lg font-bold inline-flex items-center space-x-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                                            }`}
                                    >
                                        <span>{isSubmitting ? 'Submitting...' : 'Submit Inquiry'}</span>
                                        <Send className="w-5 h-5" />
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
