import { Grid, makeStyles, Paper, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: '15px',
    textAlign: 'center',
    color: theme.palette.corPrimaria,
  },
  tamanhoFonte: {
    fontSize: 40,
  },
}));

const Login: any = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={5}>
        <Grid item sm={12} lg={6}>
          <Paper className={classes.paper}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            dicta iusto molestiae quas rem officia est unde dignissimos
            obcaecati aliquid porro quae accusamus? Et esse rerum iusto autem
            incidunt fuga.
          </Paper>
        </Grid>
        <Grid item sm={12} lg={6}>
          <Paper className={classes.paper}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            dicta iusto molestiae quas rem officia est unde dignissimos
            obcaecati aliquid porro quae accusamus? Et esse rerum iusto autem
            incidunt fuga.
          </Paper>
        </Grid>
        <Grid item sm={12} lg={6}>
          <h1 className={classes.tamanhoFonte}>apsdkfaposdkfpaoskdf</h1>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
