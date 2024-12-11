import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import NavBar from "@/components/NavBar";
import PublicSources from "@/components/PublicSources";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <Main></Main>
      <About></About>

      <PublicSources></PublicSources>
      <Footer></Footer>
      {/* <Button>Click me</Button> */}
    </div>
  );
}
