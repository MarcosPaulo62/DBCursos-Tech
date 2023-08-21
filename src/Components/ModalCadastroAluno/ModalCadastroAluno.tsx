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
} from "./style";
import Modal from "@mui/material/Modal";

export type ModalCadastroAlunoProps = {
  open: boolean;
  onClose?: () => void;
};

export const ModalCadastroAluno = ({
  open,
  onClose,
}: ModalCadastroAlunoProps) => {
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
              <Title>Cadastrar novo Aluno</Title>

              <InputBg
                type="text"
                placeholder="Nome do aluno"
                {...register("nome")}
                required
              ></InputBg>
              <Spacer>
                <InputSm
                  type="number"
                  placeholder="Idade"
                  {...register("idade")}
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
                type="email"
                placeholder="Email"
                {...register("email")}
                required
              ></InputBg>
              <InputBg
                type="number"
                placeholder="Matrícula"
                {...register("matricula")}
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
