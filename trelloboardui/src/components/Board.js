import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid'
import ListElement from './ListElement'

const styles = {
  root: {
    marginRight: '15px',
    backgroundColor: '#f1e5d7'
  }
};

class Board extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: this.props.board.name,
            lists: this.props.board.lists,
            classes: this.props.classes
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            name: nextProps.board.name,
            lists: nextProps.board.lists
        })
    }

    render() {
        return (
            <Card classes={{root: this.state.classes.root}} >
                <CardHeader title={this.state.name}/>
                <CardContent>
                    <Grid container spacing={16}>
                       {this.state.lists.map(list => {
                           return (
                                <ListElement key={list.id} list={list}/>
                           )
                       })}
                   </Grid>
               </CardContent>
            </Card>
        )
    }

}

Board.propTypes = {
     classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Board)
