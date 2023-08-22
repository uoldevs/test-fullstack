import { createTheme } from '@mui/material/styles';
import UOLTextFont from './fontes/uol-text-regular.ttf';
import UOLTextBoldFont from './fontes/uol-text-bold.ttf';


const theme = createTheme({
  typography: {
    fontFamily: [
      'UOLText',
      'Arial',
      'sans-serif',
    ].join(','),
    fontWeightBold: 700,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          {
            fontFamily: 'UOLText',
            src: `url(${UOLTextFont})`,
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontDisplay: 'swap',
          },
          {
            fontFamily: 'UOLTextBold', // Defina um nome para a fonte em negrito
            src: `url(${UOLTextBoldFont})`,
            fontWeight: 'bold', // Use "bold" para a fonte em negrito
            fontStyle: 'normal',
            fontDisplay: 'swap',
          },
        ],
      },
    },
  },
});

export default theme;