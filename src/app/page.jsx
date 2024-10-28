
import styles from "./home.module.css";
import Hero from "../components/Hero/Hero";
import AdBlock from '../components/AdBlock/adBlock';
import HomeSchedule from "../components/HomeSchedule/HomeSchedule";
import MeetTheTeams from "../components/MeetTheTeams/MeetTheTeams";
import BecomeAmember from '../components/BecomeAmember/BecomeAmember';
import LatestVideos from '../components/LatestVideos/LatestVideos'

export default function Home() {

  return (
    <div className={styles.wrapper}>
     <Hero/> 
     <AdBlock/>
     <HomeSchedule/>
     <MeetTheTeams/>
     <BecomeAmember/>
     <LatestVideos/>
    </div>
  );
}
