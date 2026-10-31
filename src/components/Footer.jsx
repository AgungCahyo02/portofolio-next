export default function Footer() {
  const tahun = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-utama py-6 text-center text-latar">
      <p>&copy; {tahun} Agung Cahyo. Dibuat dengan Next.js di Kelas Industri UBIG.
      </p>
    </footer>
  );
}