import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';

export default makeStyles(() => ({
  root: {
    '& .MuiTextField-root': {
      margin: useTheme().spacing(1),
      fontFamily: 'roboto',
    },
  },
  paper: {
    padding: useTheme().spacing(1),
    color: '#252525',
    margin:'20px'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    padding:'10px',
  },
  bttn:{
    display:'flex',
    margin:'10px',
    "& button":{
      marginLeft: '10px',
      marginRight: '10px',
    }
  },
}));