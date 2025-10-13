/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useRef, createRef } from "react";
import React from "react";
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

// --- Ikon SVG sebagai Komponen ---
const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-green-600"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
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

// Data untuk setiap program/kelas
const programData = [
  {
    nama: "Kelas Iqro' (Pra-Tahsin)",
    target: "Usia 4 - 7 Tahun",
    deskripsi: "Program dasar bagi santri pemula untuk mengenal huruf hijaiyah, harakat, dan cara membacanya dengan tartil sesuai kaidah dalam buku panduan Iqro' jilid 1 sampai 6.",
    fokus: ["Pengenalan Huruf Hijaiyah", "Kelancaran Membaca Jilid 1-6", "Hafalan Doa Harian & Surat Pendek", "Dasar-dasar Akhlak Islami"],
    jadwal: "Senin, Rabu, Jumat | 16:00 - 17:30 WIB",
    gambar: "/assets/image/hero.png"
  },
  {
    nama: "Kelas Tahsin & Al-Qur'an",
    target: "Usia 8 - 12 Tahun",
    deskripsi: "Program lanjutan untuk santri yang telah menyelesaikan Iqro'. Fokus pada pembenahan makharijul huruf, sifat huruf, dan hukum-hukum tajwid dasar saat membaca Al-Qur'an.",
    fokus: ["Makharijul Huruf & Sifatnya", "Hukum Tajwid (Nun Sukun, Mim Sukun, Mad)", "Praktik Bacaan Tartil Juz Amma", "Kisah-kisah Nabi"],
    jadwal: "Selasa, Kamis, Jumat | 16:00 - 17:30 WIB",
    gambar: "/assets/image/hero.png"
  },
  {
    nama: "Kelas Tahfidz (Hafalan)",
    target: "Santri Pilihan (Lulus Seleksi)",
    deskripsi: "Program khusus bagi santri yang memiliki komitmen dan kelancaran membaca untuk menghafal Al-Qur'an, dimulai dari Juz 30. Santri akan dibimbing dengan metode setoran dan muraja'ah rutin.",
    fokus: ["Setoran Hafalan Baru (Ziyadah)", "Muraja'ah (Mengulang Hafalan)", "Adab Penghafal Al-Qur'an", "Dasar-dasar Ilmu Tafsir"],
    jadwal: "Sabtu & Ahad | 09:00 - 10:30 WIB",
    gambar: "/assets/image/hero.png"
  },
];

const fasilitasData = [
    { nama: "Ruang Kelas Nyaman", deskripsi: "Dilengkapi AC dan papan tulis interaktif.", gambar: "/assets/image/hero.png" },
    { nama: "Perpustakaan Mini", deskripsi: "Koleksi buku cerita islami dan Iqro'.", gambar: "/assets/image/hero.png" },
    { nama: "Area Bermain Edukatif", deskripsi: "Tempat santri bersosialisasi dan bermain.", gambar: "/assets/image/hero.png" },
    { nama: "Musholla Bersih", deskripsi: "Untuk praktik sholat berjamaah.", gambar: "/assets/image/hero.png" },
];

const jadwalData = [
  { hari: 'Senin', waktu: '16:00 - 17:30', kegiatan: "Kelas Iqro' (Kelompok A & B)" },
  { hari: 'Selasa', waktu: '16:00 - 17:30', kegiatan: "Kelas Tahsin (Kelompok A)" },
  { hari: 'Rabu', waktu: '16:00 - 17:30', kegiatan: "Kelas Iqro' (Kelompok C & D)" },
  { hari: 'Kamis', waktu: '16:00 - 17:30', kegiatan: "Kelas Tahsin (Kelompok B)" },
  { hari: 'Jumat', waktu: '16:00 - 17:30', kegiatan: 'Kelas Gabungan (Akhlak & Kisah Nabi)' },
  { hari: 'Sabtu', waktu: '09:00 - 10:30', kegiatan: 'Kelas Tahfidz' },
  { hari: 'Ahad', waktu: '09:00 - 10:30', kegiatan: 'Kelas Tahfidz & Ekstrakurikuler Islami' },
];


