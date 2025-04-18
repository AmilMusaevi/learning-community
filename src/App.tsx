import { Layout } from "@/layouts/layout";
import Header from "./layouts/header/header";
import Banner from "./layouts/sections/banner/banner";
import Info from "./layouts/sections/info/info";
import { Faq } from "@/layouts/sections/faq/faq";
import Questions from "@/layouts/sections/questions";

function App() {
  return (
    <Layout>
      <Header />
      <Banner />
      <Info />
      <Faq />
      <Questions />
    </Layout>
  );
}

export default App;
