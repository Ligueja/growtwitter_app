import { isAxiosError } from "axios";
import { growtwitterApi, ResponseAPI } from "../api.cliente-http";
import { Credentials } from "./auth.types";

export async function login(credentials: Credentials) {
  try {
    const resposta = await growtwitterApi.post("/auth/login", credentials);

    return resposta.data as ResponseAPI<string>;
  } catch (err: unknown) {
    if (isAxiosError(err)) {
      return err.response!.data as ResponseAPI<undefined>;
    }

    console.log(err);
    return {
      ok: false,
      message: "Erro ao realizar login",
    };
  }
}
