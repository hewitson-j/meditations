import { useNavigate } from "react-router-dom";
import { useEntriesContext } from "../shared/EntriesProvider";
import Header from "../shared/Header";
import PageHead from "../shared/PageHead";
import "./HomePage.css";
import { testEntries } from "./testData";

export default function HomePage() {
  const { count, offset } = useEntriesContext();
  const listItems = testEntries.slice(offset, count);

  return (
    <div className="home">
      <PageHead title="Home" />
      <Header size="h1">Home</Header>
      <p>Welcome to the list! Feel free to look at any of the below entries.</p>
      <div className="home-entries">
        <ul className="home-list">
          {listItems.map((item) => {
            const date =
              item.timestamp.getDate() +
              "/" +
              item.timestamp.getMonth() +
              "/" +
              item.timestamp.getFullYear();

            return (
              <ListItem
                key={item.id}
                date={date}
                title={item.title}
                id={item.id}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

interface ListItemProps {
  id: number;
  title: string;
  date: string;
}

function ListItem({ id, title, date }: ListItemProps) {
  const navigate = useNavigate();
  return (
    <li className="home-list-items" onClick={() => navigate(`/entry/${id}`)}>
      {title} - {date}
    </li>
  );
}
