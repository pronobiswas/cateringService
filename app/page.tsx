
import Header from './_component/header'
import Banner from './_component/banner'
import Ourstory from './_component/ourstory'
import Howitworks from './_component/howitworks'
import Foodmenu from './_component/foodmenu'
// import AppPreview from './_component/appPreview'
import Appview2 from './_component/appview2';
import Rolesection from './_component/rolesection'
import Eventslider from './_component/eventslider'
import Trustandsefty from './_component/trustandsefty'
import Contactform from './_component/contactform'
import Footer from './_component/footer'

export default function Home() {

  return (
    <div className="w-full h-full">
      <main className="w-full h-full">
        <Banner />
        <Ourstory />
        <Howitworks />
        <Foodmenu />
        {/* <AppPreview /> */}
        <Appview2 />
        <Rolesection />
        <Eventslider />
        <Trustandsefty />
        <Contactform />
        <Footer />
      </main>
    </div>
  );
}
