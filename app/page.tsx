import Header from './_component/header'
import Banner from './_component/banner'
import Ourstory from './_component/ourstory'
import Foodmenu from './_component/foodmenu'
import Eventslider from './_component/eventslider'
// import SpecialEvent from './_component/specialevent'
import Footer from './_component/footer'

export default function Home() {
  return (
    <div className="w-full h-full">
      <main className="w-full h-full">
        <Header/>
        <Banner/>
        <Ourstory/>
        <Foodmenu/>
        {/* <SpecialEvent/> */}
        <Eventslider/>
        <Footer/>
      </main>
    </div>
  );
}
