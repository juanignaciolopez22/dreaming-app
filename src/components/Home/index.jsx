import { useDreamersStore } from "../../store/dreamersStore";
import HomeWelcome from "./components/HomeWelcome";
import HomeRanking from "./components/HomeRanking";

export default function Home() {
  const { loggedDreamer, dreamers } = useDreamersStore();

  if (!loggedDreamer) {
    return <HomeWelcome />;
  }

  return <HomeRanking loggedDreamer={loggedDreamer} dreamers={dreamers} />;
}