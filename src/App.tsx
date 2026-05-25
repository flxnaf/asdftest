import { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Technology from "./components/Technology";
import Services from "./components/Services";
import CaseLibrary from "./components/CaseLibrary";
import Team from "./components/Team";
import WhiteLabel from "./components/WhiteLabel";
import Compliance from "./components/Compliance";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";

type Route = "marketing" | "login";

function getRoute(): Route {
  return window.location.hash.replace(/^#\/?/, "").startsWith("login")
    ? "login"
    : "marketing";
}

export default function App() {
  const [route, setRoute] = useState<Route>(getRoute());

  useEffect(() => {
    const onHash = () => {
      setRoute(getRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  if (route === "login") return <LoginPage />;

  return (
    <div className="min-h-screen bg-white text-ink-900">
      <TopBar />
      <Nav />
      <main>
        <Hero />
        <Process />
        <Technology />
        <Services />
        <CaseLibrary />
        <Team />
        <WhiteLabel />
        <Compliance />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
