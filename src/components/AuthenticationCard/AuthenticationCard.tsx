import { AuthenticationCardWrapper } from "./styles";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";

export interface IFormAuthValues {
  login: string;
  senha: string;
  confirmarSenha?: string;
}

export interface IAuthType {
  isLoginPage: boolean;
}

export function AuthenticationCard({ isLoginPage }: IAuthType) {
  const { register, handleSubmit } = useForm<IFormAuthValues>();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(isLoginPage);
  const [role, setRole] = useState("aluno");

  function onSubmit(userData: IFormAuthValues) {
    if (!userData.login.trim() || !userData.senha.trim()) {
      toast.warning("É necessário preencher todos os campos!", {
        theme: "dark",
        position: "top-center",
      });
      return;
    }
    if (!isLogin) {
      if (!userData.confirmarSenha?.trim()) {
        toast.warning("É necessário preencher todos os campos!", {
          theme: "dark",
          position: "top-center",
        });
        return;
      }
      if (userData.senha !== userData.confirmarSenha) {
        toast.warning("As senhas devem ser iguais!", {
          theme: "dark",
          position: "top-center",
        });
        return;
      }
    }
  }
  return (
    <AuthenticationCardWrapper>
      <div className="page-buttons">
        <button
          onClick={() => {
            setIsLogin(true);
          }}
        >
          ENTRAR
        </button>
        <button
          onClick={() => {
            setIsLogin(false);
          }}
        >
          CRIAR CONTA
        </button>
      </div>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <div className="role-buttons">
          <button
            type="button"
            onClick={() => {
              setRole("aluno");
            }}
          >
            ALUNO
          </button>
          <button
            type="button"
            onClick={() => {
              setRole("professor");
            }}
          >
            PROFESSOR
          </button>
          <button
            type="button"
            onClick={() => {
              setRole("admin");
            }}
          >
            ADMIN
          </button>
        </div>
        <input
          type="text"
          id="login"
          {...register("login")}
          placeholder="Username"
        />
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          {...register("senha")}
          placeholder="Senha"
        />
        <input
          type={showConfirmPassword ? "text" : "password"}
          id="confirm-password"
          {...register("confirmarSenha")}
          placeholder="Confirmar senha"
        />
        <button type="submit">{isLogin ? "ENTRAR" : "CRIAR CONTA"}</button>
      </form>
    </AuthenticationCardWrapper>
  );
}
