// src/app/page.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { motion } from "framer-motion";

// --- Ikon SVG sebagai Komponen (Tetap Sama) ---
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

const fasilitasData = [
  {
    nama: "Ruang Kelas Nyaman",
    deskripsi: "Dilengkapi AC dan papan tulis interaktif.",
    gambar: "https://dummyimage.com/600x400/",
  },
  {
    nama: "Perpustakaan Mini",
    deskripsi: "Koleksi buku cerita islami dan Iqro'.",
    gambar: "/assets/image/hero.png",
  },
  {
    nama: "Area Bermain Edukatif",
    deskripsi: "Tempat santri bersosialisasi dan bermain.",
    gambar: "https://dummyimage.com/600x400/",
  },
  {
    nama: "Musholla Bersih",
    deskripsi: "Untuk praktik sholat berjamaah.",
    gambar: "/assets/image/hero.png",
  },
];

const jadwalData = [
  {
    hari: "Senin",
    waktu: "16:00 - 17:30",
    kegiatan: "Kelas Iqro' (Kelompok A & B)",
  },
  {
    hari: "Selasa",
    waktu: "16:00 - 17:30",
    kegiatan: "Kelas Tahsin (Kelompok A)",
  },
  {
    hari: "Rabu",
    waktu: "16:00 - 17:30",
    kegiatan: "Kelas Iqro' (Kelompok C & D)",
  },
  {
    hari: "Kamis",
    waktu: "16:00 - 17:30",
    kegiatan: "Kelas Tahsin (Kelompok B)",
  },
  {
    hari: "Jumat",
    waktu: "16:00 - 17:30",
    kegiatan: "Kelas Gabungan (Akhlak & Kisah Nabi)",
  },
  { hari: "Sabtu", waktu: "09:00 - 10:30", kegiatan: "Kelas Tahfidz" },
  {
    hari: "Ahad",
    waktu: "09:00 - 10:30",
    kegiatan: "Kelas Tahfidz & Ekstrakurikuler Islami",
  },
];

const galeriData = [
  { src: "https://dummyimage.com/600x400/", alt: "Suasana belajar mengaji di kelas" },
  { src: "https://dummyimage.com/600x400/", alt: "Prosesi wisuda santri" },
  { src: "https://dummyimage.com/600x400/", alt: "Kegiatan buka puasa bersama" },
  { src: "https://dummyimage.com/600x400/", alt: "Praktik manasik haji cilik" },
  { src: "https://dummyimage.com/600x400/", alt: "Lomba hafalan surat pendek" },
  { src: "https://dummyimage.com/600x400/", alt: "Kegiatan lain" },
  { src: "https://dummyimage.com/600x400/", alt: "Kegiatan seru" },
];

// Animation variants for Framer Motion
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const heroTextVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
};

const heroImageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
  },
};

const featureImageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const featureTextVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut", delay: 0.3 },
  },
};

const visiMisiTextVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll logic for carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextIndex = (currentIndex + 1) % galeriData.length;
        const scrollAmount =
          carouselRef.current.scrollWidth / galeriData.length;

        if (nextIndex === 0) {
          carouselRef.current.scrollTo({ left: 0, behavior: "auto" });
        } else {
          carouselRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
        setCurrentIndex(nextIndex);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const scrollToSection = (id: string) => {
    if (id === "top") {
      // Khusus untuk 'Beranda'
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth", block: "start" }); // block: 'start' agar bagian atas section pas
    }
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navbar onNavClick={scrollToSection} />

      <main>
        {/* Hero Section */}
        <motion.section
          id="beranda"
          initial="hidden"
          animate="visible"
          className="relative h-[90vh] pt-20 pb-32 md:pb-48 overflow-hidden"
        >
          {/* Background Image */}
          <Image
            src="/assets/image/bghero.png"
            alt="Latar belakang arsitektur islami"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
            priority
          />
          {/* Main Content */}
          <div className="container mx-auto px-6 relative z-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-10 md:mt-0">
              {/* Text Column */}
              <motion.div
                variants={heroTextVariants}
                className="md:w-1/2 text-center md:text-left"
              >
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
              </motion.div>

              {/* Image Column */}
              <motion.div
                variants={heroImageVariants}
                className="md:w-1/2 flex justify-center items-center relative order-first md:order-last"
              >
                <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
                  <div className="absolute inset-0 bg-yellow-100/50 rounded-full blur-2xl"></div>
                  <Image
                    src="/assets/image/hero.png"
                    alt="Santri TPQ Al-Hikmah"
                    width={500}
                    height={500}
                    className="relative z-10"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
          {/* Wave Divider */}
          <div className="absolute -bottom-40 left-0 w-full z-10">
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
        </motion.section>

        {/* Galeri Kegiatan */}
        <motion.section
          id="galeri"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="py-24 bg-gray-50"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Galeri Kegiatan
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                Momen-momen berharga dan keceriaan para santri dalam belajar dan
                beraktivitas.
              </p>
              <div className="mt-4">
                <Link
                  href="/gallery"
                  className="text-green-600 hover:text-green-800 font-semibold transition-colors"
                >
                  Lihat Semua &rarr;
                </Link>
              </div>
            </div>
            {/* Auto-scrolling Carousel */}
            <div className="relative overflow-hidden">
              <div
                ref={carouselRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 no-scrollbar"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
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
            </div>
          </div>
        </motion.section>

        {/* Visi Misi */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="py-24 bg-gradient-to-b from-white to-green-50 relative overflow-hidden" // Changed background
        >
          {/* Optional decorative background elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-green-200/30 rounded-full blur-3xl opacity-50 -translate-x-1/3"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl opacity-50 translate-x-1/3"></div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Main Heading */}
            <motion.div
              variants={visiMisiTextVariants}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Visi & Misi Kami
              </h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                Landasan dan tujuan kami dalam membentuk generasi Qur'ani.
              </p>
            </motion.div>

            {/* Visi Container */}
            <motion.div
              variants={visiMisiTextVariants} // Reuse variant or create a specific one
              className="bg-green-600 text-white p-8 md:p-12 rounded-3xl shadow-xl max-w-4xl mx-auto mb-16 text-center relative overflow-hidden"
            >
              {/* Optional subtle pattern */}
              <div className="absolute inset-0 opacity-10 bg-[url('/assets/image/vector.png')] bg-repeat bg-center"></div>
              <span className="block text-sm font-semibold uppercase tracking-widest mb-3 text-green-100 relative">
                Visi
              </span>
              <p className="text-xl md:text-2xl font-semibold italic relative leading-relaxed">
                &quot;Menjadi lembaga pendidikan Al-Qur&apos;an terdepan yang
                melahirkan generasi cinta Al-Qur&apos;an, cerdas, dan berakhlak
                mulia.&quot;
              </p>
            </motion.div>

            {/* Misi Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ staggerChildren: 0.2 }}
            >
              {/* Misi Card 1 */}
              <motion.div
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-green-100 transition-shadow duration-300"
              >
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 text-2xl font-bold">
                  01 {/* Atau bisa pakai ikon */}
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  Efektif & Menyenangkan
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Menyelenggarakan pembelajaran Al-Qur&apos;an yang efektif,
                  mudah dipahami, dan dikemas secara menyenangkan.
                </p>
              </motion.div>
              {/* Misi Card 2 */}
              <motion.div
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-green-100 transition-shadow duration-300"
              >
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 text-2xl font-bold">
                  02
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  Penanaman Akhlak
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Menanamkan nilai-nilai akhlakul karimah dan adab Islami dalam
                  setiap interaksi dan kegiatan belajar mengajar.
                </p>
              </motion.div>
              {/* Misi Card 3 */}
              <motion.div
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-green-100 transition-shadow duration-300"
              >
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 text-2xl font-bold">
                  03
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  Pembinaan Hafalan
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Membina dan memotivasi santri untuk memiliki hafalan dasar
                  seperti doa harian dan surat-surat pendek Al-Qur'an.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

                {/* Mengapa Memilih Kami */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="py-24 bg-gray-50"
        >
          <div className="container mx-auto px-6">
            <motion.div
              variants={sectionVariants}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Mengapa Memilih TPQ Al-Hikmah?
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto mt-4">
                Kami berkomitmen untuk memberikan landasan cinta Al-Qur&apos;an
                yang kokoh sejak dini melalui metode yang teruji dan lingkungan
                yang mendukung.
              </p>
            </motion.div>
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              <motion.div variants={featureImageVariants} className="md:w-5/12">
                <Image
                  src="/assets/image/hero.png"
                  alt="Santri belajar dengan ceria"
                  width={600}
                  height={700}
                  className="rounded-2xl shadow-2xl object-cover"
                />
              </motion.div>
              <motion.div
                variants={featureTextVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ staggerChildren: 0.3 }}
                className="md:w-7/12 space-y-6"
              >
                <motion.div
                  variants={itemVariants}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
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
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
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
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
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
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Program Unggulan - REVISED */}
        <motion.section
          id="program" // ID tetap ada
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="py-24 bg-white" // Background bisa disesuaikan jika perlu
        >
          <div className="container mx-auto px-6">
            {/* Heading */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Program Unggulan Kami
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                Setiap program dirancang secara khusus sesuai dengan jenjang
                usia dan kemampuan santri, dibimbing oleh pengajar berpengalaman.
              </p>
            </div>

            {/* Program Cards Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12" // Sedikit menambah gap di layar medium
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ staggerChildren: 0.2 }}
            >
              {/* Card 1: Kelas Iqro */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-emerald-200 transition-all duration-300 flex flex-col items-center text-center group"
              >
                {/* Icon/Image Placeholder */}
                <div className="mb-5 w-20 h-20 rounded-full bg-emerald-600 flex items-center justify-center text-white text-3xl shadow-md group-hover:scale-110 transition-transform">
                  {/* Ganti dengan ikon SVG atau Image jika ada */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-emerald-800 mb-3">
                  Kelas Iqro&apos;
                </h3>
                <p className="text-gray-600 text-sm mb-5 flex-grow"> {/* Added flex-grow */}
                  Pengenalan huruf hijaiyah dan dasar-dasar membaca
                  Al-Qur&apos;an menggunakan metode Iqro' yang terstruktur dan menyenangkan untuk usia dini/pemula.
                </p>
                <Link
                  href="/program" // Pastikan link ini benar
                  className="mt-auto font-semibold text-emerald-600 hover:text-emerald-800 transition-colors group-hover:underline"
                >
                  Pelajari Lebih Lanjut &rarr;
                </Link>
              </motion.div>

              {/* Card 2: Kelas Tahsin */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl shadow-lg border border-teal-100 hover:shadow-teal-200 transition-all duration-300 flex flex-col items-center text-center group"
              >
                {/* Icon/Image Placeholder */}
                <div className="mb-5 w-20 h-20 rounded-full bg-teal-600 flex items-center justify-center text-white text-3xl shadow-md group-hover:scale-110 transition-transform">
                  {/* Ganti dengan ikon SVG atau Image jika ada */}
                   <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-teal-800 mb-3">
                  Kelas Tahsin
                </h3>
                <p className="text-gray-600 text-sm mb-5 flex-grow">
                  Fokus pada perbaikan kualitas bacaan Al-Qur&apos;an, meliputi makharijul huruf (tempat keluar huruf) dan sifat-sifatnya, serta hukum tajwid dasar.
                </p>
                <Link
                  href="/program" // Pastikan link ini benar
                  className="mt-auto font-semibold text-teal-600 hover:text-teal-800 transition-colors group-hover:underline"
                >
                  Pelajari Lebih Lanjut &rarr;
                </Link>
              </motion.div>

              {/* Card 3: Kelas Tahfidz */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-2xl shadow-lg border border-cyan-100 hover:shadow-cyan-200 transition-all duration-300 flex flex-col items-center text-center group"
              >
                {/* Icon/Image Placeholder */}
                <div className="mb-5 w-20 h-20 rounded-full bg-cyan-600 flex items-center justify-center text-white text-3xl shadow-md group-hover:scale-110 transition-transform">
                  {/* Ganti dengan ikon SVG atau Image jika ada */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6.52c.44-.04 1.13-.15 2.19-.34.78-.14 1.57-.3 2.31-.48C18.23 5.34 20 5.4 20 6.81V18c0 1.28-.83 1.48-1.5 1.58-.64.09-1.33.17-2 .24-1 .11-2.18.23-3.5.28-1.92.07-4.08-.09-6-.39-.9-.14-1.78-.31-2.5-.52-.75-.21-1.5-.45-1.5-1.21V7.12c0-1.3 1.39-1.4 2.5-1.48.74-.05 1.48-.11 2.19-.18 1.05-.09 2.18-.16 3.31-.16Z"/><path d="M9 12h6"/><path d="M12 9v6"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-cyan-800 mb-3">
                  Kelas Tahfidz
                </h3>
                <p className="text-gray-600 text-sm mb-5 flex-grow">
                  Program khusus menghafal Al-Qur&apos;an dimulai dari Juz 30 (Juz 'Amma) dengan metode setoran dan muroja'ah (pengulangan) yang terjadwal.
                </p>
                <Link
                  href="/program" // Pastikan link ini benar
                  className="mt-auto font-semibold text-cyan-600 hover:text-cyan-800 transition-colors group-hover:underline"
                >
                  Pelajari Lebih Lanjut &rarr;
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
        {/* --- End of REVISED Program Unggulan Section --- */}

        {/* Fasilitas */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Fasilitas Penunjang Belajar
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                Kami menyediakan lingkungan belajar yang aman, nyaman, dan
                mendukung perkembangan santri.
              </p>
            </div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {fasilitasData.map((fasilitas, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src={fasilitas.gambar}
                    alt={fasilitas.nama}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-lg">{fasilitas.nama}</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {fasilitas.deskripsi}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Jadwal Kegiatan */}
        {/* Jadwal Kegiatan - REVISED */}
        <motion.section
          // id="jadwal" // Opsional jika perlu link
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="py-24 bg-gray-50" // Background konsisten
        >
          <div className="container mx-auto px-6">
            {/* Heading */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Jadwal Kegiatan Mingguan
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                Struktur waktu belajar yang teratur untuk memaksimalkan
                penyerapan ilmu dan pembentukan karakter Islami.
              </p>
            </div>

            {/* Jadwal List Container */}
            <motion.div
              // Menggunakan varian yang mirip dengan Visi & Misi untuk efek muncul
              variants={visiMisiTextVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              {/* List Wrapper */}
              <div className="divide-y divide-gray-200">
                {/* Header (Opsional, bisa dihilangkan jika dirasa terlalu ramai) */}
                <div className="hidden md:flex bg-green-600 text-white px-6 py-3 font-semibold">
                  <div className="w-1/4">Hari</div>
                  <div className="w-1/4">Waktu</div>
                  <div className="w-1/2">Kegiatan</div>
                </div>

                {/* Mapping Jadwal Data */}
                {jadwalData.map((item, index) => (
                  <motion.div
                    key={index}
                    // Animasi sederhana untuk setiap item saat muncul
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.1 }} // Trigger lebih awal
                    transition={{ duration: 0.5, delay: index * 0.05 }} // Sedikit delay per item
                    className={`flex flex-col md:flex-row items-start md:items-center p-4 md:p-6 ${index % 2 !== 0 ? 'bg-green-50/30' : 'bg-white'} hover:bg-green-50 transition-colors`} // Warna baris selang-seling
                  >
                    {/* Hari */}
                    <div className="w-full md:w-1/4 mb-2 md:mb-0 flex items-center">
                      {/* Ikon Kalender Kecil (Opsional) */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-600 hidden md:inline"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                      <span className="font-semibold text-gray-800">{item.hari}</span>
                    </div>
                    {/* Waktu */}
                    <div className="w-full md:w-1/4 mb-2 md:mb-0 text-gray-600 md:pl-2">
                       <span className="md:hidden font-medium text-gray-500">Waktu: </span> {item.waktu}
                    </div>
                    {/* Kegiatan */}
                    <div className="w-full md:w-1/2 text-gray-700 md:pl-4">
                       <span className="md:hidden font-medium text-gray-500">Kegiatan: </span> {item.kegiatan}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
        {/* --- End of REVISED Jadwal Kegiatan Section --- */}

        {/* Testimoni */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Apa Kata Orang Tua Santri?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimoni 1 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-gray-50 p-8 rounded-lg shadow-lg"
              >
                <p className="text-gray-600 italic">
                  &quot;Alhamdulillah, anak saya jadi lebih semangat mengaji
                  sejak di TPQ Al-Hikmah. Ustadzahnya sabar sekali dalam
                  mengajar.&quot;
                </p>
                <p className="font-bold text-right mt-4 text-green-700">
                  - Ibu Sarah, Orang Tua Santri
                </p>
              </motion.div>
              {/* Testimoni 2 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="bg-gray-50 p-8 rounded-lg shadow-lg"
              >
                <p className="text-gray-600 italic">
                  &quot;Lingkungannya sangat mendukung. Selain belajar
                  Al-Qur&apos;an, anak saya juga jadi punya banyak teman dan
                  belajar adab.&quot;
                </p>
                <p className="font-bold text-right mt-4 text-green-700">
                  - Bapak Rahman, Orang Tua Santri
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* --- Call to Action Section (UPDATED with Local Image) --- */}
        <section
          className="relative text-white bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/assets/image/bghero.png')", // Ganti dengan path gambar masjid lokal Anda
            // Contoh lain: backgroundImage: "url('/assets/image/masjid-cta-bg.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40 z-0"></div>{" "}
          {/* Adjusted overlay gradient */}
          {/* Konten */}
          <div className="container mx-auto px-6 py-24 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 drop-shadow-md">
              {" "}
              {/* Added drop shadow */}
              Pendaftaran Santri Baru Telah Dibuka!
            </h2>
            <p className="max-w-xl mx-auto mb-8 text-lg drop-shadow">
              {" "}
              {/* Added drop shadow */}
              Amankan tempat untuk buah hati Anda. Mari bersama-sama kita
              wujudkan generasi penerus yang cinta Al-Qur&apos;an.
            </p>
            <Link
              href={"/pendaftaran"}
              className="inline-block bg-white text-green-700 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Daftar Sekarang
            </Link>
          </div>
        </section>
        {/* --- End of UPDATED CTA Section --- */}
      </main>

      <Footer />

      {/* Helper class to hide scrollbar */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
}
