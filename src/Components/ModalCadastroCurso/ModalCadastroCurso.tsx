import { XCircle } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import {
  Actions,
  Content,
  Form,
  InputBg,
  InputMd,
  InputSm,
  Spacer,
  Title,
  Button,
  FormContent,
  ComboBox,
} from "./style";
import Modal from "@mui/material/Modal";

export type ModalCadastroCursoProps = {
  open: boolean;
  onClose?: () => void;
};

export const ModalCadastroCurso = ({
  open,
  onClose,
}: ModalCadastroCursoProps) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Content>
          <XCircle size={48} onClick={onClose}></XCircle>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormContent>
              <Title>Cadastrar novo curso</Title>

              <InputBg
                type="text"
                placeholder="Nome do curso"
                {...register("nome")}
                required
              ></InputBg>
              <Spacer>
                <InputSm
                  type="number"
                  placeholder="Carga Horária"
                  {...register("salario")}
                  required
                ></InputSm>
                <InputMd
                  type="text"
                  placeholder="Período"
                  {...register("periodo")}
                  required
                ></InputMd>
              </Spacer>

              <InputBg
                type="text"
                placeholder="Descrição"
                {...register("descricao")}
                required
              ></InputBg>
              <ComboBox>
                <option value="">Selecione um professor...</option>
                <option value="">map professor</option>
              </ComboBox>
            </FormContent>
            <Actions>
              <Button type="submit">Adicionar</Button>
            </Actions>
          </Form>
        </Content>
      </Modal>
    </>
  );
};
