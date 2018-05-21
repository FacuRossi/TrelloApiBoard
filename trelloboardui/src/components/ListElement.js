import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ListService from '../services/ListService'
import CardService from '../services/CardService'

const styles = {
    root: {
        margin: '0px 5px 0px 5px',
        backgroundColor: '#cbecf3c2'
    },
    card: {
        margin: '2px 0px 2px 0px',
        backgroundColor: '#e7ececc2'
    }
};


class ListElement extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list: this.props.list,
            open: false,
            classes: this.props.classes
        }

        this.cardService = new CardService()
        this.listService = new ListService()
    }

    _handleClickOpen = () => {
        this.setState({ open: true });
    };

    _handleClose = () => {
        this.setState({ open: false});
    };

    componentDidMount() {
        this._getAllCardsFromList()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            list: nextProps.list,
            cards: undefined
        })
        this._getAllCardsFromList()
    }

    _getAllCardsFromList = () => {
        this.listService.getCardsFromList(this.state.list.id)
            .then(response => {
                this.setState({ cards : response.data }, this.forceUpdate())
            })
    }

    _handleTextFieldChange = (e) => {
        this.setState({newCard: e.target.value})
    }

    _addNewCard = () => {
        this._handleClose()
        let newCard = {
            name: this.state.newCard,
            listId: this.state.list.id
        }
        this.cardService.addNewCard(newCard)
            .then(response => {
                let cards = this.state.cards
                newCard.id = response.data.id
                cards.push(newCard)
                this.setState({cards})
            })
    }

    render() {
        if(this.state.cards) {
            return (
                <Grid item xs={4}>
                    <Card classes={{root: this.state.classes.root}}>
                        <CardHeader title={this.state.list.name}
                            action={
                                    <Tooltip id="tooltip-icon" title="Add new card">
                                        <IconButton onClick={this._handleClickOpen}>
                                            <AddIcon />
                                        </IconButton>
                                    </Tooltip>
                            }/>
                        <CardContent>
                            {
                                this.state.cards.map(card =>{
                                    return (
                                        <Card classes={{root: this.state.classes.card}} key={card.id}>
                                            <CardHeader subheader={(card.name) ? card.name : 'Card without name'}/>
                                        </Card>
                                    )
                                })
                            }
                        </CardContent>
                    </Card>
                    <Dialog
                         open={this.state.open}
                         onClose={this._handleClose}
                         aria-labelledby="form-dialog-title">
                         <DialogTitle id="form-dialog-title">New Card</DialogTitle>
                         <DialogContent>
                           <TextField onChange={this._handleTextFieldChange}
                             autoFocus
                             margin="dense"
                             id="new Card"
                             label="name"
                             type="text"
                             fullWidth
                           />
                         </DialogContent>
                         <DialogActions>
                           <Button onClick={this._addNewCard} color="primary">
                               Save
                           </Button>
                         </DialogActions>
                    </Dialog>
                </Grid>
            )
        } else {
            return ''
        }
    }

}

ListElement.propTypes = {
     classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(ListElement)
