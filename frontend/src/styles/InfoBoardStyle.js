import { styled } from '@mui/material/styles';

export const InfoBoardStyle = styled('div')({
  display: 'flex',
  alignItems: 'flex-start', // Alinhar conteúdo no topo
  justifyContent: 'space-between', // Espaço entre conteúdo
  backgroundColor: '#F9F9F9',
  padding: '20px',
  paddingRight: '100px',
});

export const TextWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column', // Empilhar conteúdo verticalmente
  marginRight: '20px', // Espaçamento à direita entre texto e botão
});

export const ButtonStyle = styled('button')({
  backgroundColor: 'rgb(226, 153, 51)',
  color: 'rgb(255, 255, 255)',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
});