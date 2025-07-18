import { Hero } from "./components/sections/Hero"
import { Layout } from "./components/Layout"
import { Brands } from "./components/sections/Brands";

function App() {
  return (
    <Layout title="ModernDays">
      <Hero />
      <Brands />
    </Layout>
  );
}

export default App
