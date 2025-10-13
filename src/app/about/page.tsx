/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Link from "next/link";

// --- Ikon SVG untuk Visi & Misi ---
const VisiIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10 text-green-600"
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const MisiIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-white"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

// Data dummy untuk tim pengajar
const pengajarData = [
  {
    nama: "Ustadz Abdullah, S.Pd.I.",
    jabatan: "Kepala TPQ & Pengajar Tahsin",
    foto: "/assets/image/hero.png",
  },
  {
    nama: "Ustadzah Fatimah, A.Ma.",
    jabatan: "Pengajar Iqro' & Hafalan",
    foto: "/assets/image/hero.png",
  },
  {
    nama: "Ustadzah Maryam, S.Ag.",
    jabatan: "Pengajar Akhlak & Doa Harian",
    foto: "/assets/image/hero.png",
  },
  {
    nama: "Ustadz Ali, Lc.",
    jabatan: "Pengajar Bahasa Arab Dasar",
    foto: "/assets/image/hero.png",
  },
];

// Custom Hook untuk animasi scroll
const useInView = (options: any) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, options);
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [ref, options]);
  return [ref, isInView];
};

// Komponen untuk kartu pengajar
const PengajarCard = ({ nama, jabatan, foto }: any) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl">
    <div className="relative h-72 w-full">
      <Image src={foto} alt={`Foto ${nama}`} layout="fill" objectFit="cover" />
    </div>
    <div className="p-6">
      <h3 className="font-bold text-xl text-gray-800">{nama}</h3>
      <p className="text-green-700 font-semibold">{jabatan}</p>
    </div>
  </div>
);

