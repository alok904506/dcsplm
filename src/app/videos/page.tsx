'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import PageHero from '@/components/ui/design-system/PageHero'
import StandardHeading from '@/components/ui/design-system/StandardHeading'

export default function VideosPage() {
    const videoIds = [
        '1sTNqKZpFnE',
        'yTgeMJUt_HE',
        'RV0vKOhleAg',
        'qYI1l3QJ6ng',
        '1hfkapEoAj8',
        '1FpQeHGZ9r8',
        'uR6DQwVM7-U',
        's-iRVuhrX68',
        '9jYHUWCOphA',
        'AiRlIfncM8M',
        '3PdmpNposUI',
        'z6eeMyOf1TU'
    ];

    const [playingId, setPlayingId] = useState<string | null>(null);

    return (
        <>
            <PageHero
                badge="Media"
                badgeIcon={Play}
                title="Success in"
                titleHighlight="Motion"
                subtitle="Watch our latest insights, case studies, and event highlights — stories of transformation and impact."
                backgroundImage="/images/classroom.jpg"
            />

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <StandardHeading
                        title="Featured Videos"
                        badge="Watch"
                        subtitle="Explore our industry insights, program showcases, and success stories in video format."
                        centered
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {videoIds.map((id, i) => (
                            <motion.div
                                key={id}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (i % 3) * 0.1 }}
                                className="group aspect-video rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 relative bg-[#0c0c1d]"
                            >
                                {playingId === id ? (
                                    <iframe
                                        className="w-full h-full absolute top-0 left-0"
                                        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                                        title={`YouTube Video ${i + 1}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <div 
                                        className="w-full h-full cursor-pointer relative"
                                        onClick={() => setPlayingId(id)}
                                    >
                                        <Image 
                                            src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                                            alt={`Video thumbnail ${i + 1}`}
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                            fill
                                        />
                                        
                                        {/* Play button */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 group-hover:scale-110">
                                                <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
