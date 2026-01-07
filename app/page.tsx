import Header from './_component/header'
import Banner from './_component/banner'
import Ourstory from './_component/ourstory'
import Foodmenu from './_component/foodmenu'

export default function Home() {
  return (
    <div className="w-full h-full">
      <main className="w-full h-full">
        <Header/>
        <Banner/>
        <Ourstory/>
        <Foodmenu/>
      </main>
    </div>
  );
}
