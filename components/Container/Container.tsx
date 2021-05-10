import { Grid, makeStyles, Theme } from '@material-ui/core';

const Container: any = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        {children}
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default Container;
