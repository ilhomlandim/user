import Header from "@/components/Header";
import Main from "@/components/Main";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <Main></Main>
      {/* <Button>Click me</Button> */}
    </div>
  );
}
