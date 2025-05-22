import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import SearchEngine from "@/components/SearchEngine";
import Footer from "@/components/Footer";
import FlightDeals from "@/components/FlightDeals";
import TopDestination from "@/components/TopDestination";

export default function Home() {
  return (
   <>
   <Header/>
   <SearchEngine/>
<FlightDeals/>

<TopDestination/>
   <Footer/>
   </>
  );
}
