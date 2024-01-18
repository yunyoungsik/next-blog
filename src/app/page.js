import Info from '../components/main/Info.js'
import Slider from '../components/main/Slider.js'
import List from '../components/main/List.js'

export default function Home() {
  return (
    <main id="main" className="container">
      <Info />
      <Slider />
      <List />
    </main>
  )
}
