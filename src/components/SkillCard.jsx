import Link from "next/link";

export default function SkillCard({ nama, level, slug }) {
    return (
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-primary">{nama}</h3>
            <p className="mt-1 text-sm text-muted-foreground">Level: {level}</p>
            {slug && (
                <Link
                    href={`/keahlian/${slug}`}
                    className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
                >
                    Lihat detail →
                </Link>
            )}
        </div>
    );
}