import Banner from './_component/banner'
import Ourstory from './_component/ourstory'

export default function Home() {
  return (
    <div className="w-full h-full">
      <main className="w-full h-full">
        <Banner/>
        <Ourstory/>
      </main>
    </div>
  );
}
