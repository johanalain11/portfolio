import Hero from '../components/Hero';
import NavbarComponent from '@/components/Navbar';

export default function Home() {
  return (
    <main className="relative bg-black-100 items-center justify-center flex-col overflow-hidden w-full">
      <div className="w-full">
        <NavbarComponent />
        <Hero />
      </div>
    </main>
  );
}
