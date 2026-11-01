import Link from "next/link";

export default function SkillCard({ nama, level, slug }) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-utama">{nama}</h3>
            <p className="mt-1 text-sm text-gray-600">Level: {level}</p>
            {slug && (
                <Link
                    href={`/keahlian/${slug}`}
                    className="mt-3 inline-block text-sm font-semibold text-utama hover:underline"
                >
                    Lihat detail →
                </Link>
            )}
        </div>
    );
}