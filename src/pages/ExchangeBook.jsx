 // src/pages/ExchangeBook.jsx
import React, { useState, useEffect } from "react";

 

export default function ExchangeBook() {
  // user (simple signup)
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("shelfshare_user")) || null;
    } catch {
      return null;
    }
  });

  const [signup, setSignup] = useState({ name: "", email: "", phone: "" });

  // books (exchange listings)
  const [books, setBooks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("shelfshare_exchange_books")) || [];
    } catch {
      return [];
    }
  });

  // add-book form & image preview
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    condition: "Good",
    location: "",
    desc: "",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    localStorage.setItem("shelfshare_exchange_books", JSON.stringify(books));
  }, [books]);

  useEffect(() => {
    localStorage.setItem("shelfshare_user", JSON.stringify(user));
  }, [user]);

  // Signup handlers
  const handleSignupChange = (e) =>
    setSignup((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSignup = (e) => {
    e.preventDefault();
    if (!signup.name || !signup.email) {
      alert("Please add name and email");
      return;
    }
    setUser({ ...signup });
    setSignup({ name: "", email: "", phone: "" });
  };

  const handleSignout = () => {
    setUser(null);
    localStorage.removeItem("shelfshare_user");
  };

  // Image preview
  const handleImageChange = (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) {
      setImageFile(null);
      setImagePreview(null);
      return;
    }
    setImageFile(f);
    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result);
    reader.readAsDataURL(f);
  };

  // Add book
  const handleAddBook = (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please sign up / login before adding a book.");
      return;
    }
    if (!form.title || !form.author) {
      alert("Please fill title and author.");
      return;
    }
    const newBook = {
      id: Date.now(),
      owner: user.name,
      ...form,
      img: imagePreview, // dataURL (prototype). Later send file to backend.
      createdAt: new Date().toISOString(),
    };
    setBooks((b) => [newBook, ...b]);
    // reset
    setForm({ title: "", author: "", genre: "", condition: "Good", location: "", desc: "" });
    setImageFile(null);
    setImagePreview(null);
    // reset file input manually (no direct DOM here; user can re-select)
  };

  // small helper
  const removeBook = (id) => {
    if (!confirm("Remove this listing?")) return;
    setBooks((b) => b.filter((x) => x.id !== id));
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-100 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="rounded-lg p-8 bg-white shadow">
            <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">ShelfShare — Exchange & Share Books</h1>
            <p className="text-gray-700">
              Join the Book Swapping Network: sign up, add books with pictures, and connect with readers nearby.
              This page focuses on Book Sharing, Swapping, Community reviews, and notes (prototype).
            </p>
          </div>
        </div>
      </section>

      {/* Signup + Add Book (responsive two-column) */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Signup / Profile */}
          <div className="col-span-1 bg-white rounded-lg p-6 shadow">
            {!user ? (
              <>
                <h2 className="text-lg font-semibold text-green-700 mb-3">Sign up to Exchange</h2>
                <form onSubmit={handleSignup} className="space-y-3">
                  <input name="name" value={signup.name} onChange={handleSignupChange}
                         className="w-full border rounded px-3 py-2" placeholder="Full name" />
                  <input name="email" value={signup.email} onChange={handleSignupChange}
                         className="w-full border rounded px-3 py-2" placeholder="Email" type="email" />
                  <input name="phone" value={signup.phone} onChange={handleSignupChange}
                         className="w-full border rounded px-3 py-2" placeholder="Phone (optional)" />
                  <button className="w-full bg-green-700 text-white py-2 rounded">Sign up</button>
                </form>
                <p className="text-xs text-gray-500 mt-3">Signing up here is local (stored in browser). We'll add backend auth later.</p>
              </>
            ) : (
              <>
                <h2 className="text-lg font-semibold text-green-700 mb-2">Welcome, {user.name}</h2>
                <p className="text-sm text-gray-600">Email: {user.email}</p>
                {user.phone && <p className="text-sm text-gray-600">Phone: {user.phone}</p>}
                <div className="mt-4 space-y-2">
                  <button onClick={() => alert("Profile area — later can edit profile")} className="w-full border rounded px-3 py-2">Edit profile</button>
                  <button onClick={handleSignout} className="w-full bg-red-500 text-white py-2 rounded">Sign out</button>
                </div>
              </>
            )}
          </div>

          {/* Add Book form (shows even if not signed but will require signup) */}
          <div className="col-span-2 bg-white rounded-lg p-6 shadow">
            <h2 className="text-lg font-semibold text-green-700 mb-3">List a Book for Exchange</h2>
            <form onSubmit={handleAddBook} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input value={form.title} onChange={(e) => setForm(s => ({...s, title: e.target.value}))}
                     placeholder="Book title" className="col-span-2 border rounded px-3 py-2" />
              <input value={form.author} onChange={(e) => setForm(s => ({...s, author: e.target.value}))}
                     placeholder="Author" className="border rounded px-3 py-2" />
              <input value={form.genre} onChange={(e) => setForm(s => ({...s, genre: e.target.value}))}
                     placeholder="Genre (e.g. Fiction)" className="border rounded px-3 py-2" />
              <select value={form.condition} onChange={(e) => setForm(s => ({...s, condition: e.target.value}))}
                      className="border rounded px-3 py-2">
                <option>New</option>
                <option>Like new</option>
                <option>Good</option>
                <option>Fair</option>
              </select>
              <input value={form.location} onChange={(e) => setForm(s => ({...s, location: e.target.value}))}
                     placeholder="City / Area" className="border rounded px-3 py-2" />
              <input type="text" value={form.desc} onChange={(e) => setForm(s => ({...s, desc: e.target.value}))}
                     placeholder="Short description" className="border rounded px-3 py-2" />
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Book photo</label>
                <input type="file" accept="image/*" onChange={handleImageChange} className="mb-2" />
                {imagePreview ? (
                  <img src={imagePreview} alt="preview" className="w-44 h-44 object-cover rounded shadow" />
                ) : (
                  <div className="w-44 h-44 bg-gray-100 flex items-center justify-center text-gray-400 rounded">No image</div>
                )}
              </div>

              <div className="col-span-2 flex gap-3 mt-2">
                <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">Add Listing</button>
                <button type="button" onClick={() => { setForm({ title: "", author: "", genre: "", condition: "Good", location: "", desc: ""}); setImagePreview(null); }} className="border px-4 py-2 rounded">Reset</button>
              </div>
            </form>

            <p className="text-xs text-gray-500 mt-3">Tip: sign up first to attach listings to your name. Images are stored locally for prototype; later upload them to your backend.</p>
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-4">Exchange Listings</h2>
        {books.length === 0 ? (
          <div className="bg-white p-6 rounded shadow text-gray-600">No listings yet — be the first to add a book!</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {books.map((b) => (
              <div key={b.id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="w-full h-56 bg-gray-100 flex items-center justify-center">
                  {b.img ? (
                    <img src={b.img} alt={b.title} className="w-full h-56 object-cover" />
                  ) : (
                    <div className="text-gray-400">No image</div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{b.title}</h3>
                  <p className="text-sm text-gray-600">{b.author} • {b.genre || "—"}</p>
                  <p className="text-sm text-gray-700 mt-2">{b.desc}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-xs text-gray-500">Owner: {b.owner}</div>
                    <div className="text-sm font-semibold">{b.condition}</div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button onClick={() => alert("Contact owner — future feature")} className="flex-1 bg-blue-600 text-white py-2 rounded text-sm">Contact</button>
                    <button onClick={() => removeBook(b.id)} className="bg-red-500 text-white px-3 py-2 rounded text-sm">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Footer will be rendered by App.js (recommended) */}
    </main>
  );
}
