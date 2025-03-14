import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Tentang Saya',
  description: 'Halaman tentang saya.',
  openGraph: {
    title: 'Tentang Saya',
    description: 'Halaman tentang saya.',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-10 text-gray-800">
      <header className="flex flex-col items-center text-center">
        <h1 className="font-extrabold text-5xl">Tentang Saya</h1>
        <div className="mt-6 w-40 h-40 border-4 border-gray-300 shadow-md">
          <Image
            src="/images/FOTO.jpg" // Pastikan path benar
            alt="Foto Profil"
            width={160}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <section className="mt-8 max-w-2xl text-center bg-gray-100 p-6 rounded-lg shadow-lg">
        <p className="text-lg leading-relaxed">
          Halloo Selamat datang di halaman ini! Saya adalah seorang pengembang web dan IoT developer yang 
          bersemangat jika deadline mendekat.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Dengan pengalaman di berbagai teknologi, saya selalu berusaha untuk terus belajar 
          dan berkembang. Selain dunia teknologi, saya juga menyukai olahraga, dan 
          <strong> TIMNAS INDONESIA.</strong>
        </p>
      </section>
    </div>
  );
}
