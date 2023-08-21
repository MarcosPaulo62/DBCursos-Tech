import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { XCircle } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import {
  Actions,
  Content,
  Form,
  InputBg,
  InputMd,
  Spacer,
  Title,
  Button,
  FormContent,
  ComboBox,
} from "./style";
import Modal from "@mui/material/Modal";
import { Teacher } from "../../model";
import { createCourse, getTeachers } from "../../api";

export type ModalCadastroCursoProps = {
  open: boolean;
  onClose?: () => void;
};

type FormProps = {
  nome: string;
  cargaHoraria: string;
  periodo: string;
  idProfessor: string;
  descricao: string;
};

export const ModalCadastroCurso = ({
  open,
  onClose,
}: ModalCadastroCursoProps) => {
  const { register, handleSubmit, reset } = useForm<FormProps>();
  const [teachers, setTeachers] = useState<Array<Teacher>>([]);

  useEffect(() => {
    getTeachers().then(setTeachers);
  }, []);

  const onSubmit = async (data: FormProps) => {
    if (
      data.cargaHoraria === "" ||
      data.descricao === "" ||
      data.nome === "" ||
      data.periodo === "" ||
      data.idProfessor === ""
    ) {
      toast.warning("É necessário preencher todos os campos!", {
        theme: "dark",
        position: "top-center",
      });
    } else {
      try {
        await createCourse({
          ...data,
          idProfessor: Number(data.idProfessor),
          cargaHoraria: Number(data.cargaHoraria),
        });
        toast.success("Cadastro realizado com sucesso!", {
          theme: "dark",
          position: "top-center",
        });
        reset({
          nome: "",
          periodo: "",
          cargaHoraria: "",
          idProfessor: "",
          descricao: "",
        });
        onClose?.();
      } catch {
        toast.warning("Cadastro já existente!", {
          theme: "dark",
          position: "top-center",
        });
        reset({
          nome: "",
          periodo: "",
          cargaHoraria: "",
          idProfessor: "",
          descricao: "",
        });
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
              <Title>Cadastrar novo curso</Title>

              <InputBg
                type="text"
                placeholder="Nome do curso"
                {...register("nome")}
              />
              <Spacer>
                <InputMd
                  type="number"
                  placeholder="Carga Horária"
                  {...register("cargaHoraria")}
                ></InputMd>

                <ComboBox placeholder="Período" {...register("periodo")}>
                  <option value="">Selecione um período</option>
                  <option value="MANHA">Manhã</option>
                  <option value="TARDE">Tarde</option>
                  <option value="NOITE">Noite</option>
                </ComboBox>
              </Spacer>

              <InputBg
                type="text"
                placeholder="Descrição"
                {...register("descricao")}
              ></InputBg>
              <ComboBox {...register("idProfessor")}>
                <option value="">Selecione um professor...</option>
                {teachers.map((teacher) => (
                  <option key={teacher.idProfessor} value={teacher.idProfessor}>
                    {teacher.nome}
                  </option>
                ))}
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
