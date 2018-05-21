import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import BoardService from '../services/BoardService'
import ListService from '../services/ListService'
import Board from './Board'

const styles = {
  root: {
    marginLeft: '15px',
    backgroundColor: '#f1e5d7'
  }
};

class BoardList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            boards: [],
            classes: this.props.classes
        }

        this.boardService = new BoardService()
        this.listService = new ListService()
    }

    componentDidMount() {
        this._getAllBoards()
    }

    _getAllBoards = () => {
        this.boardService.getBoards()
            .then(response => {
                this.setState({ boards: response.data })
            })
    }

    _handleSelectedBoard = (event)  => {
        let boardId = event.target.id
        this.boardService.getBoardById(boardId)
            .then(response => {
                this.setState({ boardSelected: response.data })
            })
    }


    render() {
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                        <Card classes={{root: this.state.classes.root}}>
                           <CardHeader title="My Boards"/>
                           <CardContent>
                               {this.state.boards.map(board => {
                                   return (
                                       <MenuItem id={board.id} key={board.id} onClick={this._handleSelectedBoard}>
                                           {board.name}
                                       </MenuItem>
                                   )
                               })}
                           </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={9}>
                        {this.state.boardSelected ? <Board board={this.state.boardSelected}/> : ''}
                    </Grid>
                </Grid>
            </div>
        )
    }

}

BoardList.propTypes = {
     classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BoardList)
