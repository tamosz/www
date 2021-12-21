import './App.css';
import Typical from 'react-typical'
import portrait from './/img/portrait.png'

function App() {
  return (
    <main class="max-h-screen overflow-y-scroll snap snap-y snap-mandatory">
  <section class="flex items-center justify-center w-full h-screen bg-indigo-200 snap-start">
  <strong className="bg-white-400 px-1 text-7xl font-sans">
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
    <div class="px-2">
      <img src={portrait} alt="Me" class="rounded-full self-center"/>
      <a href="https://github.com/tamosz" class="no-underline hover:underline font-mono text-xs">visit my github</a>
    </div>
    <div class="col-span-4 font-sans text-justify px-10">
      <p>Hi there! I’m Tom. I’m a passionate introvert who loves building things with code. 
        I've been attracted to programming since I was 12, due to my love of the internet, 
        computers, and gaming. I just wanted to know more about how everything worked, how 
        computers could do all the amazing things they can do. So, I downloaded a PDF of C++ 
        programming fundamentals, recommended to me in an IRC channel. It was several 
        hundred pages, and totally inscrutable to me. </p>
                <br></br>
      <p>After several years, and a few false starts at University later I decided to try again.
         It was a radically different experience. Online resources have come such a long way. Since then, I’ve been honing my skills 
         and learning JavaScript. I recently graduated from Open Polytechnic's NZ Web Development 
         and Design Diploma.</p> 
                <br></br>
      <p>I’m seeking a full-time role where I can help a company achieve their goals, and learn 
        from real developers to grow my skills and further my understanding of the digital world.</p>
</div>
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
