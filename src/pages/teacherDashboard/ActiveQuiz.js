import "../../components/SideNav";
import { useCollection } from "../../hooks/useCollection";
import SideNav from "../../components/SideNav";

export default function Quiz() {
 const { documents, error } = useCollection('quiz')
 
 return( 

 <div>
      <SideNav/>
      {/* {error && <p className="error">{error}</p>}
      {documents && documents.map(doc => (
        <h1 key={doc.id}>{doc.name}</h1>
        
      ))} */}
  </div>
  );
}
