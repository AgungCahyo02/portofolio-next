import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProyekCard({ proyek }) {
  // Memecah teks "HTML, CSS, JavaScript" menjadi daftar kategori terpisah
  const daftarKategori = proyek.kategori
    ? proyek.kategori.split(",").map((item) => item.trim())
    : [];

  return (
    <Link href={`/proyek/${proyek.slug}`} className="block rounded-xl hover:shadow-md">
      <Card className="h-full">
        <Image
          src={proyek.gambar_url}
          alt={`Tangkapan layar ${proyek.judul}`}
          width={640}
          height={420}
          loading="eager"
          className="h-auto w-full"
        />
        <CardHeader>
          <div className="flex flex-wrap gap-1.5">
            {daftarKategori.map((kat) => {
              const varian = ["html", "css", "javascript"].includes(kat.toLowerCase())
                ? kat.toLowerCase()
                : "secondary";

              return (
                <Badge key={kat} variant={varian}>
                  {kat}
                </Badge>
              );
            })}
          </div>
          <CardTitle className="text-lg text-primary">{proyek.judul}</CardTitle>
          <CardDescription>{proyek.deskripsi}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}