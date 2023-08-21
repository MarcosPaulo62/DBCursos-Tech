import CircularProgress from "@mui/material/CircularProgress";
import { Eye, EyeSlash, Lock, User } from "@phosphor-icons/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthenticationCardWrapper } from "./styles";
import { useNavigate } from "react-router-dom";
import { API_KEY } from "../../utils/API";

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
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function onSubmit(userData: IFormAuthValues) {
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

      try {
        setIsLoading(true);

        const response = await fetch(
          `${API_KEY}/acesso/cadastrar`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              login: userData.login,
              senha: userData.senha,
            }),
          }
        );

        if (response.status === 500) {
          toast.error("Usuário já cadastrado!", {
            theme: "dark",
            position: "top-center",
          });
          return;
        }

        toast.success("Cadastro realizado com sucesso!", {
          theme: "dark",
          position: "top-center",
        });

        navigate("/login");
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      try {
        setIsLoading(true);

        const response = await fetch(
          `${API_KEY}/acesso`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              login: userData.login,
              senha: userData.senha,
            }),
          }
        );

        if (response.status === 403) {
          toast.error("Usuário e/ou senha incorreto(s)!", {
            theme: "dark",
            position: "top-center",
          });
          return;
        }

        if (response.status === 500) {
          toast.error("Algo inesperado aconteceu!", {
            theme: "dark",
            position: "top-center",
          });
          return;
        }

        const data = await response.text();

        localStorage.setItem("token", data);
        localStorage.setItem("cargo", role);
        localStorage.setItem("nome", userData.login);

        navigate("/dashboard");
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <AuthenticationCardWrapper data-testid="auth-card">
      <div className="page-buttons">
        <button
          className={isLogin ? "onfocus" : ""}
          onClick={() => {
            setIsLogin(true);
            navigate("/login");
          }}
          data-testid='btn-header-login'
        >
          ENTRAR
        </button>
        <button
          className={!isLogin ? "onfocus" : ""}
          onClick={() => {
            setIsLogin(false);
            navigate("/cadastro");
          }}
          data-testid='btn-header-register'
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
            data-testid='input-login'
          />
          <User className="icon" size={32} />
        </div>
        <div className="input-container">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            {...register("senha")}
            placeholder="Senha"
            data-testid='input-password'
          />
          <Lock className="icon" size={32} />
          <div
            className="eye"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <EyeSlash size={32} /> : <Eye size={32} />}
          </div>
        </div>
        <div className={isLogin ? "displayNone" : "input-container"}>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirm-password"
            {...register("confirmarSenha")}
            placeholder="Confirmar senha"
            data-testid='input-confirm-password'
          />
          <Lock className="icon" size={32} />
          <div
            className="eye"
            onClick={() => {
              setShowConfirmPassword(!showConfirmPassword);
            }}
          >
            {showConfirmPassword ? <EyeSlash size={32} /> : <Eye size={32} />}
          </div>
        </div>
        <button className="submit" type="submit" data-testid='btn-submit'>
          {isLoading ? (
            <CircularProgress className="loading" />
          ) : isLogin ? (
            "ENTRAR"
          ) : (
            "CRIAR CONTA"
          )}
        </button>
      </form>
    </AuthenticationCardWrapper>
  );
}
