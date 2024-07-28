import { isAxiosError } from "axios";
import { Credentials, LoginResponse } from "./auth.types";
import { growtwitterApi } from "../api.cliente-http";

export async function login(credentials: Credentials): Promise<LoginResponse> {
  try {
    const resposta = await growtwitterApi.post<LoginResponse>(
      "/auth/login",
      credentials
    );
    console.log("Resposta da API de login:", resposta.data); // Log da resposta da API
    return resposta.data;
  } catch (err: unknown) {
    if (isAxiosError(err)) {
      return err.response!.data as LoginResponse;
    }

    console.log(err);
    return {
      ok: false,
      message: "Erro ao realizar login",
    } as LoginResponse;
  }
}

export async function logout(token: string): Promise<LoginResponse> {
  try {
    const resposta = await growtwitterApi.post(
      "/auth/logout",
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return resposta.data as LoginResponse;
  } catch (err: unknown) {
    if (isAxiosError(err)) {
      return err.response!.data as LoginResponse;
    }

    console.log(err);
    return {
      ok: false,
      message: "Erro ao realizar logout",
    } as LoginResponse;
  }
}
