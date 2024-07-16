import { CardLoginStyled } from "../components/styled/CardLoginStyled";
import { ContainerLoginStyled } from "../components/styled/ContainerLoginStyled";
import { InputGroupLoginStyled } from "../components/styled/InputGroupLoginStyled";

import { LeftLoginStyled } from "../components/styled/LeftLoginStyled";
import { LoginFormStyled } from "../components/styled/LoginFormSyled";
import { RightLoginStyled } from "../components/styled/RightLoginStyled";

export function Login() {
  return (
    <ContainerLoginStyled>
      <CardLoginStyled>
        <LeftLoginStyled>
          <h1>Growtwitter</h1>
          <h3>Trabalho final do bloco intermediário</h3>
          <p>
            O Growtwitter é a plataforma definitiva para todos os apaixonados
            por redes sociais que buscam uma experiência familiar e poderosa,
            semelhante ao Twitter, mas com um toque único. Seja parte desta
            comunidade que valoriza a liberdade de expressão, a conexão com
            pessoas de todo o mundo e a disseminação de ideias.
          </p>
        </LeftLoginStyled>
        <LoginFormStyled>
          <RightLoginStyled>
            <h2>Entrar no Growtwitter</h2>
            <InputGroupLoginStyled>
              <label htmlFor='email'>E-mail</label>
              <input type='email' name='email' id='email' required />
            </InputGroupLoginStyled>
            <InputGroupLoginStyled>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' id='password' required />
            </InputGroupLoginStyled>
            <InputGroupLoginStyled>
              <button type='submit'>Entrar</button>
            </InputGroupLoginStyled>
          </RightLoginStyled>
        </LoginFormStyled>
      </CardLoginStyled>
    </ContainerLoginStyled>
  );
}
