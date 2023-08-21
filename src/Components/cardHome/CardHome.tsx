import { Content, DivImg, Img, Paragraph } from "./style";

export type CardHomeProps = {
  image: string;
  cargo: string;
};
export const CardHome = ({ image, cargo }: CardHomeProps) => {
  return (
    <>
      <Content>
        <DivImg>
          <Img src={image} />
        </DivImg>
        <Paragraph data-testid='access-role'>Acessar {cargo}</Paragraph>
      </Content>
    </>
  );
};
