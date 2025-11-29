 // src/pages/Genre.jsx
import React from "react";

const fictionBooks = [
  {
    title: "Things We Never Got Over",
    desc: "A thrilling journey into a forgotten land filled with mystery.",
    price: "Rs. 1199.99",
    img: "/images/thingswenevergot.jpg",
  },
  {
    title: "The Unhoneymooners",
    desc: "A beautifully written novel about love, loss, and hope.",
    price: "Rs. 150.00",
    img: "/images/unhoneymooners.jpg",
  },
  {
    title: "Firefly Lane",
    desc: "A heartwarming novel by Kristin Hannah about enduring friendship.",
    price: "Rs. 8393",
    img: "https://www.worldofbooks.com/cdn/shop/files/0312537077.jpg?v=1718317347&width=493",
  },
  {
    title: "Then She Was Gone",
    desc: "A mother's search for her missing daughter uncovers chilling secrets.",
    price: "Rs. 150.00",
    img: "https://www.worldofbooks.com/cdn/shop/files/1501154656.jpg?v=1718317256&width=493",
  },
  {
    title: "Silent Echoes",
    desc: "A beautifully written novel about love, loss, and hope.",
    price: "Rs. 239.99",
    img: "https://m.media-amazon.com/images/I/41OGw6eohBL._SY445_SX342_.jpg",
  },
];

const mysteryBooks = [
  {
    title: "Silent Whispers",
    tagline: "Uncover secrets buried deep in silence.",
    img: "https://m.media-amazon.com/images/I/61MamEJMllL._SY385_.jpg",
  },
  {
    title: "The Silent Patient",
    tagline: "Uncover secrets buried deep in silence.",
    img: "https://m.media-amazon.com/images/I/41j1-YNROeL._SY445_SX342_.jpg",
  },
  {
    title: "I Am Watching You",
    tagline: "Uncover secrets buried deep in silence.",
    img: "https://m.media-amazon.com/images/I/41wjMuQ02RL._SY445_SX342_.jpg",
  },
  {
    title: "Local Women Missing",
    tagline: "Uncover secrets buried deep in silence.",
    img: "https://m.media-amazon.com/images/I/41A9AvrM32L._SY445_SX342_.jpg",
  },
];

const sciFiBooks = [
  {
    title: "On the Origin of Time",
    desc: "A bold new theory of the universe—continuing the quest to understand the beginning of everything.",
    price: "Rs. 180.00",
    img: "https://m.media-amazon.com/images/I/81yo47RT-bL._SX342_.jpg",
  },
  {
    title: "Ideas That Created the Future",
    desc: "A thought-provoking collection of writings about the science that shaped our world.",
    price: "Rs. 159.99",
    img: "https://m.media-amazon.com/images/I/51ZfVIIklRL._SX342_SY445_.jpg",
  },
];

const romanceBooks = [
  {
    title: "Say You Swear",
    desc: "An emotional rollercoaster of love, heartbreak, and unexpected turns.",
    price: "Rs. 140.0",
    img: "https://m.media-amazon.com/images/I/91h0qYxL3GL._SY385_.jpg",
  },
  {
    title: "Love and Beyond",
    desc: "A romantic escape into the world of old love letters.",
    price: "Rs. 1000.00",
    img: "https://images-platform.99static.com//bVjNHSkCOPq8r-bEhNU9KUrYA_E=/fit-in/500x500/projects-files/38/3839/383955/9a8026a0-a611-4b1e-bc92-b6374c6fba84.jpg",
  },
  {
    title: "Sher-e-dil",
    desc: "A tale of courage, honor, and the fearless heart.",
    price: "Rs. 2500.00",
    img: "https://static-01.daraz.pk/p/da803f30c57519573560d43a066998a8.jpg",
  },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-white">
      {/* Genre Nav */}
      <nav className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-center gap-6">
          <a href="#fiction" className="text-green-700 font-semibold hover:text-green-500">Fiction</a>
          <a href="#mystery" className="text-green-700 font-semibold hover:text-green-500">Mystery</a>
          <a href="#sci-fi" className="text-green-700 font-semibold hover:text-green-500">Science</a>
          <a href="#romance" className="text-green-700 font-semibold hover:text-green-500">Romance</a>
        </div>
      </nav>

      {/* hero image */}
      <div className="w-full">
        <img
          src="https://www.worldofbooks.com/cdn/shop/files/Fiction_US.png?v=1744188411&width=1500"
          alt="genres hero"
          className="w-full object-cover h-44 sm:h-56"
        />
      </div>

      {/* Fiction Grid */}
      <section id="fiction" className="container mx-auto px-4 py-10">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {fictionBooks.map((b, i) => (
            <article key={i} className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 transition">
              <img src={b.img} alt={b.title} className="w-full h-64 object-cover" />
              <div className="p-4 flex flex-col h-full">
                <h3 className="font-semibold text-lg">{b.title}</h3>
                <p className="text-gray-600 text-sm my-2 flex-1">{b.desc}</p>
                <div className="text-yellow-400 mb-2">⭐️⭐️⭐️⭐️☆</div>
                <div className="font-bold">{b.price}</div>
                <button className="mt-3 w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded">Buy Now</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Mystery Row (cards style) */}
      <section id="mystery" className="py-10 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-6">Mystery And Murder Books</h2>
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-6">
          {mysteryBooks.map((m, i) => (
            <div key={i} className="w-44 bg-white rounded-lg shadow p-2 transform hover:-translate-y-1 transition">
              <img src={m.img} alt={m.title} className="w-full h-56 object-cover rounded" />
              <div className="p-2">
                <h4 className="font-semibold text-sm mt-2">{m.title}</h4>
                <p className="text-gray-600 text-xs mb-2">{m.tagline}</p>
                <button className="w-full bg-green-600 text-white py-1 rounded text-sm">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Science Section */}
      <section id="sci-fi" className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-center mb-6">Science</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          {sciFiBooks.map((b, i) => (
            <article key={i} className="bg-white rounded-lg shadow overflow-hidden">
              <img src={b.img} alt={b.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{b.title}</h3>
                <p className="text-gray-600 text-sm my-2">{b.desc}</p>
                <div className="text-yellow-400">⭐️⭐️⭐️⭐️⭐️</div>
                <div className="font-bold mt-2">{b.price}</div>
                <button className="mt-3 w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded">Buy Now</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Romance */}
      <section id="romance" className="py-10 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-6">Romance</h2>
        <div className="container mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {romanceBooks.map((b, i) => (
            <article key={i} className="bg-white rounded-xl shadow overflow-hidden">
              <img src={b.img} alt={b.title} className="w-full h-64 object-cover" />
              <div className="p-4 flex flex-col">
                <h3 className="font-semibold">{b.title}</h3>
                <p className="text-gray-600 text-sm my-2 flex-1">{b.desc}</p>
                <div className="font-bold">{b.price}</div>
                <button className="mt-3 w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded">Buy Now</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
