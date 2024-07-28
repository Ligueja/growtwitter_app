import { Fragment } from "react/jsx-runtime";

import { NavMain } from "../components/functional/NavMain";
import { ContainerPages } from "../components/styled/ContainerPeges";
import { Nav } from "../components/styled/Nav/Nav";

import { NavDownText } from "../components/styled/Nav/NavDownText";
import { NavDownImage } from "../components/styled/Nav/NavDownImage";
import { NavDownOut } from "../components/styled/Nav/NavDownOut";
import { Link } from "react-router-dom";
import { NavDown } from "../components/styled/Nav/NavDown";
import { AssideContainer } from "../components/styled/Aside/AsideContainer";
import { AssideCard } from "../components/styled/Aside/AsideCard";
import { AssideLink } from "../components/styled/Aside/AsideLink";
import { Main } from "../components/styled/Main/Main";
import { MainContainer } from "../components/styled/Main/MainContainer";
import { useTheme } from "styled-components";
import { MainProfileArrow } from "../components/styled/Main/MainProfileArrow";
import { MainProfileTittle } from "../components/styled/Main/MainProfileTittle";
import { MainProfileTopImage } from "../components/styled/Main/MainProfileTopImage";
import { MainProfileTopAvatar } from "../components/styled/Main/MainProfileTopAvatar";
import { MainProfileTopText } from "../components/styled/Main/MainProfileTopText";
import {
  CardButton,
  CardContainer,
  CardContainerContent,
  CardContent,
  CardImage,
  CardLikeReply,
  CardUserData,
} from "../components/styled/Card/CardAll";
import { useState } from "react";

export function Profile() {
  // Estado para controlar se o tweet foi curtido ou não
  const [liked, setLiked] = useState(false);

  // Função para alternar o estado de "like"
  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const theme = useTheme();

  return (
    <Fragment>
      <ContainerPages>
        <Nav>
          <NavMain />
          <NavDown>
            <NavDownImage />
            <NavDownText>
              <h1>User</h1>
              <p>@ username</p>
            </NavDownText>
          </NavDown>
          <NavDownOut>
            <Link to={"/"}>Sair</Link>
          </NavDownOut>
        </Nav>
        <MainContainer>
          <Main>
            <div className='div-profile'>
              <MainProfileArrow>
                <Link to='/feed'>
                  <img
                    src={theme.icons.arrowIcon}
                    alt='arrowprofile'
                    className='arrow-profile'
                  />
                </Link>
              </MainProfileArrow>
              <MainProfileTittle>
                <p className='title-profile'>Perfil de @username</p>
                <span>X tweets</span>
              </MainProfileTittle>
            </div>

            <MainProfileTopImage>
              <MainProfileTopAvatar />
            </MainProfileTopImage>
            <MainProfileTopText>
              <h2>User</h2>
              <span>@usename</span>
            </MainProfileTopText>

            {/* início do card onde lista os tweets */}

            <CardContainer>
              <CardImage></CardImage>
              <CardContainerContent>
                <CardUserData>
                  <span className='user'>User</span>
                  <span className='user-name'>@username • 3h</span>
                </CardUserData>
                <CardContent>
                  <p>Teste1</p>
                </CardContent>
                <CardButton>
                  <CardLikeReply>
                    <img src={theme.icons.iconReply} alt='reply-icon'></img>
                    <span>0</span>
                  </CardLikeReply>
                  <CardLikeReply onClick={handleLikeClick}>
                    <img
                      src={
                        liked
                          ? theme.icons.iconLike.selected
                          : theme.icons.iconLike.default
                      }
                      alt='like-icon'
                    />
                    <span>0</span>
                  </CardLikeReply>
                </CardButton>
              </CardContainerContent>

              {/* fim do card onde lista os tweets */}
            </CardContainer>
          </Main>
        </MainContainer>
        <AssideContainer>
          <AssideCard>
            <h1>O que está acontecendo?</h1>
            <ul>
              <li>
                <p className='label'>Esportes - Há 45 min</p>
                <p className='title'>Assunto sobre esportes</p>
              </li>
              <li>
                <p className='label'>Assunto do Momento em Brasil</p>
                <p className='title'>Assunto do Momento</p>
              </li>
              <li>
                <p className='label'>Música - Assunto do Momento</p>
                <p className='title'>Assunto sobre Música</p>
              </li>
              <li>
                <p className='label'>Cinema - Assunto do Momento</p>
                <p className='title'>Assunto sobre Filmes e Cinema</p>
              </li>
            </ul>
            <AssideLink>
              <Link to={"/explore"}>Mostrar Mais</Link>
            </AssideLink>
          </AssideCard>
        </AssideContainer>
      </ContainerPages>
    </Fragment>
  );
}
