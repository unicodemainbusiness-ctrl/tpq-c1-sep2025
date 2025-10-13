import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-green-600 shadow-md z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            TPQ Al-Hikmah
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white font-semibold">Beranda</Link>
            <Link href="/about" className="text-white font-semibold">Tentang Kami</Link>
            <Link href="/program" className="text-white font-semibold">Program</Link>
            <Link href="/gallery" className="text-white font-semibold">Galeri</Link>
          </div>
          <Link href="/pendaftaran" className="bg-white text-green-600 font-bold py-2 px-4 rounded-lg">
            Daftar Sekarang
          </Link>
        </nav>
      </header>
  )
}

export default Navbar
