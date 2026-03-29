'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import SectionWrapper from '@/components/ui/design-system/SectionWrapper'
import StandardHeading from '@/components/ui/design-system/StandardHeading'

const IndustryInsideInstitute = () => {
    const points = [
        "Students work directly with industry experts",
        "Real-time industrial projects become part of the curriculum",
        "Innovation labs and live project environments set up within the campus",
        "Practical problem-solving becomes a core learning method"
    ]

    return (
        <SectionWrapper background="white" padding="large">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <StandardHeading 
                        badge="Our Pioneering Model"
                        title="Industry Inside"
                        subtitle="Seamlessly integrating real-world industrial experience with academic education to eliminate the gap between classroom and industry."
                        className="mb-8"
                    />

                    <div className="space-y-4 mb-8">
                        {points.map((point, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-3 group"
                            >
                                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                                    <CheckCircle className="w-3.5 h-3.5 text-primary group-hover:text-white" />
                                </div>
                                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                    {point}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed">
                        Graduates emerging from this ecosystem are <span className="font-bold text-gray-900 border-b-2 border-primary/20">industry-ready from day one</span>, equipped with the skills and exposure needed to excel.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg transform translate-y-8">
                            <Image
                                src="/images/classroom.jpg"
                                alt="DCS Training"
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/images.jpg"
                                alt="Machine Training"
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/vlced-img-6.webp"
                                alt="Robotic Arms"
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg transform -translate-y-8">
                            <Image
                                src="/images/innovation-lab.png"
                                alt="Innovation Lab"
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default IndustryInsideInstitute
