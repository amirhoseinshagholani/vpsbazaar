import LandingContent from "./components/landing/landingContent";
import LandingHeader from "./components/landing/landingHeader";


export default function Home() {
  return (
    <>
      <main className="">
        <LandingHeader />
        <LandingContent />
      </main>
    </>
  );
}
