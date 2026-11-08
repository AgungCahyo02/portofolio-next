import FormKontak from "@/components/FormKontak";

export const metadata = {
  title: "Kontak",
  description: "Hubungi Agung Cahyo melalui form kontak, email, atau GitHub.",
};

export default function Kontak() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">
          Hubungi Saya
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {/* Formulir Kontak (Mengambil 2 Kolom) */}
        <div className="rounded-xl border border-gray-100 bg-white dark:bg-gray-800 p-6 shadow-sm md:col-span-2">
          <form className="space-y-4">
            <div>
              <label htmlFor="nama" className="block font-semibold text-gray-700 dark:text-gray-300">
                Nama lengkap
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                placeholder="Contoh: Budi Santoso"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-utama"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="nama@gmail.com"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-utama"
              />
            </div>

            <div>
              <label htmlFor="hp" className="block font-semibold text-gray-700 dark:text-gray-300">
                Nomor HP
              </label>
              <input
                type="tel"
                id="hp"
                name="hp"
                placeholder="081234567890"
                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-utama"
              />
            </div>

            <div>
              <label htmlFor="keperluan" className="block font-semibold text-gray-700 dark:text-gray-300">
                Keperluan
              </label>
              <select
                id="keperluan"
                name="keperluan"
                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-utama"
              >
                <option value="">-- Pilih keperluan --</option>
                <option value="pertanyaan">Pertanyaan</option>
                <option value="kerjasama">Kerja Sama / Proyek</option>
                <option value="lainnya">Lainnya</option>
              </select>
            </div>

            <div>
              <label htmlFor="pesan" className="block font-semibold text-gray-700 dark:text-gray-300">
                Pesan
              </label>
              <textarea
                id="pesan"
                name="pesan"
                rows={5}
                maxLength={300}
                placeholder="Tulis pesanmu di sini"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-utama"
              />
            </div>

            <button
              type="submit"
              className="rounded-lg bg-red-600 px-5 py-2 font-semibold text-white transition-colors hover:bg-red-700"
            >
              Kirim Pesan
            </button>
          </form>

          <p className="mt-4 text-xs text-gray-500">
            *Formulir belum mengirim pesan. Pengiriman pesan dipelajari di Minggu 15.
          </p>
        </div>

        {/* Kotak Temukan Saya di (Tinggi otomatis memanjang penuh) */}
        <div className="rounded-xl border border-gray-100 bg-white dark:bg-gray-800 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-utama dark:text-sky-200">Temukan Saya di</h2>
          <div className="mt-4 space-y-2">
            <a
              href="https://github.com/AgungCahyo02"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-semibold text-red-600 hover:underline"
            >
              GitHub &rarr;
            </a>
            <a
              href="mailto:agungrplkanesa@gmail.com"
              className="block font-semibold text-red-600 hover:underline"
            >
              agungrplkanesa@gmail.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}