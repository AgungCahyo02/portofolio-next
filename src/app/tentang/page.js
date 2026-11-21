import Kartu from "@/components/Kartu";
import { supabase } from "@/lib/supabase";

export const metadata = {
  title: "Tentang",
  description: "Cerita, hobi, cita-cita, dan jadwal belajar Agung Cahyo.",
};

const hobi = [
  "Bermain game",
  "Membaca buku",
  "Ngoding",
];

const rencana = [
  "Menuntaskan Kelas Industri UBIG sampai Semester 4",
  "Magang di perusahaan teknologi",
  "Bekerja sebagai Web Developer",
];

export default async function Tentang() {
  const { data: jadwal } = await supabase
    .from("jadwal")
    .select("*")
    .order("id");

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-primary md:text-4xl">
        Tentang Saya
      </h1>

      {/* Kartu Perkenalan (Sebelumnya judulnya 'Tentang Saya') */}
      <Kartu judul="Perkenalan">
        <p className="text-muted-foreground">
          Saya tinggal di Malang dan senang mencoba hal baru di dunia teknologi. Saya ingin bisa membuat website yang bermanfaat untuk sekolah dan UMKM di sekitar rumah.
        </p>
      </Kartu>

      {/* Hobi dan Cita-cita */}
      <div className="grid gap-6 md:grid-cols-2">
        <Kartu judul="Hobi">
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            {hobi.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Kartu>

        <Kartu judul="Cita-cita">
          <p className="mb-2 text-muted-foreground">
            Menjadi <span className="font-semibold text-foreground">Full Stack Web Developer</span>. Langkah yang saya rencanakan:
          </p>
          <ol className="list-decimal pl-5 space-y-1 text-muted-foreground">
            {rencana.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </Kartu>
      </div>

      {/* Jadwal Belajar */}
      <Kartu judul="Jadwal Belajar">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-utama text-white">
                <th className="py-2.5 px-4 font-semibold">Hari</th>
                <th className="py-2.5 px-4 font-semibold">Waktu</th>
                <th className="py-2.5 px-4 font-semibold">Kegiatan</th>
              </tr>
            </thead>
            <tbody>
              {jadwal && jadwal.map((item) => (
                <tr key={item.id} className="border-b border-border text-muted-foreground">
                  <td className="py-2.5 px-4">{item.hari}</td>
                  <td className="py-2.5 px-4">{item.waktu}</td>
                  <td className="py-2.5 px-4">{item.kegiatan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Kartu>
    </main>
  );
}