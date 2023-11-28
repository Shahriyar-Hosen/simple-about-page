import { FC } from "react";
import { Text, Title } from "../common";

export const About: FC = () => (
  <section className="bg-[#f8faff] border-b border-[#f8faff] flex flex-col justify-center items-center gap-2.5 py-10 shadow px4">
    <Title variant="H2">Tko se može oglasiti na Fotografiraj.hr?</Title>
    <Text className="text-center max-w-[620px]">
      Dobrodošli su svi profesionalni fotografi čija kvaliteta fotografija
      zadovoljava naše standarde. Ukoliko se profesionalno baviš fotografijom,
      registriraj se i pridruži se našoj zajednici.
    </Text>
  </section>
);
