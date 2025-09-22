import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/navbar';

// Data untuk setiap program/kelas
const programData = [
  {
    nama: "Kelas Iqro' (Pra-Tahsin)",
    target: "Usia 4 - 7 Tahun",
    deskripsi: "Program dasar bagi santri pemula untuk mengenal huruf hijaiyah, harakat, dan cara membacanya dengan tartil sesuai kaidah dalam buku panduan Iqro' jilid 1 sampai 6.",
    fokus: ["Pengenalan Huruf Hijaiyah", "Kelancaran Membaca Jilid 1-6", "Hafalan Doa Harian & Surat Pendek"],
    jadwal: "Senin, Rabu, Jumat | 16:00 - 17:30 WIB",
  },
  {
    nama: "Kelas Tahsin & Al-Qur'an",
    target: "Usia 8 - 12 Tahun",
    deskripsi: "Program lanjutan untuk santri yang telah menyelesaikan Iqro'. Fokus pada pembenahan makharijul huruf, sifat huruf, dan hukum-hukum tajwid dasar saat membaca Al-Qur'an.",
    fokus: ["Makharijul Huruf & Sifatnya", "Hukum Tajwid (Nun Sukun, Mim Sukun, Mad)", "Praktik Bacaan Tartil Juz 30"],
    jadwal: "Selasa, Kamis, Jumat | 16:00 - 17:30 WIB",
  },
  {
    nama: "Kelas Tahfidz (Hafalan)",
    target: "Santri Pilihan",
    deskripsi: "Program khusus bagi santri yang memiliki komitmen dan kelancaran membaca untuk menghafal Al-Qur'an, dimulai dari Juz 30. Santri akan dibimbing dengan metode setoran dan muraja'ah rutin.",
    fokus: ["Setoran Hafalan Baru", "Muraja'ah (Mengulang Hafalan)", "Adab Penghafal Al-Qur'an"],
    jadwal: "Sabtu & Ahad | 09:00 - 10:30 WIB",
  },
];

// Komponen untuk kartu program
const ProgramCard = ({ nama, target, deskripsi, fokus, jadwal }) => (
  <div className="bg-white border border-green-200 rounded-lg shadow-lg p-8 h-full flex flex-col">
    <h3 className="text-2xl font-bold text-green-800 mb-2">{nama}</h3>
    <p className="font-semibold text-green-600 mb-4">{target}</p>
    <p className="text-gray-600 mb-6 flex-grow">{deskripsi}</p>
    <div className="mb-6">
      <h4 className="font-bold text-gray-700 mb-2">Fokus Pembelajaran:</h4>
      <ul className="space-y-2">
        {fokus.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <p className="text-sm font-semibold text-gray-800 bg-green-100 rounded-full px-4 py-2 inline-block">
        Jadwal: {jadwal}
      </p>
    </div>
  </div>
);


export default function ProgramPage() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Header & Navigasi */}
      <Navbar />

      <main>
        {/* Judul Halaman */}
        <section className="bg-white pt-12 pb-8">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-800">Program Pembelajaran</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Kurikulum kami dirancang secara bertahap untuk membangun pondasi cinta Al-Qur'an yang kuat pada diri setiap santri.</p>
          </div>
        </section>

        {/* Daftar Program */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {programData.map((program, index) => (
                <ProgramCard key={index} {...program} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-white py-20">
            <div className="container mx-auto px-6 text-center">
                 <h2 className="text-3xl font-bold text-gray-800 mb-4">Siap Menjadi Bagian dari Keluarga Besar TPQ Al-Hikmah?</h2>
                 <p className="text-gray-600 max-w-2xl mx-auto mb-8">Daftarkan putra-putri Anda sekarang dan berikan mereka hadiah terbaik berupa pendidikan Al-Qur'an yang berkualitas.</p>
                 <Link href="/pendaftaran" className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-700 transition duration-300">
                    Daftar di Sini
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
