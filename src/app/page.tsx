"use client"

import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import Navbar from "./components/NavBar";
import { Whatsapp } from "./components/Whatsapp";
import { Accessories } from "./components/Accessories";
import { FabricsAndCoatings } from "./components/FabricsAndCoatings";
import { ScrollTop } from "./components/ScrollToTopp";
import { CreationAndCustomization } from "./components/CreationAndCustomization";
import { WhoAmI } from "./components/WhoAmI";
import { WhereDoISell } from "./components/WhereDoISell";
import { CustomerReviews } from "./components/CustomerReviews";
import { TalkToMe } from "./components/TalkToMe";

export default function Home() {
  return (
<main className="bg-[url('/bg.webp')]">
<Navbar />
<Banner/>
<Accessories/>
<CreationAndCustomization/>
<FabricsAndCoatings/>
<WhoAmI/>
<WhereDoISell/>
<CustomerReviews/>
<TalkToMe/>
<Footer />
<Whatsapp />
<ScrollTop/>
</main>
  )
}
