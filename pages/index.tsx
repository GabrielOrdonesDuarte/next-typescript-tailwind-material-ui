import { Grid, makeStyles, Paper, Theme } from '@material-ui/core';
import Container from '../components/Container/Container';

const Login: any = () => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Grid item sm={12} lg={5}>
          <Paper className={classes.card1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            dicta iusto molestiae quas rem officia est unde dignissimos
            obcaecati aliquid porro quae accusamus? Et esse rerum iusto autem
            incidunt fuga.
          </Paper>
        </Grid>
        <Grid item sm={12} lg={5}>
          <Paper className={classes.card2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            dicta iusto molestiae quas rem officia est unde dignissimos
            obcaecati aliquid porro quae accusamus? Et esse rerum iusto autem
            incidunt fuga.
          </Paper>
        </Grid>
        <Grid item sm={12} lg={2}>
          <h1 className={classes.tamanhoFonte}>Lorem ipsum dolor sit amet</h1>
          <span className="bg-blue-900 text-red-500">Tailwind Example</span>
        </Grid>
      </Container>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  card1: {
    padding: '15px',
    textAlign: 'center',
    color: theme.palette.corPrimaria,
  },
  card2: {
    padding: '5px',
    textAlign: 'right',
    color: theme.palette.corSecundaria,
  },
  tamanhoFonte: {
    fontSize: 35,
  },
}));

export default Login;
