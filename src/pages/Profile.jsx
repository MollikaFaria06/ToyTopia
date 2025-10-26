import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Profile() {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  useEffect(() => {
    document.title = "ToyTopia | My Profile";
    setName(user?.displayName || "");
    setPhotoURL(user?.photoURL || "");
  }, [user]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const onSave = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile({ displayName: name, photoURL });
      Swal.fire("Updated", "Profile updated successfully", "success");
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  if (!user) return null;

  return (
    <div
      className="max-w-lg mx-auto bg-yellow-200 p-6 rounded shadow"
      data-aos="fade-up"
    >
      <h2
        className="text-3xl text-blue-800 font-bold mb-4"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        My Profile
      </h2>
      <img
        src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName}`}
        alt="avatar"
        className="w-24 h-24 rounded-full mb-4 mx-auto"
        data-aos="zoom-in"
        data-aos-delay="200"
      />
      <form onSubmit={onSave} className="space-y-3">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="input w-full"
          data-aos="fade-right"
          data-aos-delay="300"
        />
        <input
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          placeholder="Photo URL"
          className="input w-full"
          data-aos="fade-left"
          data-aos-delay="400"
        />
        <input
          value={user.email}
          disabled
          className="input w-full"
          data-aos="fade-right"
          data-aos-delay="500"
        />
        <button
          className="btn bg-orange-500 text-white w-full"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
