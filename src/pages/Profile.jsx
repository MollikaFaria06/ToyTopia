import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";

export default function Profile() {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  useEffect(() => {
    document.title = "ToyTopia | My Profile";
    setName(user?.displayName || "");
    setPhotoURL(user?.photoURL || "");
  }, [user]);

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
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <img src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName}`} alt="avatar" className="w-24 h-24 rounded-full mb-4" />
      <form onSubmit={onSave}>
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" className="input w-full mb-2" />
        <input value={photoURL} onChange={(e)=>setPhotoURL(e.target.value)} placeholder="Photo URL" className="input w-full mb-2" />
        <input value={user.email} disabled className="input w-full mb-2" />
        <button className="btn bg-orange-500 text-white">Save Changes</button>
      </form>
    </div>
  );
}
