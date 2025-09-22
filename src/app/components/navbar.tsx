import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-green-700">
            TPQ Al-Hikmah
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-green-700 font-semibold">Beranda</Link>
            <Link href="/about" className="text-gray-600 hover:text-green-700 font-semibold">Tentang Kami</Link>
            <Link href="/program" className="text-gray-600 hover:text-green-700 font-semibold">Program</Link>
            <Link href="/gallery" className="text-gray-600 hover:text-green-700 font-semibold">Galeri</Link>
          </div>
          <Link href="/pendaftaran" className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">
            Daftar Sekarang
          </Link>
        </nav>
      </header>
  )
}

export default Navbar
