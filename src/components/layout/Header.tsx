'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import MobileMenu from './MobileMenu'
import TopBar from './TopBar'

const Header = () => {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const menuItems = [
        {
            name: 'About Us',
            submenu: [
                { name: 'About DCS', href: '/about-dcs' },
                { name: 'Our Leaders', href: '/our-leaders' },
                { name: 'Advisory Board', href: '/advisory-board' },
                { name: 'Our Partners', href: '/our-partners' },
            ]
        },
        {
            name: 'Services',
            submenu: [
                { name: 'Consulting', href: '/consulting' },
                { name: 'Programs', href: '/programs' },
                { name: 'Placement', href: '/placement' },
            ]
        },
        {
            name: 'Impact',
            submenu: [
                { name: 'Success Stories', href: '/success-stories' },
            ]
        },
        {
            name: 'Event',
            submenu: [
                { name: 'Photos', href: '/photos' },
                { name: 'Videos', href: '/videos' },
            ]
        },
        {
            name: 'CAREER',
            submenu: [
                { name: 'Join us', href: '/join-us' },
                { name: 'Hire From us', href: '/hire-from-us' },
            ],
        },
        { name: 'Contact Us', href: '/contact-us' },
    ]

    return (
        <>
            <TopBar />
            <motion.header
                className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 py-3 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
                    : 'bg-white lg:shadow-md'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="container-custom">
                    <div className="flex items-center justify-between gap-4">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2 group flex-shrink-0">
                            <div className="flex items-center space-x-2">
                                <Image
                                    src="/images/logo.png"
                                    alt="DCS Logo"
                                    width={40}
                                    height={40}
                                    className="h-10 w-auto"
                                />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-0.5">
                            {menuItems.map((item) => {
                                const isActive = pathname === item.href || (item.submenu?.some(sub => pathname === sub.href))

                                return (
                                    <div
                                        key={item.name}
                                        className="relative group"
                                        onMouseEnter={() => item.submenu && setOpenDropdown(item.name)}
                                        onMouseLeave={() => setOpenDropdown(null)}
                                    >
                                        {item.submenu ? (
                                            <>
                                                <button className={cn(
                                                    "flex items-center space-x-1 px-3 py-2 rounded-md transition-colors whitespace-nowrap text-sm uppercase font-semibold",
                                                    isActive ? "text-primary bg-primary-50" : "text-gray-700 hover:text-primary hover:bg-gray-50"
                                                )}>
                                                    <span>{item.name}</span>
                                                    <ChevronDown className="w-3.5 h-3.5 flex-shrink-0" />
                                                </button>
                                                <AnimatePresence>
                                                    {openDropdown === item.name && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: 10 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100"
                                                        >
                                                            {item.submenu.map((subItem) => (
                                                                <Link
                                                                    key={subItem.name}
                                                                    href={subItem.href}
                                                                    className={cn(
                                                                        "block px-6 py-3 text-sm transition-colors",
                                                                        pathname === subItem.href ? "bg-primary-50 text-primary" : "text-gray-700 hover:bg-primary-50 hover:text-primary"
                                                                    )}
                                                                >
                                                                    {subItem.name}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        ) : (
                                            <Link
                                                href={item.href || '#'}
                                                className={cn(
                                                    "px-3 py-2 rounded-md transition-colors whitespace-nowrap text-sm font-semibold uppercase",
                                                    isActive ? "text-primary bg-primary-50" : "text-gray-700 hover:text-primary hover:bg-gray-50"
                                                )}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </div>
                                )
                            })}
                            <div className="pl-6 ml-6 border-l border-gray-100 flex items-center">
                                <Link 
                                    href="/partner-with-us"
                                    className="bg-red-600 text-white px-7 py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-red-700 transition-all whitespace-nowrap"
                                >
                                    Partner With Us
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Trigger */}
                        <div className="flex items-center gap-3">
                            <Link 
                                href="/partner-with-us"
                                className="hidden sm:flex bg-red-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-red-700 transition-all lg:hidden"
                            >
                                Partner With Us
                            </Link>
                            <div className="lg:hidden flex items-center gap-2">
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="p-2 text-gray-700 hover:text-primary transition-colors"
                                >
                                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.header>

            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                menuItems={menuItems}
            />
        </>
    )
}

export default Header
