import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.elphen.com.br/">
        <img src="https://live.staticflickr.com/65535/50892834372_156ca36751_o.png" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado por
        {' '}
        a
        {' '}
        <a href="https://www.elphen.com.br/">
          <span>Elphen Sistemas Educacionais</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
