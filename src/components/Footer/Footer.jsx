import React from "react";

export default function Footer() {
  return (
    <footer className="bg-yellow-400 text-black mt-8 py-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h4 className="font-bold">ToyTopia</h4>
          <p>Discover & support local toy sellers.</p>
        </div>
        <div>
          <h4 className="font-bold">Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Profile</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Follow Us</h4>
          <div className="flex gap-2 mt-2">
            <a className="btn btn-circle btn-ghost">FB</a>
            <a className="btn btn-circle btn-ghost">IG</a>
            <a className="btn btn-circle btn-ghost">X</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">© {new Date().getFullYear()} ToyTopia</div>
    </footer>
  );
}
