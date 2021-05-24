import React, { useEffect, useState } from "react";
import firebaseApp from "../utils/firebase";
import firebase from "firebase";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DashboardIcon from "@material-ui/icons/Dashboard";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Divider from "@material-ui/core/Divider";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import { Button } from "@material-ui/core";
import ReactTooltip from "react-tooltip";

const db = firebaseApp.firestore();
const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function CheckBoxes(props) {
  const [checkBoxes, setCheckBox] = useState([]);
  const [open, setOpen] = useState(true);

  // When the app loads, we neet to listen to the database and feth new todos as they get added/removed.
  useEffect(() => {
    // this code here... fires when the app.js loads.
    db.collection("checkBox")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setCheckBox(
          snapshot.docs.map((doc) => ({ id: doc.id, title: doc.data().title }))
        );
      });
  }, []);

  const addCheckBox = (Event) => {
    // this will fire off when we click the button.
    Event.preventDefault(); // will stop the REFRESH

    db.collection("checkBox")
      .get()
      .then(function (querySnapshot) {
        if (querySnapshot.size >= 1) {
          db.collection("checkBox").add({
            title: "Task " + (+checkBoxes[0].title.split(" ")[1] + 1),
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          });
        } else {
          db.collection("checkBox").add({
            title: "Task 1",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          });
        }
      });
  };

  const showHideAccordion = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const classes = useStyles();
  return (
    <div>
      <Accordion
        className={classes.root}
        onChange={showHideAccordion}
        expanded={open}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            <DashboardIcon /> Agenda
          </Typography>
          <div class="smi">
            <HelpOutlineIcon data-tip="Help me understand" className="smi" />
          </div>
          <ReactTooltip />
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <FormControl component="fieldset">
            <FormGroup aria-label="position" col>
              {checkBoxes.map((checkBox) => (
                <>
                  <div row>
                    <FormControlLabel
                      value="end"
                      control={<Checkbox color="primary" />}
                      label={checkBox.title}
                      labelPlacement="end"
                    />
                    {/* <DeleteIcon onClick={Event => db.collection('checkBox').doc(checkBox.id).delete()}></DeleteIcon> */}
                  </div>
                </>
              ))}
            </FormGroup>

            <center>
              <Button
                type="submit"
                onClick={addCheckBox}
                variant="contained"
                color="primary"
                startIcon={<AddCircleOutlineIcon />}
              >
                Add Checkbox
              </Button>
            </center>

            <br />
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default CheckBoxes;
