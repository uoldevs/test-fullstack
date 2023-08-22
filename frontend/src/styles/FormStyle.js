import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';


export const StyledForm = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '300px',
    marginTop: '20px',
    padding: '10px',
  });

export const StyledButtonCriar = styled(Button)(({ theme }) => ({
    backgroundColor: 'rgb(226, 153, 51)',
    color: 'white',
    width: '50%',
}));

export const StyledButtonVoltar = styled(Button)(({ theme }) => ({
    backgroundColor: 'white',
    color: 'rgb(226, 153, 51)',
    border: '1px solid rgb(226, 153, 51)', 
    width: '50%',
  }));
