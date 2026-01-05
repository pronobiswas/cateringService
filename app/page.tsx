import Banner from './_component/banner'
import NewBanner from './_component/newbanner'

export default function Home() {
  return (
    <div className="w-full h-full">
      <main className="w-full h-full">
        <Banner/>
        <NewBanner/>
      </main>
    </div>
  );
}