export default function ProgramPage() {
    const [heroRef, heroInView] = useInView({ threshold: 0.3 });
    const [programRefs, setProgramRefs] = useState<(React.RefObject<HTMLDivElement> | ((node: any) => void))[]>([]);
    const [programInViews, setProgramInViews] = useState<boolean[]>([]);
    const [fasilitasRef, fasilitasInView] = useInView({ threshold: 0.2 });
    const [jadwalRef, jadwalInView] = useInView({ threshold: 0.2 });


    useEffect(() => {
        setProgramRefs(programData.map(() => createRef()));
    }, []);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        programRefs.forEach((ref, index) => {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setProgramInViews(prev => {
                        const newViews = [...prev];
                        newViews[index] = true;
                        return newViews;
                    });
                    observer.unobserve(entry.target);
                }
            });
            if ((ref as React.RefObject<HTMLDivElement>).current) {
                observer.observe((ref as React.RefObject<HTMLDivElement>).current!);
                observers.push(observer);
            }
        });
        return () => observers.forEach(obs => obs.disconnect());
    }, [programRefs]);


  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navbar />

      <main>
        {/* Hero Section Halaman Program */}
        <section ref={heroRef as any} className="relative h-[80vh] flex justify-center items-center bg-green-600 text-white py-20 md:py-32 text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-[url('/assets/image/bghero.png')]"></div>
            <div className="container mx-auto px-6 relative">
                <h1 className={`text-4xl md:text-6xl font-extrabold leading-tight transition-all duration-700 ${heroInView ? 'animate-fade-in-down' : 'opacity-0'}`}>
                    Program Pembelajaran
                </h1>
                <p className={`text-lg md:text-xl max-w-3xl mx-auto mt-4 transition-all duration-700 delay-200 ${heroInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    Kurikulum komprehensif yang dirancang untuk membangun generasi Qur&apos;ani yang cerdas dan berakhlak mulia secara bertahap.
                </p>
            </div>
        </section>

        {/* Detail Program */}
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 space-y-20">
                {programData.map((program, index) => (
                    <div key={index} ref={programRefs[index] as React.RefObject<HTMLDivElement>} className={`flex flex-col md:flex-row items-center gap-12 md:gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                        {/* Kolom Gambar */}
                        <div className={`md:w-5/12 transition-all duration-1000 ${programInViews[index] ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                            <Image 
                                src={program.gambar}
                                alt={`Ilustrasi ${program.nama}`}
                                width={600}
                                height={400}
                                className="rounded-lg shadow-xl object-cover"
                            />
                        </div>
                        {/* Kolom Teks */}
                        <div className={`md:w-7/12 transition-all duration-1000 delay-200 ${programInViews[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <span className="inline-block bg-green-100 text-green-800 font-semibold px-4 py-1 rounded-full mb-3">{program.target}</span>
                            <h2 className="text-3xl font-bold text-green-800 mb-4">{program.nama}</h2>
                            <p className="text-gray-600 mb-6">{program.deskripsi}</p>
                            <h3 className="font-bold mb-3">Fokus Pembelajaran:</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                {program.fokus.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircleIcon />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Jadwal Kegiatan */}
        <section ref={jadwalRef as any} className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className={`text-3xl md:text-4xl font-bold transition-all duration-700 ${jadwalInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        Jadwal Kegiatan Mingguan
                    </h2>
                    <p className={`text-gray-600 max-w-2xl mx-auto mt-4 transition-all duration-700 delay-200 ${jadwalInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        Struktur waktu belajar yang teratur untuk memaksimalkan penyerapan ilmu.
                    </p>
                </div>
                <div className={`bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-1000 ${jadwalInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <div className="divide-y divide-gray-200">
                        {/* Header Tabel */}
                        <div className="hidden md:grid grid-cols-3 gap-4 bg-green-600 text-white font-bold p-4">
                            <div>Hari</div>
                            <div>Waktu</div>
                            <div>Kegiatan</div>
                        </div>
                        {/* Isi Tabel */}
                        {jadwalData.map((item, index) => (
                             <div key={index} className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-4 items-center transition-all duration-500 delay-${index * 100} ${jadwalInView ? 'opacity-100' : 'opacity-0'}`}>
                                <div className="font-bold text-green-700 md:text-gray-800">
                                    <span className="md:hidden">Hari: </span>{item.hari}
                                </div>
                                <div className="text-gray-600">
                                    <span className="md:hidden font-semibold">Waktu: </span>{item.waktu}
                                </div>
                                <div className="text-gray-600">
                                     <span className="md:hidden font-semibold">Kegiatan: </span>{item.kegiatan}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Fasilitas Penunjang */}
        <section ref={fasilitasRef as any} className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className={`text-3xl md:text-4xl font-bold transition-all duration-700 ${fasilitasInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        Fasilitas Penunjang Belajar
                    </h2>
                    <p className={`text-gray-600 max-w-2xl mx-auto mt-4 transition-all duration-700 delay-200 ${fasilitasInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        Kami menyediakan lingkungan belajar yang aman, nyaman, dan mendukung perkembangan santri.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {fasilitasData.map((fasilitas, index) => (
                        <div key={index} className={`bg-gray-50 rounded-lg overflow-hidden shadow-lg transition-all duration-700 delay-${index * 100} ${fasilitasInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <Image src={fasilitas.gambar} alt={fasilitas.nama} width={400} height={300} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="font-bold text-lg">{fasilitas.nama}</h3>
                                <p className="text-gray-600 text-sm mt-1">{fasilitas.deskripsi}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

