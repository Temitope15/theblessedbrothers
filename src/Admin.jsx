// src/Admin.jsx
import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function Admin() {
  const [imageUrl, setImageUrl] = useState("");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simple hardcoded password protection
  const handleLogin = () => {
    
    const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD;
  
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Wrong password");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageUrl) return;
    setLoading(true);

    try {
      await addDoc(collection(db, "gallery"), {
        imageUrl,
        details,
        createdAt: serverTimestamp(),
      });
      alert("Image added successfully!");
      setImageUrl("");
      setDetails("");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error adding image");
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-8 bg-white rounded shadow-md">
          <h2 className="text-xl font-serif mb-4">Admin Access</h2>
          <input 
            type="password" 
            placeholder="Enter Password" 
            className="border p-2 w-full mb-4"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} className="bg-primary text-white px-4 py-2 rounded">
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-xl border-t-4 border-accent">
      <h2 className="text-3xl font-serif text-primary mb-6">Update Gallery</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">ImgBB Direct Link</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://i.ibb.co/..."
            className="mt-1 block w-full p-3 border border-gray-300 rounded focus:border-accent focus:ring-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Caption / Event Details</label>
          <input
            type="text"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="e.g. 2025 General Meeting"
            className="mt-1 block w-full p-3 border border-gray-300 rounded focus:border-accent focus:ring-accent"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-primary hover:bg-primary-light text-white font-bold py-3 px-4 rounded transition-colors"
        >
          {loading ? "Saving..." : "Add Photo to Website"}
        </button>
      </form>
    </div>
  );
}

export default Admin;