import { AuthenticationCardWrapper } from "./styles";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import { Lock, User, Eye, EyeSlash } from "@phosphor-icons/react";

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
          className={isLogin ? "onfocus" : ""}
          onClick={() => {
            setIsLogin(true);
          }}
        >
          ENTRAR
        </button>
        <button
          className={!isLogin ? "onfocus" : ""}
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
            className={
              role === "aluno" ? "firstRoleButton onrole" : "firstRoleButton"
            }
          >
            ALUNO
          </button>
          <button
            type="button"
            onClick={() => {
              setRole("professor");
            }}
            className={
              role === "professor"
                ? "secondRoleButton onrole"
                : "secondRoleButton"
            }
          >
            PROFESSOR
          </button>
          <button
            type="button"
            onClick={() => {
              setRole("admin");
            }}
            className={
              role === "admin" ? "thirdRoleButton onrole" : "thirdRoleButton"
            }
          >
            ADMIN
          </button>
        </div>
        <div className="input-container">
          <input
            type="text"
            id="login"
            {...register("login")}
            placeholder="Username"
          />
          <User className="icon" size={32} />
        </div>
        <div className="input-container">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            {...register("senha")}
            placeholder="Senha"
          />
          <Lock className="icon" size={32} />
          <div
            className="eye"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <Eye size={32} /> : <EyeSlash size={32} />}
          </div>
        </div>
        <div className={isLogin ? "displayNone" : "input-container"}>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirm-password"
            {...register("confirmarSenha")}
            placeholder="Confirmar senha"
          />
          <Lock className="icon" size={32} />
          <div
            className="eye"
            onClick={() => {
              setShowConfirmPassword(!showConfirmPassword);
            }}
          >
            {showConfirmPassword ? <Eye size={32} /> : <EyeSlash size={32} />}
          </div>
        </div>
        <button className="submit" type="submit">
          {isLogin ? "ENTRAR" : "CRIAR CONTA"}
        </button>
      </form>
    </AuthenticationCardWrapper>
  );
}
