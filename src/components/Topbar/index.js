import React from 'react'
import styled from 'styled-components'
import Modali, { useModali } from 'modali';
import { AiFillInfoCircle } from 'react-icons/ai'

import brandImg from '../../assets/obc-icon.png'

export default function Topbar() {
  const [modal, toggleModal] = useModali({
    title: "Nosso time!",
    animated: true,
    overlayClose: true,
  });

  return (
    <Nav>
      <Brand>
        <BrandImg src={brandImg} alt="Logo da One Bit Code" />
        <BrandText>One Bit Code</BrandText>
      </Brand>

      <AboutBtn onClick={toggleModal} >
        <AiFillInfoCircle /> Sobre nós
      </AboutBtn>

      <Modali.Modal {...modal}>
        <ModalContent>
          <ul>
            Front-end
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                @example
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                @example
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                @example
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                @example
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                @example
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                @example
              </a>
            </li>
          </ul>

          <ul>
            Back-end
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                @example
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                @example
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                @example
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                @example
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                @example
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                @example
              </a>
            </li>
          </ul>

          <ul>
            Crawling
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                @example
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                @example
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                @example
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                @example
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                @example
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                @example
              </a>
            </li>
          </ul>

          <ul>
            ChatBot
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                @example
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                @example
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                @example
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                @example
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                @example
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                @example
              </a>
            </li>
          </ul>
        </ModalContent>
      </Modali.Modal>
    </Nav>
  )
}

const Nav = styled.nav`
  background-color: #142032;
  width: 100%;
  height: 56px;
  justify-content: space-around;
  align-items: center;
  display: flex;
`

const Brand = styled.div`
  display: flex;
`

const BrandText = styled.div`
  margin: auto;
  color: #ffffff;
  font-size: 16px;
  padding-left: 8px;
`

const BrandImg = styled.img`
  width: 46px;
`

const AboutBtn = styled.button`
  color: #ffffff;
  background: none;
  border: none;
  font-size: 16px;
`

const ModalContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;

  ul {
  list-style: none;
  padding: 0;
  }
`