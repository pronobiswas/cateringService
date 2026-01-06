import Header from './_component/header'
import Banner from './_component/banner'
import Ourstory from './_component/ourstory'

export default function Home() {
  return (
    <div className="w-full h-full">
      <main className="w-full h-full">
        <Header/>
        <Banner/>
        <Ourstory/>
      </main>
    </div>
  );
}
