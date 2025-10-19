// src/app/gallery/page.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { motion } from "framer-motion"; // Import motion

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

// REMOVE useInView hook

// Komponen untuk setiap item di galeri
const GaleriItem = ({ src, alt, deskripsi, onClick }: any) => ( // Removed inView and delay props
 <motion.div
  onClick={onClick}
  className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.3 }} // Trigger when 30% is visible, repeat
  transition={{ duration: 0.5, ease: "easeOut" }}
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
 </motion.div>
);

// Animation variants for Framer Motion
const heroVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } }
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.4 } }
};

const ctaVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
};


export default function GaleriPage() {
  // Remove useInView hooks
  // const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  // const [galleryRef, galleryInView] = useInView({ threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Nonaktifkan scroll saat modal terbuka
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup function to ensure scroll is re-enabled when component unmounts while modal is open
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navbar />

      <main>
        {/* Hero Section */}
        <motion.section
          // ref={heroRef as any} // Remove ref
          variants={heroVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // Trigger earlier and repeat
          className="relative h-[80vh] flex justify-center items-center bg-green-600 text-white py-20 md:py-32 text-center overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-[url('/assets/image/bghero.png')]"></div>
          <div className="container mx-auto px-6 relative z-10"> {/* Add relative z-10 */}
            <motion.h1
              variants={titleVariants}
              className="text-4xl md:text-6xl font-extrabold text-white"
            >
              Galeri Kegiatan
            </motion.h1>
            <motion.p
              variants={paragraphVariants}
              className="mt-4 text-lg text-white max-w-3xl mx-auto"
            >
              Melihat lebih dekat momen-momen berharga dan keceriaan para santri
              dalam belajar dan beraktivitas.
            </motion.p>
          </div>
        </motion.section>

        {/* Konten Galeri */}
        <section // Removed motion wrapper, items handle their own animation
           // ref={galleryRef as any} // Remove ref
           className="py-24 bg-white"
         >
           <div className="container mx-auto px-6">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
               {galeriData.map((item, index) => (
                 <GaleriItem
                   key={index}
                   {...item}
                   onClick={() => setSelectedImage(item.src)}
                   // Removed inView and delay props
                 />
               ))}
             </div>
           </div>
         </section>

        {/* Call to Action */}
        <motion.section
           variants={ctaVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: false, amount: 0.5 }}
           className="bg-gray-50 py-20"
        >
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
              className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-700 transition duration-300 transform hover:scale-105 inline-block" // Added inline-block
            >
              Daftar Sekarang
            </Link>
          </div>
        </motion.section>
      </main>

      {/* Modal Lightbox */}
      {selectedImage && (
        <motion.div // Added motion for modal animation
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
            aria-label="Close image viewer" // Added aria-label
          >
            <CloseIcon />
          </button>
          <motion.div // Added motion for inner content animation
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking image
          >
            <Image
              src={selectedImage}
              alt="Gambar Galeri Diperbesar"
              width={1200}
              height={800}
              className="rounded-lg object-contain max-h-[90vh]"
            />
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}