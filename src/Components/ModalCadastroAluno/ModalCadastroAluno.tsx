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
import { toast } from "react-toastify";
import { createStudent } from "../../api";

export type ModalCadastroAlunoProps = {
  open: boolean;
  onClose?: () => void;
};
type FormProps = {
  nome: string;
  cpf: string;
  numeroDeMatricula: string;
  idade: string;
  email: string;
};
export const ModalCadastroAluno = ({
  open,
  onClose,
}: ModalCadastroAlunoProps) => {
  const { register, handleSubmit, reset } = useForm<FormProps>();

  const onSubmit = async (data: FormProps) => {
    if (
      data.nome === "" ||
      data.cpf === "" ||
      data.email === "" ||
      data.numeroDeMatricula === "" ||
      data.idade === ""
    ) {
      toast.warning("É necessário preencher todos os campos!", {
        theme: "dark",
        position: "top-center",
      });
    } else {
      try {
        await createStudent({ ...data });
        toast.success("Cadastro realizado com sucesso!", {
          theme: "dark",
          position: "top-center",
        });
        reset({
          nome: "",
          cpf: "",
          idade: "",
          numeroDeMatricula: "",
          email: "",
        });
        onClose?.();
      } catch {
        toast.warning("Cadastro já existente!", {
          theme: "dark",
          position: "top-center",
        });
        reset({
          nome: "",
          cpf: "",
          idade: "",
          numeroDeMatricula: "",
          email: "",
        });
      }
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
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
                {...register("numeroDeMatricula")}
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