export default function TentangKamiPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [visiMisiRef, visiMisiInView] = useInView({ threshold: 0.2 });
  const [sejarahRef, sejarahInView] = useInView({ threshold: 0.2 });
  const [pengajarRef, pengajarInView] = useInView({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.5 });

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section
          ref={heroRef as any}
          className="relative h-[80vh] flex justify-center items-center bg-green-600 text-white py-20 md:py-32 text-center overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-[url('/assets/image/bghero.png')]"></div>
          <div className="container mx-auto px-6">
            <h1
              className={`text-4xl md:text-6xl font-extrabold text-white transition-all duration-700 ${
                heroInView ? "animate-fade-in-down" : "opacity-0"
              }`}
            >
              Tentang TPQ Al-Hikmah
            </h1>
            <p
              className={`mt-4 text-lg text-white max-w-3xl mx-auto transition-all duration-700 delay-200 ${
                heroInView ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              Mengenal lebih dekat lembaga pendidikan Al-Qur&apos;an yang
              berdedikasi untuk mencetak generasi Rabbani.
            </p>
          </div>
        </section>

        {/* Visi & Misi */}
        <section
          ref={visiMisiRef as any}
          className="py-24 bg-white overflow-hidden"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className={`text-3xl md:text-4xl font-bold transition-all duration-700 ${
                  visiMisiInView ? "animate-fade-in-up" : "opacity-0"
                }`}
              >
                Landasan & Tujuan Kami
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
              {/* Visi */}
              <div
                className={`lg:w-1/3 bg-green-50 p-8 rounded-xl shadow-lg transition-all duration-1000 ${
                  visiMisiInView
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-90"
                }`}
              >
                <div className="flex justify-center mb-4">
                  <VisiIcon />
                </div>
                <h3 className="text-2xl font-bold text-center text-green-800">
                  Visi Kami
                </h3>
                <p className="text-gray-600 mt-4 text-center text-lg italic">
                  &quot;Menjadi lembaga pendidikan Al-Qur&apos;an terdepan yang
                  melahirkan generasi cinta Al-Qur&apos;an, cerdas, dan
                  berakhlak mulia.&quot;
                </p>
              </div>
              {/* Misi */}
              <div
                className={`lg:w-1/2 space-y-6 transition-all duration-1000 delay-300 ${
                  visiMisiInView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                <div className="flex items-start gap-4 p-4">
                  <span className="flex-shrink-0 bg-green-600 p-3 rounded-full mt-1">
                    <MisiIcon />
                  </span>
                  <div>
                    <h4 className="font-bold text-lg">
                      Efektif & Menyenangkan
                    </h4>
                    <p className="text-gray-600">
                      Menyelenggarakan pembelajaran Al-Qur&apos;an yang efektif
                      dan menyenangkan.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4">
                  <span className="flex-shrink-0 bg-green-600 p-3 rounded-full mt-1">
                    <MisiIcon />
                  </span>
                  <div>
                    <h4 className="font-bold text-lg">Penanaman Akhlak</h4>
                    <p className="text-gray-600">
                      Menanamkan nilai-nilai akhlakul karimah dalam setiap
                      kegiatan belajar mengajar.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4">
                  <span className="flex-shrink-0 bg-green-600 p-3 rounded-full mt-1">
                    <MisiIcon />
                  </span>
                  <div>
                    <h4 className="font-bold text-lg">Pembinaan Hafalan</h4>
                    <p className="text-gray-600">
                      Membina santri untuk memiliki hafalan doa harian dan
                      surat-surat pendek.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sejarah Singkat */}
        <section
          ref={sejarahRef as any}
          className="bg-gray-50 py-24 overflow-hidden"
        >
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div
              className={`md:w-1/2 transition-all duration-1000 ${
                sejarahInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <Image
                src="/assets/image/hero.png"
                alt="Gedung TPQ Al-Hikmah"
                width={600}
                height={450}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div
              className={`md:w-1/2 transition-all duration-1000 delay-200 ${
                sejarahInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Sejarah Perjalanan Kami
              </h2>
              <p className="text-gray-600 mb-4">
                TPQ Al-Hikmah didirikan pada tahun 2010 atas keprihatinan tokoh
                masyarakat akan pentingnya pendidikan Al-Qur&apos;an sejak dini.
                Berawal dari sebuah ruang kecil di masjid, kami berkomitmen
                untuk memberikan akses belajar mengaji yang berkualitas bagi
                anak-anak di lingkungan sekitar.
              </p>
              <p className="text-gray-600">
                Alhamdulillah, berkat dukungan dan kepercayaan dari para orang
                tua, TPQ Al-Hikmah terus berkembang dan kini memiliki fasilitas
                yang lebih memadai untuk mendukung proses belajar yang lebih
                optimal.
              </p>
            </div>
          </div>
        </section>

        {/* Tim Pengajar */}
        <section
          ref={pengajarRef as any}
          className="py-24 bg-white overflow-hidden"
        >
          <div className="container mx-auto px-6">
            <div
              className={`text-center mb-16 transition-opacity duration-1000 ${
                pengajarInView ? "opacity-100" : "opacity-0"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Kenali Tim Pengajar Kami
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                Putra-putri Anda akan dibimbing oleh para asatidz yang tidak
                hanya ahli di bidangnya, tetapi juga tulus dalam mendidik.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {pengajarData.map((pengajar, index) => (
                <div
                  key={pengajar.nama}
                  className={`transition-all duration-700 ${
                    pengajarInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <PengajarCard {...pengajar} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section ref={ctaRef as any} className="bg-gray-50">
          <div
            className={`container mx-auto px-6 py-20 text-center transition-all duration-1000 ease-in-out ${
              ctaInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Siap Menjadi Bagian dari Keluarga Besar Kami?
            </h2>
            <p className="max-w-xl mx-auto mb-8 text-gray-600">
              Daftarkan putra-putri Anda dan berikan mereka hadiah terbaik
              berupa pendidikan Al-Qur&apos;an yang berkualitas.
            </p>
            <Link
              href="/pendaftaran"
              className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
            >
              Daftar Sekarang
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
