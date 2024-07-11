import { Fragment } from "react/jsx-runtime";

export function Login() {
  return (
    <Fragment>
      <form>
        <label htmlFor='email'>E-mail</label>
        <input type='email' name='email' id='email' required />

        <label htmlFor='password'>Senha</label>
        <input type='password' name='password' id='password' required />

        <button type='submit'>Entrar</button>
      </form>
    </Fragment>
  );
}
