import { useParams } from "react-router-dom";
import "./EntryPage.css";

export default function EntryPage() {
  const { id } = useParams();
  console.log(id);
  return <>Entry {id}</>;
}
