import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/navbar';

// Data dummy untuk tim pengajar. Anda bisa menggantinya dengan data asli.
const pengajarData = [
  {
    nama: 'Ustadz Abdullah, S.Pd.I.',
    jabatan: 'Kepala TPQ & Pengajar Tahsin',
    foto: 'https://placehold.co/400x400/a0aec0/ffffff?text=Ustadz+A.',
  },
  {
    nama: 'Ustadzah Fatimah, A.Ma.',
    jabatan: 'Pengajar Iqro\' & Hafalan',
    foto: 'https://placehold.co/400x400/a0aec0/ffffff?text=Ustadzah+F.',
  },
  {
    nama: 'Ustadzah Maryam, S.Ag.',
    jabatan: 'Pengajar Akhlak & Doa Harian',
    foto: 'https://placehold.co/400x400/a0aec0/ffffff?text=Ustadzah+M.',
  },
];

// Komponen untuk kartu pengajar
const PengajarCard = ({ nama, jabatan, foto }: any) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
    <div className="relative h-60 w-full">
      <Image
        src={foto}
        alt={`Foto ${nama}`}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="p-6">
      <h3 className="font-bold text-xl text-gray-800">{nama}</h3>
      <p className="text-green-700 font-semibold">{jabatan}</p>
    </div>
  </div>
);

export default function TentangKamiPage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header & Navigasi (Sama seperti Homepage) */}
      <Navbar />

      <main>
        {/* Judul Halaman */}
        <section className="bg-green-50 py-12">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-800">Tentang TPQ Al-Hikmah</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Mengenal lebih dekat lembaga pendidikan Al-Qur'an yang berdedikasi untuk mencetak generasi Rabbani.</p>
          </div>
        </section>

        {/* Visi & Misi */}
        <section className="py-20">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Visi Kami</h2>
              <p className="text-gray-600 mb-6 text-lg">
                "Menjadi lembaga pendidikan Al-Qur'an terdepan yang melahirkan generasi cinta Al-Qur'an, cerdas, dan berakhlak mulia."
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Misi Kami</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span>Menyelenggarakan pembelajaran Al-Qur'an yang efektif dan menyenangkan dengan metode yang mudah dipahami.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span>Menanamkan nilai-nilai akhlakul karimah dalam setiap kegiatan belajar mengajar.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span>Membina santri untuk memiliki hafalan doa harian dan surat-surat pendek sebagai bekal ibadah.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Sejarah Singkat */}
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <Image
                        src="https://placehold.co/600x400/e8f5e9/333333?text=TPQ+Al-Hikmah"
                        alt="Gedung TPQ Al-Hikmah"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-xl"
                    />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Sejarah Singkat</h2>
                    <p className="text-gray-600 mb-4">
                        TPQ Al-Hikmah didirikan pada tahun 2010 atas keprihatinan tokoh masyarakat akan pentingnya pendidikan Al-Qur'an sejak dini. Berawal dari sebuah ruang kecil di masjid, kami berkomitmen untuk memberikan akses belajar mengaji yang berkualitas bagi anak-anak di lingkungan sekitar.
                    </p>
                    <p className="text-gray-600">
                        Alhamdulillah, berkat dukungan dan kepercayaan dari para orang tua, TPQ Al-Hikmah terus berkembang dan kini memiliki fasilitas yang lebih memadai untuk mendukung proses belajar yang lebih optimal.
                    </p>
                </div>
            </div>
        </section>

        {/* Tim Pengajar */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Kenali Tim Pengajar Kami</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4">Putra-putri Anda akan dibimbing oleh para asatidz yang tidak hanya ahli di bidangnya, tetapi juga tulus dalam mendidik.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {pengajarData.map((pengajar) => (
                <PengajarCard key={pengajar.nama} {...pengajar} />
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer (Sama seperti Homepage) */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-6 text-center">
          <p>&copy; {new Date().getFullYear()} TPQ Al-Hikmah. Semua Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}