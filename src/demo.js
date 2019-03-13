import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
//import TextInput from '@material-ui/core/TextInput';
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  root2: {
    display: "flex",
    flexWrap: "wrap",
    border: "solid",
    borderWidth: "1px",
    height: "500px"
    //overflow: "scroll"
  },
  root3: {
    width: "100%",
    height: "87%",
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
    overflow: "scroll"
  },
  addHeaderButton: {
    margin: theme.spacing.unit,
    color: "#0d9ddb",
    backgroundColor: theme.palette.common.white,
    fontWeight: 500
  }
});
class SimpleTabs extends React.Component {
  state = {
    headerList2: [
      "fun",
      "shikher",
      "garg",
      "kartik",
      "fun",
      "rambo",
      "garg",
      "kartik",
      "fun1",
      "kshitiz",
      "garg",
      "kartik"
    ],
    finalList: [
      "fun",
      "shikher",
      "garg",
      "kartik",
      "fun",
      "rambo",
      "garg",
      "kartik",
      "fun1",
      "kshitiz",
      "garg",
      "kartik"
    ]
  };

  find = e => {
    if (e.target.value === "") {
      this.setState({
        finalList: this.state.headerList2
      });
    }
    let finalList = this.state.headerList2.filter(row => {
      console.log(row, row.search(e.target.value));
      return row.search(e.target.value) >= 0;
    });
    this.setState({
      finalList: finalList
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={12}>
        <Grid item xs={12} className={classes.root2} container={true}>
          <Grid item xs={12}>
            <Grid item xs={12} container alignItems="flex-end">
              <Grid item>
                <Icon>search</Icon>
              </Grid>
              <Grid item>
                <TextField
                  id="input-with-icon-search"
                  label="Search"
                  onChange={event => this.find(event)}
                />
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.root3}>
            <List component="nav">
              {this.state.finalList.map((row, index) => {
                return (
                  <ListItem
                    button
                    selected={this.state.selectedIndex === 3}
                    onClick={event => this.handleListItemClick(event, 3)}
                  >
                    <ListItemText primary={row} />
                  </ListItem>
                );
              })}
            </List>
          </div>
        </Grid>
      </Grid>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTabs);
