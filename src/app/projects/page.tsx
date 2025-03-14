import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Proyek Saya',
  description: 'Kumpulan proyek yang telah saya kembangkan.',
  openGraph: {
    title: 'Proyek Saya',
    description: 'Kumpulan proyek yang telah saya kembangkan.',
  },
};

type ProjectItemProps = {
  name: string;
  description: string;
  url: string;
  imageSrc: string;
  category: string;
  categoryColor: string;
  tags: string[];
};

function ProjectItem({ name, description, url, imageSrc, category, categoryColor, tags }: ProjectItemProps) {
  return (
    <div className="max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Gambar proyek */}
      <div className="relative w-full h-[250px]"> {/* Sesuaikan ukuran */}
        <Image 
          src={imageSrc} 
          alt={name} 
          layout="fill" 
          objectFit="cover" 
          objectPosition="center" // Pastikan gambar portrait tetap fokus di tengah
        />
      </div>

      {/* Konten proyek */}
      <div className="p-6">
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColor}`}>
          {category}
        </span>

        <h3 className="mt-4 text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-gray-600 mt-2">{description}</p>

        {/* Teknologi yang digunakan */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>

        {/* Link detail */}
        <a href={url} className="mt-4 block text-blue-500 font-medium hover:underline">
          Lihat detail →
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="min-h-screen bg-white px-8 py-16">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-zinc-800">
          Proyek <span className="underline decoration-blue-500">Saya</span>
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Kumpulan proyek yang telah saya kembangkan. Eksplorasi karya dan solusi teknologi yang telah saya buat untuk berbagai kebutuhan.
        </p>
      </header>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        <ProjectItem
          name="SISTEM PEMBERIKAN MAKAN MINUM BERBASIS IOT"
          description="Aplikasi berbasis mobile yang digunakan untuk meng kontrol alat iot serta melihat kondisi alat apakah menyala atupun tidak mati."
          url="https://example.com"
          imageSrc="/images/project1.png"
          category="Mobile Apps"
          categoryColor="bg-yellow-100 text-yellow-700"
          tags={[]}
        />
        <ProjectItem
          name="WEBSITE MONITORING KANDANG AYAM"
          description="Website untuk memantau kondisi kandang ayam serta melihat data dari sensor yang telah diaplikasikan dalam kandang ayam."
          url="https://example.com"
          imageSrc="/images/project2.png"
          category="Website Laravel"
          categoryColor="bg-blue-100 text-blue-700"
          tags={[]}
        />
      </div>
    </div>
  );
}
