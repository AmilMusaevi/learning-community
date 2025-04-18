import { Layout } from "@/layouts/layout";
import Header from "./layouts/header/header";
import Banner from "./layouts/sections/banner/banner";
import Info from "./layouts/sections/info/info";

function App() {
  return (
    <Layout>
      <Header />
      <Banner />
      <Info />
    </Layout>
  );
}

export default App;
