import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  margin-bottom: 50px;
  height: 350px;
  border-radius: 4px;
  background: #fff;

`;
export const Imagem = styled.Image`
  width: 100%;
  height: 150px;
`;

export const Conteudo = styled.View`
  display: flex;
  padding: 20px;
`;

export const Titulo = styled.Text`
  margin-top: 10px;
  font-weight: bold;
  font-size: 18px;
`;

export const Info = styled.Text`
  font-size: 16px;
  color: #999;
  margin-top: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  margin-bottom: 5px;
`;
