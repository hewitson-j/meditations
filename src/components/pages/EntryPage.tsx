import { useNavigate, useParams } from "react-router-dom";
import "./EntryPage.css";
import { testEntries } from "./testData";
import Header from "../shared/Header";
import PageHead from "../shared/PageHead";

export default function EntryPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const entry = testEntries[parseInt(id ? id : "1000") - 1];
  if (!entry) navigate("/error/not-found");

  return (
    <div className="entry">
      <PageHead title={`${entry?.title}`} />
      <div>
        <Header size="h1">{entry?.title}</Header>
        <p>
          Published -{" "}
          {entry?.timestamp.getDate() +
            " " +
            months[entry?.timestamp.getMonth()] +
            " " +
            entry?.timestamp.getFullYear()}
        </p>
        <button onClick={() => navigate("/home")}>Home</button>
        <div className="entry-paragraphs">
          {entry?.paragraphs.map((paragraph, index) => {
            if (paragraph.trim() === "") return <br key={`break-${index}`} />;
            else return <p key={`paragraph-${index}`}>{paragraph}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
