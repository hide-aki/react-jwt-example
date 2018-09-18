import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function Dashboard(props) {
  const { classes } = props;

  return (
    <div>
      <Header menu="ログアウト" onClick={props.logout}/>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          田中太郎さん、ダッシュボードへようこそ！
        </Typography>
        <Typography component="p">
          さあ、JWT認証をマスターしたらSPAアプリケーションを今すぐ開発しましょう！
        </Typography>
      </Paper>
    </div>
  );
}


export default withStyles(styles)(Dashboard);
