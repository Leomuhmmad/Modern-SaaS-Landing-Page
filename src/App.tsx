import { Hero } from "./components/sections/Hero"
import { Layout } from "./components/Layout"
import { Brands } from "./components/sections/Brands";
import { Services } from "./components/sections/Services";
import { AboutUs } from "./components/sections/AboutUs";

function App() {
  return (
    <Layout title="ModernDays">
      <Hero />
      <Brands />
      <Services />
      <AboutUs />
    </Layout>
  );
}

export default App
