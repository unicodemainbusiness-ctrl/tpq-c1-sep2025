import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/navbar';

// Data dummy untuk galeri foto. Ganti dengan URL foto asli Anda.
const galeriData = [
  {
    src: 'https://placehold.co/600x400/e8f5e9/333333?text=Belajar+Mengaji',
    alt: 'Suasana belajar mengaji di kelas',
    deskripsi: 'Belajar Mengaji',
  },
  {
    src: 'https://placehold.co/600x400/d1fae5/333333?text=Wisuda+Santri',
    alt: 'Prosesi wisuda santri TPQ Al-Hikmah',
    deskripsi: 'Wisuda Santri',
  },
  {
    src: 'https://placehold.co/600x400/a7f3d0/333333?text=Kegiatan+Ramadan',
    alt: 'Kegiatan buka puasa bersama di bulan Ramadan',
    deskripsi: 'Kegiatan Ramadan',
  },
  {
    src: 'https://placehold.co/600x400/6ee7b7/ffffff?text=Lomba+Hafalan',
    alt: 'Santri mengikuti lomba hafalan surat pendek',
    deskripsi: 'Lomba Hafalan',
  },
  {
    src: 'https://placehold.co/600x400/34d399/ffffff?text=Manasik+Haji',
    alt: 'Praktik manasik haji cilik',
    deskripsi: 'Manasik Haji Cilik',
  },
  {
    src: 'https://placehold.co/600x400/10b981/ffffff?text=Outing+Class',
    alt: 'Kegiatan belajar di luar ruangan',
    deskripsi: 'Outing Class',
  },
];

// Komponen untuk setiap item di galeri
const GaleriItem = ({ src, alt, deskripsi }: any) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg">
    <Image
      src={src}
      alt={alt}
      width={600}
      height={400}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300"></div>
    <div className="absolute bottom-0 left-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
      <h3 className="text-white font-bold text-lg">{deskripsi}</h3>
    </div>
  </div>
);


export default function GaleriPage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header & Navigasi */}
      <Navbar />

      <main>
        {/* Judul Halaman */}
        <section className="bg-green-50 py-12">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-800">Galeri Kegiatan</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Melihat lebih dekat momen-momen berharga dan keceriaan para santri dalam belajar dan beraktivitas.</p>
          </div>
        </section>

        {/* Konten Galeri */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {galeriData.map((item, index) => (
                <GaleriItem key={index} {...item} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-6 text-center">
          <p>&copy; {new Date().getFullYear()} TPQ Al-Hikmah. Semua Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}
