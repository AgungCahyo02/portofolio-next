"use client";

import { useState } from "react";

const kelasInput =
  "mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-utama";

export default function FormKontak() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});

  function kirim(e) {
    e.preventDefault();
    const errorBaru = {};

    if (nama.trim() === "") {
      errorBaru.nama = "Nama wajib diisi.";
    }
    if (!email.includes("@")) {
      errorBaru.email = "Email harus memuat tanda @, contoh nama@gmail.com.";
    }

    setError(errorBaru);
  }

  return (
    <>
      <form onSubmit={kirim} noValidate className="space-y-4">
        <div>
          <label htmlFor="nama" className="block font-semibold text-gray-700 dark:text-gray-300">
            Nama lengkap
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Contoh: Budi Santoso"
            className={kelasInput}
          />
          {error.nama && <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.nama}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block font-semibold text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nama@gmail.com"
            className={kelasInput}
          />
          {error.email && <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.email}</p>}
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
            className={kelasInput}
          />
        </div>

        <div>
          <label htmlFor="keperluan" className="block font-semibold text-gray-700 dark:text-gray-300">
            Keperluan
          </label>
          <select id="keperluan" name="keperluan" className={kelasInput}>
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
            className={kelasInput}
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
    </>
  );
}