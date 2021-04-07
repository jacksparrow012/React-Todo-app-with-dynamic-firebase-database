import React, { useState } from 'react';
import db from "./Firebase"
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Modal, Button, Input } from '@material-ui/core'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
const useStyles = makeStyles((theme) => ({
    paper: {
        // position: 'absolute',
        width: 400,
        margin: "0 auto",
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        // boxShadow: theme.shadows[5],
        boxShadow: "2px 2px #888888",
        padding: theme.spacing(2, 4, 3),
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: " translate(-50%, -50%)",
        maxWidth: "100%",
        maxHeight: "100%"
    },
}))

const Todo3 = (props) => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState("")

    const updateTodos = () => {
        db.collection('todos3').doc(props.todo3.id).set({
            todo3: input
        }, { merge: true })
        setOpen(false)
    }
    return (

        <>
            <Modal
                open={open}
            // onClose={e => setOpen(false)}
            >
                <div className={classes.paper}>
                    <h1>Hi i am modal</h1>
                    <Input placeholder={props.todo3.todo3} value={input} onChange={(event) => setInput(event.target.value)} /> *
                    <Button disabled={!input} variant="contained" color="Primary" onClick={updateTodos}>Update Todo</Button>
                </div>
            </Modal>


            <List>
                <ListItem>
                    <ListItemText primary="Todo" secondary={props.todo3.todo3} />
                    <Button color='secondary' variant="contained" onClick={e => setOpen(true)}>Edit</Button>
                    <DeleteOutlinedIcon
                        onClick={event => {
                            db.collection("todos").doc(props.todo3.id).delete()
                        }} variant="contained" color="secondary" />

                </ListItem>

            </List>
        </>

    );
};

export default Todo3;