import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Esai | Koleksi Pemikiran',
  description: 'Daftar esai yang telah ditulis dengan berbagai topik menarik.',
  openGraph: {
    title: 'Esai | Koleksi Pemikiran',
    description: 'Daftar esai yang telah ditulis dengan berbagai topik menarik.',
  },
};

const essays = [
  { 
    id: 'esai-pertama',
    title: 'Esai Pertama', 
    description: 'Deskripsi singkat tentang esai pertama yang mengeksplorasi tema-tema filosofis dalam kehidupan sehari-hari.',
    category: 'Filosofi',
    date: '12 Mar 2025',
    readTime: '17 menit',
    imageColor: 'bg-blue-100'
  },
  { 
    id: 'esai-kedua',
    title: 'Esai Kedua', 
    description: 'Deskripsi singkat tentang esai kedua yang membahas perkembangan teknologi terkini dan dampaknya pada masyarakat.',
    category: 'Teknologi',
    date: '5 Mar 2025', 
    readTime: '7 menit',
    imageColor: 'bg-green-100'
  },
  { 
    id: 'esai-ketiga',
    title: 'Esai Ketiga', 
    description: 'Deskripsi singkat tentang esai ketiga yang mengulas seni dan budaya kontemporer dalam konteks global.',
    category: 'Seni',
    date: '28 Feb 2025', 
    readTime: '10 menit',
    imageColor: 'bg-amber-100'
  },
];

export default function EsaiPage() {
  return (
    <div className="mt-16 px-4 md:px-8 max-w-6xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="font-bold text-4xl md:text-5xl text-zinc-800 mb-4">Koleksi Esai</h1>
        <p className="text-zinc-600 md:text-lg max-w-2xl mx-auto">
          Kumpulan pemikiran dan ide yang dikemas dalam bentuk esai, menjelajahi berbagai topik menarik dari filosofi hingga teknologi.
        </p>
        <div className="mt-6 flex justify-center">
          <div className="inline-flex p-1 bg-zinc-100 rounded-full">
            <span className="px-4 py-2 text-sm font-medium text-zinc-800">
              Disajikan dengan penuh inspirasi
            </span>
          </div>
        </div>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {essays.map((essay, index) => (
          <Link href={`/essays/${essay.id}`} key={index} className="group block h-full">
            <div className="h-full border border-zinc-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white flex flex-col">
              <div className={`h-48 ${essay.imageColor} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center bg-white/30 backdrop-blur-sm">
                    <span className="text-4xl font-bold text-zinc-800 opacity-50">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-zinc-800">
                    {essay.category}
                  </span>
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-zinc-500 mb-3">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{essay.date}</span>
                  <span className="mx-2">•</span>
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{essay.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold text-zinc-800 mb-2 group-hover:text-zinc-600 transition-colors">
                  {essay.title}
                </h2>
                
                <p className="text-zinc-600 text-sm mb-4 flex-grow">
                  {essay.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-zinc-100">
                  <span className="inline-flex items-center text-sm font-medium text-zinc-800 group-hover:text-zinc-600 transition-colors">
                    Baca selengkapnya 
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* <div className="mt-16 text-center">
        <p className="text-zinc-500 mb-4">Ingin membaca lebih banyak esai?</p>
        <Link href="/arsip" className="inline-flex items-center px-6 py-3 mb-6 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 transition-colors">
          Lihat Arsip Esai
          <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      </div> */}
    </div>
  );
}