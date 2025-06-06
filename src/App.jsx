import "./styles/theme.css";
import "./styles/global.css";
import { MyText } from "./components/MyText.jsx";

export default function App() {
  const texts = [
    {
      title: "React Component 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempora similique neque, ipsum at non expedita! Quisquam, voluptatibus. Quod, cumque! Quasi, doloribus.",
    },
    {
      title: "React Component 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempora similique neque, ipsum at non expedita! Quisquam, voluptatibus. Quod, cumque! Quasi, doloribus.",
    },
    {
      title: "React Component 3",
      text: "aaaaaai",
    },
    {
      title: "React Component 4",
      text: "aaaaaai",
    },
    {
      title: "React Component 5",
      text: "aaaaaai",
    },
  ];
  const textComponents = texts.map((text, index) => (
    <MyText key={index} title={`$ text.titl} ${index + 1}` text={text.text} />
  ));
  // const textComponents = texts.map((text, index) => (
  //   <MyText key={index} title={text.title} text={text.text} />

  return (
    <>
      {textComponents}

      <MyText
        title="React Component 1"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempora similique neque, ipsum at non expedita! Quisquam, voluptatibus. Quod, cumque! Quasi, doloribus."
      />
      <MyText title="React Component 2" text="Lorem" />
      <MyText title="React Component 3" text="aaaaaai" />
      <MyText title="React Component 4" text="aaaaaai" />
      <MyText title="React Component 5" text="aaaaaai" />
    </>
  );
}
