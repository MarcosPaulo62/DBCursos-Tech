import { ConfirmExclusionCardWrapper } from "./styles";

interface ConfirmExclusionCard{
  removeConfirm: () => void;
  setShowModal: (estado: Boolean) => void;
}

export function ConfirmExclusionCard({removeConfirm, setShowModal}: ConfirmExclusionCard) {
  return (
    <ConfirmExclusionCardWrapper>
      <div className="card">
        <h2>Confirmação</h2>
        <p>Tem certeza que deseja excluir este registro?</p>
        <div className="buttons">
          <button className="blue" onClick={() => setShowModal(false)}>Não</button>
          <button className="red" onClick={removeConfirm}>Remover</button>
        </div>
      </div>
    </ConfirmExclusionCardWrapper>
  );
}
