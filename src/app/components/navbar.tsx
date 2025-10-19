// src/app/components/navbar.tsx
import Link from 'next/link';
import React from 'react';

// Definisikan tipe props
interface NavbarProps {
  onNavClick?: (id: string) => void; // Prop opsional untuk fungsi scroll
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => { // Terima props
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (onNavClick) {
      e.preventDefault(); // Hentikan navigasi default jika onNavClick ada
      onNavClick(id);
    }
  };

  return (
    <header className="sticky top-0 bg-green-600 shadow-md z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Brand Link (selalu ke /) */}
        <Link href="#top" onClick={(e) => handleNavClick(e, 'top')} className="text-2xl font-bold text-white">
          TPQ Al-Hikmah
        </Link>

        {/* Navigasi Utama */}
        <div className="hidden md:flex items-center space-x-6">
          {onNavClick ? (
            // Jika di HomePage (ada onNavClick), gunakan <a> dengan onClick
            <>
              <a
                href="#top" // href bisa # atau #id
                onClick={(e) => handleNavClick(e, 'top')}
                className="text-white font-semibold cursor-pointer hover:text-gray-200 transition-colors"
              >
                Beranda
              </a>
              <a
                href="#tentang-kami"
                onClick={(e) => handleNavClick(e, 'tentang-kami')}
                className="text-white font-semibold cursor-pointer hover:text-gray-200 transition-colors"
              >
                Tentang Kami
              </a>
              <a
                href="#program"
                onClick={(e) => handleNavClick(e, 'program')}
                className="text-white font-semibold cursor-pointer hover:text-gray-200 transition-colors"
              >
                Program
              </a>
              <a
                href="#galeri"
                onClick={(e) => handleNavClick(e, 'galeri')}
                className="text-white font-semibold cursor-pointer hover:text-gray-200 transition-colors"
              >
                Galeri
              </a>
            </>
          ) : (
            // Jika di halaman lain (tidak ada onNavClick), gunakan Next Link
            <>
              <Link href="/" className="text-white font-semibold">Beranda</Link>
              <Link href="/about" className="text-white font-semibold">Tentang Kami</Link> {/* Sesuaikan href jika halaman terpisah ada */}
              <Link href="/program" className="text-white font-semibold">Program</Link>
              <Link href="/gallery" className="text-white font-semibold">Galeri</Link>
            </>
          )}
        </div>

        {/* Tombol Daftar (selalu ke /pendaftaran) */}
        <Link href="/pendaftaran" className="bg-white text-green-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition">
          Daftar Sekarang
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;  