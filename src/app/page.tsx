import { heroBg } from "@/assets";
import {
  BackgroundImg,
  Button,
  Container,
  Text,
  Title,
} from "@/components/common";
import { FC } from "react";

const App = () => {
  const Card: FC<{ title: string; des: string }> = ({ title, des }) => (
    <div className="bg-[#161616] p-8 py-10 rounded-3xl lg:rounded-[30px] space-y-5 w-full max-w-[340px]">
      <Title variant="H4" className="text-start text-white">
        {title}
      </Title>
      <Text className="text-xs lg:text-xs text-white">{des}</Text>
    </div>
  );
  return (
    <main>
      {/* <Hero /> */}
      <BackgroundImg img={heroBg} overflow>
        <Container className="py-5 flex justify-center items-center flex-col">
          <Text className="text-white text-center py-5 pt-10">
            Fotografiraj.hr - profesionalni fotografi na jednom mjestu
          </Text>
          <Title
            variant="H1"
            className="py-5 text-white w-full max-w-[600px] lg:leading-[70px]"
          >
            Najveća platforma za prezentaciju
            <span className="font-serif"> fotografa</span> u Hrvatskoj.
          </Title>

          <Button className="my-5">Pridruži se</Button>

          <div className="flex flex-col md:flex-row justify-evenly items-center gap-5 w-full mt-10 pb-5">
            <Card
              title="Naša misija"
              des="Učiniti pretragu fotografa u Hrvatskoj brzom, jednostavnom i
        učinkovitom, a fotografe prezentirati široj klijenteli."
            />
            <Card
              title="Naša vizija"
              des="Okupiti sve kvalitetne profesionalne fotografe u Hrvatskoj te postati sveobuhvatna baza i sinonim za pretragu fotografa."
            />
          </div>
        </Container>
      </BackgroundImg>
      {/* Hero */}
      {/* about section  */}
      {/* feathers */}
      {/* founder */}
      {/* footer  */}
    </main>
  );
};

export default App;
