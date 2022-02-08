import React, { useEffect } from "react";
import "../../components/SideNav";
import "./CreateCourse.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import { useStore } from "../../hooks/useFireStore";
import { projectStorage } from "../../firebase/Config";
import { useFirestore } from "../../hooks/useFireStore";
import Spinner from "../../components/Spinner";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import SideNav from "../../components/SideNav";
import { dblClick } from "@testing-library/user-event/dist/click";

export default function CreateCourse() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { addDocument, response } = useFirestore("course");
  const [loading, setLoading] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  let [attachment, setAttachment] = useState([]);
  const [attachmentError, setAttachmentError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const uploadPath = `videos/${user.uid}/${attachment.name}`;
    const img = await projectStorage.ref(uploadPath).put(attachment);
    const imgUrl = await img.ref.getDownloadURL();

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };
    const course = {
      title,
      description,
      attachment:[],
      createdBy,
    };
    await addDocument(course);
    if (!response.error) {
      navigate("/courses");
    }
  };
  const handleFileChange = (e) => {
    setAttachment(null);
    // let selected = e.target.files[0];
    let selected;
    for (let i = 0; i < e.target.files.length; i++) {
      selected = e.target.files[i];
    }
    //   selected["id"] = Math.random();
    //   setAttachment((prevAttachment) => [...prevAttachment, selected]);
    // }
    console.log(selected);
    console.log(e.target.files);
    
    attachment = Object.entries(e.target.files);
    console.log(attachment);

    if (!selected) {
      setAttachmentError("Please select a file");
      return;
    }

    setAttachmentError(null);
    setAttachment(selected);
    console.log("Attachment updated");
  };
  return (
    <div>
      <SideNav />
      <div className="create-form-container">
        <h1>Create New Course</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Course Name"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <textarea
            placeholder="Course Description"
            cols="50"
            rows="5"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>

          <h2>Upload Video Lectures</h2>
          <input
            onChange={handleFileChange}
            multiple
            type="file"
            accept="video/mp4,video/x-m4v,video/*"
            className="attach-video1"
          />
          {attachmentError && <div className="error">{attachmentError}</div>}
          
          {!loading && <button>Create</button>}
          {loading && <Spinner />}
        </form>
      </div>
    </div>
  );
}
