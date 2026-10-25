import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import Kartu from "@/components/Kartu";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

const hobi = [
  "Bermain game",
  "Membaca buku",
  "Coding",
];

const rencana = [
  "Menuntaskan Kelas Industri UBIG sampai Semester 4",
  "Magang di perusahaan teknologi",
  "Bekerja sebagai Web Developer",
];

const jadwal = [
  { hari: "Senin", waktu: "08.00 - 10.00", kegiatan: "Membaca ulang modul" },
  { hari: "Jum'at", waktu: "19.00 - 21.00", kegiatan: "Mengerjakan tugas praktik" },
  { hari: "Minggu", waktu: "13.00 - 20.00", kegiatan: "Merekam video dan menulis laporan" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 space-y-6">
      <Hero
        nama="Agung Cahyo"
        tagline="Siswa SMK calon Junior Web Developer di Kelas Industri UBIG."
      />

      {/* Tentang Saya */}
      <Kartu judul="Tentang Saya">
        <p className="text-gray-600">
          Saya tinggal di Malang dan senang mencoba hal baru di dunia teknologi. Saya ingin bisa membuat website yang bermanfaat untuk sekolah dan UMKM di sekitar rumah.
        </p>
      </Kartu>

      {/* Hobi dan Cita-cita Berdampingan */}
      <div className="grid gap-6 md:grid-cols-2">
        <Kartu judul="Hobi">
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            {hobi.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Kartu>

        <Kartu judul="Cita-cita">
          <p className="mb-2 text-gray-600">
            Menjadi <span className="font-semibold text-gray-900">Full Stack Web Developer</span>. Langkah yang saya rencanakan:
          </p>
          <ol className="list-decimal pl-5 space-y-1 text-gray-600">
            {rencana.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </Kartu>
      </div>

      {/* Keahlian */}
      <Kartu judul="Keahlian">
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard
              key={skill.nama}
              nama={skill.nama}
              level={skill.level}
            />
          ))}
        </div>
      </Kartu>

      {/* Jadwal Belajar */}
      <Kartu judul="Jadwal Belajar">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 text-gray-700">
                <th className="py-2 px-3 font-semibold">Hari</th>
                <th className="py-2 px-3 font-semibold">Waktu</th>
                <th className="py-2 px-3 font-semibold">Kegiatan</th>
              </tr>
            </thead>
            <tbody>
              {jadwal.map((item, index) => (
                <tr key={index} className="border-b border-gray-100 text-gray-600">
                  <td className="py-2 px-3">{item.hari}</td>
                  <td className="py-2 px-3">{item.waktu}</td>
                  <td className="py-2 px-3">{item.kegiatan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Kartu>
    </main>
  );
}