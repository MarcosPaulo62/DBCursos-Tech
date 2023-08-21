import { XCircle } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import Backdrop from "@mui/material/Backdrop";
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
} from "./style";
import Modal from "@mui/material/Modal";

export type ModalCadastroProfessorProps = {
  open: boolean;
  onClose?: () => void;
};

export const ModalCadastroProfessor = ({
  open,
  onClose,
}: ModalCadastroProfessorProps) => {
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
              <Title>Cadastrar novo professor</Title>

              <InputBg
                type="text"
                placeholder="Nome do professor"
                {...register("nome")}
                required
              ></InputBg>
              <Spacer>
                <InputSm
                  type="number"
                  placeholder="Salário (R$)"
                  {...register("salario")}
                  required
                ></InputSm>
                <InputMd
                  type="number"
                  placeholder="Número de CPF"
                  {...register("cpf")}
                  required
                ></InputMd>
              </Spacer>

              <InputBg
                type="text"
                placeholder="Especialidade"
                {...register("especialidade")}
                required
              ></InputBg>
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
