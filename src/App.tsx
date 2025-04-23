import { Layout } from "@/layouts/layout";

import ScrollToTop from "./components/resetScroll/resetScroll";
import { Banner, Contact, Faq, Footer, Header, Info, Questions, Review } from "./layouts/sections";
function App() {
  return (
    <>
      <Layout>
        <Header />
        <Banner />
        <Info />
        <Faq />
        {/* <Questions /> */}
      </Layout>
      <Review />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
