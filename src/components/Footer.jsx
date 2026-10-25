export default function Footer() {
  const tahunSekarang = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-utama py-4 text-center text-sm text-white">
      <p>
        &copy; {tahunSekarang} Agung Cahyo. Dibuat dengan Next.js di Kelas Industri UBIG.
      </p>
    </footer>
  );
}