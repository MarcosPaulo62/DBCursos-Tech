import { RenderCard } from "../renderCard/RenderCard";
import { Welcome } from "../welcome/Welcome";
import { Aside } from "./style";

export const HomeAside = () => {
  return (
    <>
      <Aside>
        <Welcome></Welcome>
        <RenderCard></RenderCard>
      </Aside>
    </>
  );
};
