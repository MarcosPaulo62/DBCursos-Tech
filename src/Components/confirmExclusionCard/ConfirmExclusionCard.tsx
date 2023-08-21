import { ConfirmExclusionCardWrapper } from "./styles";

export function ConfirmExclusionCard() {
  return (
    <ConfirmExclusionCardWrapper>
      <div className="card">
        <h2>Confirmação</h2>
        <p>Tem certeza que deseja excluir este registro?</p>
        <div className="buttons">
          <button className="blue">Não</button>
          <button className="red">Remover</button>
        </div>
      </div>
    </ConfirmExclusionCardWrapper>
  );
}
