import React, { useState, useEffect } from "react";
import firebaseApp from "../utils/firebase";
import "../assets/css/styles.css";

import AssignmentIcon from "@material-ui/icons/Assignment";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Typography } from "@material-ui/core";

const realTimeDB = firebaseApp.database();
let i = 0;

function PersonalNotes() {
  const CHARACTER_LIMIT = 500;
  const [content, setContent] = useState("");

  useEffect(() => {
    const childRef = realTimeDB.ref("PersonalNotes");
    childRef.on("value", (snapshot) => {
      const initialPersonalNotes = snapshot.val();
      for (let note in initialPersonalNotes) {
        if (i === 0) {
          setContent(initialPersonalNotes[note]["content"]);
          i++;
        }
      }
    });
  });

  const updatePersonalNotes = (e) => {
    const contentRef = realTimeDB
      .ref("PersonalNotes")
      .child("-MaT-KJ6m1l9Qt1K_0KH");
    contentRef.update({
      content: content,
    });
  };

  return (
    <div>
      <Card>
        <form>
          <CardContent>
            <Typography>
              <AssignmentIcon /> Personal Notes
            </Typography>
            <br />
            <Divider />
            <TextareaAutosize
              onChange={(Event) => setContent(Event.target.value)}
              onKeyUp={updatePersonalNotes}
              value={content}
              className="Textfield noborder"
              placeholder="Limited Characters"
              maxlength={CHARACTER_LIMIT}
              rowsMin="6"
              rowsMax="6"
            />
            <center>
              <p className="text-danger">{`Max ${CHARACTER_LIMIT} characters`}</p>
            </center>
          </CardContent>

          <CardActions>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddCircleOutlineIcon />}
            >
              Check Hover State
            </Button>
          </CardActions>
          <br />
        </form>
      </Card>
    </div>
  );
}

export default PersonalNotes;
