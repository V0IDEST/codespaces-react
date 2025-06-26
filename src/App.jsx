import "./styles/theme.css";
import "./styles/global.css";
// import { MyTextList } from "./components/MyTextList";
import { MyGrid } from "./components/MyGrid";
 import { Header } from "./components/Header";
 import { LuckyNumber } from "./components/LuckyNumber";


export default function App() {

  return (
    // React Fragment
    <>
      <Header />
      <LuckyNumber />
    </>
  );
}