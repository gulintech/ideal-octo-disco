import Header from '@/app/_components/Header';
import Body from '@/app/_components/Body';
import Footer from '@/app/_components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col ">
      <Header/>
      <Body/>
      <Footer/>
    </main>
  );
}
