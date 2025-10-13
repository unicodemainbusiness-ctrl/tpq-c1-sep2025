/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

// --- Ikon SVG untuk Modal ---
const CloseIcon = () => (
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
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 text-white"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

// Data dummy untuk galeri foto
const galeriData = [
  {
    src: "/assets/image/hero.png",
    alt: "Suasana belajar mengaji di kelas",
    deskripsi: "Belajar Mengaji",
  },
  {
    src: "/assets/image/hero.png",
    alt: "Prosesi wisuda santri TPQ Al-Hikmah",
    deskripsi: "Wisuda Santri",
  },
  {
    src: "/assets/image/hero.png",
    alt: "Kegiatan buka puasa bersama di bulan Ramadan",
    deskripsi: "Kegiatan Ramadan",
  },
  {
    src: "/assets/image/hero.png",
    alt: "Santri mengikuti lomba hafalan surat pendek",
    deskripsi: "Lomba Hafalan",
  },
  {
    src: "/assets/image/hero.png",
    alt: "Praktik manasik haji cilik",
    deskripsi: "Manasik Haji Cilik",
  },
  {
    src: "/assets/image/hero.png",
    alt: "Kegiatan belajar di luar ruangan",
    deskripsi: "Outing Class",
  },
  {
    src: "/assets/image/hero.png",
    alt: "Kegiatan santunan anak yatim",
    deskripsi: "Santunan Yatim",
  },
  {
    src: "/assets/image/hero.png",
    alt: "Pawai menyambut Tahun Baru Islam",
    deskripsi: "Pawai Muharram",
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

// Komponen untuk setiap item di galeri
const GaleriItem = ({ src, alt, deskripsi, onClick, inView, delay }: any) => (
  <div
    onClick={onClick}
    className={`group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-700 ${
      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <Image
      src={src}
      alt={alt}
      width={600}
      height={400}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <SearchIcon />
    </div>
    <div className="absolute bottom-0 left-0 p-4">
      <h3 className="text-white font-bold text-lg drop-shadow-md">
        {deskripsi}
      </h3>
    </div>
  </div>
);

export default function GaleriPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [galleryRef, galleryInView] = useInView({ threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Nonaktifkan scroll saat modal terbuka
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

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
              Galeri Kegiatan
            </h1>
            <p
              className={`mt-4 text-lg text-white max-w-3xl mx-auto transition-all duration-700 delay-200 ${
                heroInView ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              Melihat lebih dekat momen-momen berharga dan keceriaan para santri
              dalam belajar dan beraktivitas.
            </p>
          </div>
        </section>

        {/* Konten Galeri */}
        <section ref={galleryRef as any} className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {galeriData.map((item, index) => (
                <GaleriItem
                  key={index}
                  {...item}
                  onClick={() => setSelectedImage(item.src)}
                  inView={galleryInView}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ingin Anak Anda Menjadi Bagian dari Momen Ini?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Daftarkan segera dan berikan pengalaman belajar yang tak
              terlupakan bagi putra-putri Anda.
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

      {/* Modal Lightbox */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 animate-fade-in"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
          >
            <CloseIcon />
          </button>
          <div
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Gambar Galeri Diperbesar"
              width={1200}
              height={800}
              className="rounded-lg object-contain max-h-[90vh]"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
