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
import { createTeacher } from "../../api/create-teacher";

type FormProps = {
  nome: string;
  cpf: string;
  especialidade: string;
  salario: string;
};

export type ModalCadastroProfessorProps = {
  open: boolean;
  onClose?: () => void;
};

export const ModalCadastroProfessor = ({
  open,
  onClose,
}: ModalCadastroProfessorProps) => {
  const { register, handleSubmit, reset } = useForm<FormProps>();

  const onSubmit = async (data: FormProps) => {
    if (
      data.nome === "" ||
      data.cpf === "" ||
      data.especialidade === "" ||
      data.salario === ""
    ) {
      toast.warning("É necessário preencher todos os campos!", {
        theme: "dark",
        position: "top-center",
      });
    } else {
      try {
        await createTeacher({
          ...data,
          cpf: Number(data.cpf),
          salario: Number(data.salario),
        });
        toast.success("Cadastro realizado com sucesso!", {
          theme: "dark",
          position: "top-center",
        });
        reset({ nome: "", cpf: "", especialidade: "", salario: "" });
        onClose?.();
      } catch {
        toast.warning("Cadastro já existente!", {
          theme: "dark",
          position: "top-center",
        });
        reset({ nome: "", cpf: "", especialidade: "", salario: "" });
      }
    }
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
              ></InputBg>
              <Spacer>
                <InputSm
                  type="number"
                  placeholder="Salário (R$)"
                  {...register("salario")}
                ></InputSm>
                <InputMd
                  type="number"
                  placeholder="Número de CPF"
                  {...register("cpf")}
                ></InputMd>
              </Spacer>

              <InputBg
                type="text"
                placeholder="Especialidade"
                {...register("especialidade")}
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
