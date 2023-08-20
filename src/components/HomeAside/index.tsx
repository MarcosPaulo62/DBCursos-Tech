import { RenderCard } from "../RenderCard/RenderCard";
import { Welcome } from "../Welcome/Welcome";
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
