'use client'; // Menandai ini sebagai Client Component untuk menggunakan hooks

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from './components/footer';
import Navbar from './components/navbar';

// Komponen untuk ikon fitur agar lebih rapi
const FeatureIcon = ({ children }) => (
  <div className="flex items-center justify-center h-16 w-16 bg-green-100 rounded-full mb-4">
    <span className="text-3xl text-green-700">{children}</span>
  </div>
);

// Custom Hook untuk mendeteksi saat elemen masuk ke viewport
const useInView = (options) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        // Optional: unobserve setelah terlihat agar animasi tidak berulang
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isInView];
};


export default function HomePage() {
  const [featuresRef, featuresInView] = useInView({ threshold: 0.2 });
  const [visiMisiRef, visiMisiInView] = useInView({ threshold: 0.2 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.5 });

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header & Navigasi (tetap sama) */}
       <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <Image
            src="https://placehold.co/1200x600/e8f5e9/333333?text=Kegiatan+Mengaji"
            alt="Kegiatan mengaji di TPQ Al-Hikmah"
            layout="fill"
            objectFit="cover"
            className="z-[-1]"
            priority
          />
          <div className="relative z-10 px-4 animate-fade-in-down">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              Membentuk Generasi Qur'ani
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Pendidikan Al-Qur'an terbaik bagi putra-putri Anda dalam lingkungan yang islami, aman, dan menyenangkan.
            </p>
            <Link href="/pendaftaran" className="mt-8 inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-700 transition duration-300 transform hover:scale-105">
              Mulai Pendaftaran
            </Link>
          </div>
        </section>

        {/* Bagian Fitur Unggulan dengan Animasi */}
        <section ref={featuresRef} className="py-20 bg-gray-50 overflow-hidden h-[90vh] flex justify-center items-center">
          <div className="container mx-auto px-6 text-center">
             <div className={`${featuresInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa Memilih TPQ Al-Hikmah?</h2>
                <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                  Kami berkomitmen untuk memberikan landasan cinta Al-Qur'an yang kokoh sejak dini melalui metode yang teruji.
                </p>
             </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className={`transition-all duration-700 ${featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                  <FeatureIcon>✓</FeatureIcon>
                  <h3 className="text-xl font-bold mb-2">Kurikulum Terpadu</h3>
                  <p className="text-gray-600">
                    Menggabungkan metode Iqro' yang mudah diikuti dengan pelajaran akhlak, doa harian, dan kisah para nabi.
                  </p>
                </div>
              </div>
              <div className={`transition-all duration-700 delay-200 ${featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                 <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                  <FeatureIcon>☺</FeatureIcon>
                  <h3 className="text-xl font-bold mb-2">Pengajar Kompeten</h3>
                  <p className="text-gray-600">
                    Dibimbing oleh ustadz dan ustadzah yang sabar, berpengalaman, dan bersertifikat di bidangnya.
                  </p>
                </div>
              </div>
              <div className={`transition-all duration-700 delay-400 ${featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                  <FeatureIcon>♥</FeatureIcon>
                  <h3 className="text-xl font-bold mb-2">Lingkungan Positif</h3>
                  <p className="text-gray-600">
                    Menciptakan suasana belajar yang nyaman, mendukung, dan menumbuhkan rasa persaudaraan antar santri.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visi & Misi Section dengan Animasi */}
        <section ref={visiMisiRef} className="py-20 bg-white overflow-hidden h-[90vh]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className={`md:w-1/2 transition-all duration-1000 ${visiMisiInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <Image
                            src="https://placehold.co/600x450/d1fae5/333333?text=Visi+%26+Misi"
                            alt="Santri belajar bersama dengan gembira"
                            width={600}
                            height={450}
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                    <div className={`md:w-1/2 transition-all duration-1000 delay-200 ${visiMisiInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Visi & Misi Kami</h2>
                        <p className="text-gray-600 mb-6 text-lg font-semibold italic text-green-800">
                            "Menjadi lembaga pendidikan Al-Qur'an terdepan yang melahirkan generasi cinta Al-Qur'an, cerdas, dan berakhlak mulia."
                        </p>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-green-600 font-bold mr-3 mt-1">✓</span>
                                <span>Menyelenggarakan pembelajaran Al-Qur'an yang efektif dan menyenangkan.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-600 font-bold mr-3 mt-1">✓</span>
                                <span>Menanamkan nilai-nilai akhlakul karimah dalam setiap kegiatan.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-600 font-bold mr-3 mt-1">✓</span>
                                <span>Membina santri untuk memiliki hafalan doa harian dan surat-surat pendek.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Call to Action Section dengan Animasi */}
        <section ref={ctaRef} className="bg-green-700 text-white h-[60vh] flex items-center justify-center">
          <div className={`container mx-auto px-6 py-16 text-center transition-all duration-1000 ease-in-out ${ctaInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <h2 className="text-3xl font-bold mb-2">Pendaftaran Santri Baru Telah Dibuka!</h2>
            <p className="max-w-xl mx-auto mb-8">
              Amankan tempat untuk buah hati Anda. Mari bersama-sama kita wujudkan generasi penerus yang cinta Al-Qur'an.
            </p>
            <Link href="/pendaftaran" className="bg-white text-green-700 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105">
              Lihat Alur Pendaftaran
            </Link>
          </div>
        </section>
      </main>

       {/* Footer yang sudah diperbarui */}
      <Footer />
    </div>
  );
}

