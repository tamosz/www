import './App.css';
import Typical from 'react-typical'
import portrait from './/img/portrait.png'

function App() {
  return (
    <main class="max-h-screen overflow-y-scroll snap snap-y snap-mandatory">
  <section class="flex items-center justify-center w-full h-screen bg-indigo-200 snap-start">
  <strong className="bg-white-400 px-1 text-7xl">
        <Typical
             steps={[
                  'tomasz',
                  1000,
                  'tome',
                  1000,
                  'tommy',
                  1000,
                  'tom',
                  1000,
                  'tamosz',
                  1000,
                ]}
                wrapper="p"
                loop={Infinity}
        />
  </strong>
  </section>
  <section class="flex items-center justify-center w-full h-screen snap-start grid grid-cols-5 gap-3 text-center">
    <div class="bg-blue-100">
      <img src={portrait} alt="Me" class="rounded-full self-center"/>
      <a href="https://github.com/tamosz" class="no-underline hover:underline">github</a>
    </div>
    <div class="bg-red-100 col-span-4">2nd col</div>
  </section>
  <section class="w-full h-screen bg-green-200 snap-start">
    Section 3
  </section>
  <section class="w-full h-screen bg-indigo-200 snap-start">
    Section 4
  </section>
  <section class="w-full h-screen bg-yellow-200 snap-start">
    made with &#10084;&#65039; in react using tailwindcss
    text animation with react-typical
  </section>
</main>
  )
}

export default App;
