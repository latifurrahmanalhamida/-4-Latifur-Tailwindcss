import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';

const essays = [
  { 
    id: 'esai-pertama',
    title: 'Esai Pertama', 
    content: 'Ini adalah isi lengkap dari esai pertama yang membahas tema-tema filosofis dalam kehidupan sehari-hari atuh adalah bagian dari proses pembelajaran. Setiap kegagalan mengajarkan kita sesuatu yang berharga, memperkuat karakter kita, dan memberi kita kesempatan untuk bangkit lebih kuat..',
    category: 'Filosofi',
    date: '12 Mar 2025',
    // readTime: '5 menit',
    image: '/images/filosofi.png'
  },
  { 
    id: 'esai-kedua',
    title: 'Esai Kedua', 
    content: 'Ini adalah isi lengkap dari esai kedua yang membahas perkembangan teknologi terkini dan dampaknya pada masyarakat.',
    category: 'Teknologi',
    date: '5 Mar 2025',
    // readTime: '7 menit',
    image: '/images/teknologi.png'
  },
  { 
    id: 'esai-ketiga',
    title: 'Esai Ketiga', 
    content: 'Ini adalah isi lengkap dari esai ketiga yang mengulas seni dan budaya kontemporer dalam konteks global.',
    category: 'Seni',
    date: '28 Feb 2025',
    // readTime: '10 menit',
    image: '/images/budaya.png'
  },
];

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const essay = essays.find(e => e.id === params.slug);
  if (!essay) return {};

  return {
    title: `${essay.title} | Koleksi Pemikiran`,
    description: essay.content.slice(0, 150),
    openGraph: {
      title: `${essay.title} | Koleksi Pemikiran`,
      description: essay.content.slice(0, 150),
    },
  };
}

export default function EssayPage({ params }: { params: { slug: string } }) {
    const essay = essays.find(e => e.id === params.slug);
    
    if (!essay) {
      return notFound();
    }
  
    return (
      <div className="mt-16 px-4 md:px-8 max-w-3xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-zinc-800">{essay.title}</h1>
          <p className="text-zinc-500 mt-2">{essay.date} </p>
          
          {/* Gambar berada di tengah */}
          <div className="mt-6 flex justify-center">
            <div className="w-64 h-64 overflow-hidden rounded-lg shadow-md">
              <Image 
                src={essay.image} 
                alt={essay.title} 
                width={256} 
                height={256} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>
        
        <article className="text-zinc-700 leading-relaxed">
          <p>{essay.content}</p>
        </article>
      </div>
    );
  }