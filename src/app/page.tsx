import Link from 'next/link';
import Image from 'next/image';
import Navbar from './components/navbar';

// Komponen untuk ikon fitur agar lebih rapi
const FeatureIcon = ({ children }) => (
  <div className="flex items-center justify-center h-16 w-16 bg-green-100 rounded-full mb-4">
    <span className="text-3xl text-green-700">{children}</span>
  </div>
);

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header & Navigasi */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <Image
            src="https://placehold.co/1200x600/e8f5e9/333333?text=Kegiatan+Mengaji"
            alt="Kegiatan mengaji di TPQ Al-Hikmah"
            layout="fill"
            objectFit="cover"
            className="z-[-1]"
          />
          <div className="relative z-10 px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              Membentuk Generasi Qur'ani
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Pendidikan Al-Qur'an terbaik bagi putra-putri Anda dalam lingkungan yang islami, aman, dan menyenangkan.
            </p>
            <Link href="/pendaftaran" className="mt-8 inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-700 transition duration-300">
              Mulai Pendaftaran
            </Link>
          </div>
        </section>

        {/* Bagian Fitur Unggulan */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa Memilih TPQ Al-Hikmah?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12">
              Kami berkomitmen untuk memberikan landasan cinta Al-Qur'an yang kokoh sejak dini melalui metode yang teruji.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <FeatureIcon>✓</FeatureIcon>
                <h3 className="text-xl font-bold mb-2">Kurikulum Terpadu</h3>
                <p className="text-gray-600">
                  Menggabungkan metode Iqro' yang mudah diikuti dengan pelajaran akhlak, doa harian, dan kisah para nabi.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <FeatureIcon>☺</FeatureIcon>
                <h3 className="text-xl font-bold mb-2">Pengajar Kompeten</h3>
                <p className="text-gray-600">
                  Dibimbing oleh ustadz dan ustadzah yang sabar, berpengalaman, dan bersertifikat di bidangnya.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <FeatureIcon>♥</FeatureIcon>
                <h3 className="text-xl font-bold mb-2">Lingkungan Positif</h3>
                <p className="text-gray-600">
                  Menciptakan suasana belajar yang nyaman, mendukung, dan menumbuhkan rasa persaudaraan antar santri.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-green-700 text-white">
          <div className="container mx-auto px-6 py-16 text-center">
            <h2 className="text-3xl font-bold mb-2">Pendaftaran Santri Baru Telah Dibuka!</h2>
            <p className="max-w-xl mx-auto mb-8">
              Amankan tempat untuk buah hati Anda. Mari bersama-sama kita wujudkan generasi penerus yang cinta Al-Qur'an.
            </p>
            <Link href="/pendaftaran" className="bg-white text-green-700 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-200 transition duration-300">
              Lihat Alur Pendaftaran
            </Link>
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