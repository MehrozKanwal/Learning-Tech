import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
//style
import "./Course.css";

export default function Course() {
  //getting id parameter
  const { id } = useParams();
  const { error, document } = useDocument("course", id);
  //condition checking
  if (error) {
    return <div className="error">{error} </div>;
  }
  if (!document) {
    return <div className="laoding">loading</div>;
  }
  return (
    <div className="course-page">
      <div className="course-header-container">
        <h1>{document.title}</h1>
        <h4>Instructor</h4>
        <p>{document.createdBy.displayName}</p>
      </div>
      <div className="course-main-container">
        <h4>Syllabus</h4>
        <p>{document.description}</p>
        <h4>Video Lectures</h4>
        {console.log(document.imgUrl)}
        <video src={document.attachment}></video>
      </div>
    </div>
  );
}
