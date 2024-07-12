import { CardLoginStyled } from "../components/styled/CardLoginStyled";
import { ContainerLoginStyled } from "../components/styled/ContainerLoginStyled";

import { LeftLoginStyled } from "../components/styled/LeftLoginStyled";

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
      </CardLoginStyled>
    </ContainerLoginStyled>
  );
}
