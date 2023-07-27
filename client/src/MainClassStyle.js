import { makeStyles } from "@material-ui/core/styles" ;
<style>
  @import url('https://fonts.googleapis.com/css2?family=Sen&display=swap');
</style>

export default makeStyles(() => ({
    appBar: {
      borderRadius: 15,
      margin: '15px 0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#ffffff',
      padding:'5px',
    },
    heading: {
      color: '#da7b93',
      fontFamily: 'Sen',
      fontWeight: 'bold',
    },
    image: {
      marginLeft: '15px',
    },
  }));