/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

// --- Ikon SVG sebagai Komponen ---
const BookIcon = () => (
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
    className="w-8 h-8 text-white"
  >
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
  </svg>
);
const UsersIcon = () => (
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
    className="w-8 h-8 text-white"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const HeartIcon = () => (
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
    className="w-8 h-8 text-white"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const ChevronLeft = () => (
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
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);
const ChevronRight = () => (
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
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

// Custom Hook untuk mendeteksi saat elemen masuk ke viewport
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
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isInView];
};

const galeriData = [
  { src: "/assets/image/hero.png", alt: "Suasana belajar mengaji di kelas" },
  { src: "/assets/image/hero.png", alt: "Prosesi wisuda santri" },
  { src: "/assets/image/hero.png", alt: "Kegiatan buka puasa bersama" },
  { src: "/assets/image/hero.png", alt: "Praktik manasik haji cilik" },
  { src: "/assets/image/hero.png", alt: "Lomba hafalan surat pendek" },
];

export default function HomePage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [galleryRef, galleryInView] = useInView({ threshold: 0.2 });
  const [programsRef, programsInView] = useInView({ threshold: 0.2 });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.2 });
  const [visiMisiRef, visiMisiInView] = useInView({ threshold: 0.3 });
  const [testimonialRef, testimonialInView] = useInView({ threshold: 0.2 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.5 });

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.8; // Scroll by 80% of the container width
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navbar />

      <main>
        {/* Hero Section (Tetap Sama) */}
        <section className="relative h-[90vh] pt-20 pb-32 md:pb-48 overflow-hidden">
          {/* Latar Belakang Arsitektur Islam */}
          <Image
            src="/assets/image/bghero.png"
            alt="Latar belakang arsitektur islami"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0" // Layer paling belakang
            priority
          />
          {/* Konten Utama (Teks dan Gambar 3D) */}
          <div className="container mx-auto px-6 relative z-20">
            {" "}
            {/* Diberi z-index lebih tinggi */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-10 md:mt-0">
              {/* Kolom Teks */}
              <div className="md:w-1/2 text-center md:text-left animate-fade-in-right">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
                  TPQ Al-Hikmah
                </h1>
                <p className="text-lg md:text-xl text-white max-w-lg mx-auto md:mx-0 mb-8">
                  Lembaga pembelajaran Al-Qur&apos;an dan akhlak islami yang
                  dirancang untuk menanamkan kecintaan anak pada agamanya.
                </p>
                <Link
                  href="/pendaftaran"
                  className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-700 transition duration-300 transform hover:scale-105 shadow-lg"
                >
                  Daftar Sekarang
                </Link>
              </div>

              {/* Kolom Gambar */}
              <div className="md:w-1/2 flex justify-center items-center relative animate-fade-in-left order-first md:order-last">
                <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
                  <div className="absolute inset-0 bg-yellow-100/50 rounded-full blur-2xl"></div>
                  <Image
                    src="/assets/image/hero.png"
                    alt="Santri TPQ Al-Hikmah"
                    layout="fill"
                    objectFit="contain"
                    className="relative z-10"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Wave Divider Container */}
          <div className="absolute -bottom-40 left-0 w-full z-10">
            {" "}
            {/* Diberi z-index di antara background dan konten */}
            {/* Wave Pola (vector.png) diposisikan di bawahnya */}
            <div className="leading-none -mt-1 sm:-mt-2 md:-mt-4 lg:-mt-6 xl:-mt-8">
              <Image
                src="/assets/image/vector.png"
                alt="Pemisah bentuk gelombang pola"
                width={1920}
                height={150}
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* --- Section BARU: Galeri Kegiatan --- */}
        <section ref={galleryRef as any} className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                className={`text-3xl md:text-4xl font-bold transition-all duration-700 ${
                  galleryInView ? "animate-fade-in-up" : "opacity-0"
                }`}
              >
                Galeri Kegiatan
              </h2>
              <p
                className={`text-gray-600 max-w-2xl mx-auto mt-4 transition-all duration-700 delay-200 ${
                  galleryInView ? "animate-fade-in-up" : "opacity-0"
                }`}
              >
                Momen-momen berharga dan keceriaan para santri dalam belajar dan
                beraktivitas.
              </p>
            </div>
            <div className="relative">
              <div
                ref={carouselRef}
                className={`flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 transition-all duration-1000 ${
                  galleryInView ? "opacity-100" : "opacity-0"
                }`}
                style={{ scrollbarWidth: "none", "msOverflowStyle": "none" }}
              >
                {galeriData.map((item, index) => (
                  <div
                    key={index}
                    className="snap-center flex-shrink-0 w-4/5 md:w-1/3 rounded-lg overflow-hidden shadow-xl"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={() => scrollCarousel("left")}
                className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-4 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10 transition"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-4 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10 transition"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </section>

        {/* --- Section BARU: Program Unggulan (Ringkasan) --- */}
        <section ref={programsRef as any} className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className={`text-3xl md:text-4xl font-bold transition-all duration-700 ${
                  programsInView ? "animate-fade-in-up" : "opacity-0"
                }`}
              >
                Program Unggulan Kami
              </h2>
              <p
                className={`text-gray-600 max-w-2xl mx-auto mt-4 transition-all duration-700 delay-200 ${
                  programsInView ? "animate-fade-in-up" : "opacity-0"
                }`}
              >
                Setiap program dirancang secara khusus sesuai dengan jenjang
                usia dan kemampuan santri.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                className={`border border-gray-200 p-8 rounded-xl text-center transition-all duration-700 ${
                  programsInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h3 className="text-2xl font-bold text-green-800">
                  Kelas Iqro&apos;
                </h3>
                <p className="text-gray-600 my-4">
                  Pengenalan huruf hijaiyah dan dasar-dasar membaca
                  Al-Qur&apos;an dengan metode yang menyenangkan untuk pemula.
                </p>
                <Link
                  href="/program"
                  className="font-bold text-green-600 hover:text-green-800"
                >
                  Pelajari Lebih Lanjut &rarr;
                </Link>
              </div>
              <div
                className={`border border-gray-200 p-8 rounded-xl text-center transition-all duration-700 delay-200 ${
                  programsInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h3 className="text-2xl font-bold text-green-800">
                  Kelas Tahsin
                </h3>
                <p className="text-gray-600 my-4">
                  Fokus pada perbaikan makhraj dan tajwid untuk memastikan
                  bacaan Al-Qur&apos;an yang tartil dan sesuai kaidah.
                </p>
                <Link
                  href="/program"
                  className="font-bold text-green-600 hover:text-green-800"
                >
                  Pelajari Lebih Lanjut &rarr;
                </Link>
              </div>
              <div
                className={`border border-gray-200 p-8 rounded-xl text-center transition-all duration-700 delay-400 ${
                  programsInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h3 className="text-2xl font-bold text-green-800">
                  Kelas Tahfidz
                </h3>
                <p className="text-gray-600 my-4">
                  Program khusus untuk santri yang berkomitmen menghafal
                  Al-Qur&apos;an, dimulai dari Juz 30 dengan bimbingan intensif.
                </p>
                <Link
                  href="/program"
                  className="font-bold text-green-600 hover:text-green-800"
                >
                  Pelajari Lebih Lanjut &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --- Bagian Mengapa Memilih Kami (Revisi) --- */}
        <section ref={featuresRef as any} className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className={`text-3xl md:text-4xl font-bold transition-all duration-700 ${
                  featuresInView ? "animate-fade-in-up" : "opacity-0"
                }`}
              >
                Mengapa Memilih TPQ Al-Hikmah?
              </h2>
              <p
                className={`text-gray-600 max-w-3xl mx-auto mt-4 transition-all duration-700 delay-200 ${
                  featuresInView ? "animate-fade-in-up" : "opacity-0"
                }`}
              >
                Kami berkomitmen untuk memberikan landasan cinta Al-Qur&apos;an
                yang kokoh sejak dini melalui metode yang teruji dan lingkungan
                yang mendukung.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              <div
                className={`md:w-5/12 transition-all duration-1000 ${
                  featuresInView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
              >
                <Image
                  src="/assets/image/hero.png"
                  alt="Santri belajar dengan ceria"
                  width={600}
                  height={700}
                  className="rounded-2xl shadow-2xl object-cover"
                />
              </div>
              <div
                className={`md:w-7/12 space-y-6 transition-all duration-1000 delay-300 ${
                  featuresInView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold flex items-center gap-4">
                    <span className="bg-green-600 p-2 rounded-full">
                      <BookIcon />
                    </span>{" "}
                    Kurikulum Terpadu
                  </h3>
                  <p className="mt-2 text-gray-600 pl-12">
                    Menggabungkan metode Iqro&apos; yang mudah diikuti dengan
                    pelajaran akhlak, doa harian, dan kisah para nabi untuk
                    pemahaman Islam yang utuh.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold flex items-center gap-4">
                    <span className="bg-green-600 p-2 rounded-full">
                      <UsersIcon />
                    </span>{" "}
                    Pengajar Kompeten
                  </h3>
                  <p className="mt-2 text-gray-600 pl-12">
                    Dibimbing oleh ustadz dan ustadzah yang sabar,
                    berpengalaman, dan bersertifikat di bidangnya, memastikan
                    proses belajar yang efektif.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold flex items-center gap-4">
                    <span className="bg-green-600 p-2 rounded-full">
                      <HeartIcon />
                    </span>{" "}
                    Lingkungan Positif
                  </h3>
                  <p className="mt-2 text-gray-600 pl-12">
                    Menciptakan suasana belajar yang nyaman, mendukung, dan
                    menumbuhkan rasa persaudaraan antar santri.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Bagian Visi Misi (Revisi) --- */}
        <section
          ref={visiMisiRef as any}
          className="py-24 bg-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5">
            <Image
              src="https://placehold.co/1920x1080/e8f5e9/333333?text=Pola+Islami"
              layout="fill"
              objectFit="cover"
              alt="Pola Islami"
            />
          </div>
          <div className="container mx-auto px-6 relative">
            <div
              className={`text-center transition-all duration-1000 ${
                visiMisiInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Visi & Misi Kami
              </h2>
              <div className="bg-green-700 inline-block text-white p-6 rounded-lg shadow-xl my-8 max-w-3xl">
                <p className="text-xl font-semibold italic">
                  &quot;Menjadi lembaga pendidikan Al-Qur&apos;an terdepan yang
                  melahirkan generasi cinta Al-Qur&apos;an, cerdas, dan
                  berakhlak mulia.&quot;
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
              <div
                className={`bg-gray-50 p-6 rounded-lg shadow-lg transition-all duration-700 ${
                  visiMisiInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h3 className="font-bold text-lg text-green-800">
                  Efektif & Menyenangkan
                </h3>
                <p className="text-gray-600 mt-2">
                  Menyelenggarakan pembelajaran Al-Qur&apos;an yang efektif dan
                  menyenangkan.
                </p>
              </div>
              <div
                className={`bg-gray-50 p-6 rounded-lg shadow-lg transition-all duration-700 delay-200 ${
                  visiMisiInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h3 className="font-bold text-lg text-green-800">
                  Penanaman Akhlak
                </h3>
                <p className="text-gray-600 mt-2">
                  Menanamkan nilai-nilai akhlakul karimah dalam setiap kegiatan.
                </p>
              </div>
              <div
                className={`bg-gray-50 p-6 rounded-lg shadow-lg transition-all duration-700 delay-400 ${
                  visiMisiInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h3 className="font-bold text-lg text-green-800">
                  Pembinaan Hafalan
                </h3>
                <p className="text-gray-600 mt-2">
                  Membina santri untuk memiliki hafalan doa harian dan
                  surat-surat pendek.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Section Baru: Testimoni --- */}
        <section ref={testimonialRef as any} className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className={`text-3xl md:text-4xl font-bold transition-all duration-700 ${
                  testimonialInView ? "animate-fade-in-up" : "opacity-0"
                }`}
              >
                Apa Kata Orang Tua Santri?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimoni 1 */}
              <div
                className={`bg-white p-8 rounded-lg shadow-lg transition-all duration-1000 ${
                  testimonialInView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
              >
                <p className="text-gray-600 italic">
                  &quot;Alhamdulillah, anak saya jadi lebih semangat mengaji
                  sejak di TPQ Al-Hikmah. Ustadzahnya sabar sekali dalam
                  mengajar.&quot;
                </p>
                <p className="font-bold text-right mt-4 text-green-700">
                  - Ibu Sarah, Orang Tua Santri
                </p>
              </div>
              {/* Testimoni 2 */}
              <div
                className={`bg-white p-8 rounded-lg shadow-lg transition-all duration-1000 delay-200 ${
                  testimonialInView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                <p className="text-gray-600 italic">
                  &quot;Lingkungannya sangat mendukung. Selain belajar
                  Al-Qur&apos;an, anak saya juga jadi punya banyak teman dan
                  belajar adab.&quot;
                </p>
                <p className="font-bold text-right mt-4 text-green-700">
                  - Bapak Rahman, Orang Tua Santri
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section (Tetap Sama) */}
        <section ref={ctaRef as any} className="bg-green-700 text-white">
          <div
            className={`container mx-auto px-6 py-16 text-center transition-all duration-1000 ease-in-out ${
              ctaInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <h2 className="text-3xl font-bold mb-2">
              Pendaftaran Santri Baru Telah Dibuka!
            </h2>
            <p className="max-w-xl mx-auto mb-8">
              Amankan tempat untuk buah hati Anda. Mari bersama-sama kita
              wujudkan generasi penerus yang cinta Al-Qur&apos;an.
            </p>
            <Link
            href={"/"}
            className="bg-white text-green-700 font-bold py-4 px-6 rounded-lg"
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
