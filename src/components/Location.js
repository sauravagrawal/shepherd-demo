import React, { useState, useEffect } from "react";
import axios from "axios";

import AssignmentIcon from "@material-ui/icons/Assignment";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";

function Location() {
  const CHARACTER_LIMIT = 100;
  const [countryName, setCountryName] = useState("");
  const [countinentCode, setContinentCode] = useState("");

  const continentName = {
    AF: "Africa",
    AN: "Antarctica",
    AS: "Asia",
    EU: "Europe",
    NA: "North America",
    OC: "Oceania",
    SA: "South America",
  };

  useEffect(() => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setCountryName(data.country_name);
        setContinentCode(data.continent_code);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const geoData =
    `Country: ` + countryName + `\nContinent: ` + continentName[countinentCode];

  return (
    <div>
      <Card>
        <CardContent>
          <Typography>
            <AssignmentIcon /> Your Location
          </Typography>
          <br />
          <Divider />
          <TextareaAutosize
            className="Textfield noborder"
            placeholder="Limited Characters"
            maxlength={CHARACTER_LIMIT}
            rowsMin="6"
            rowsMax="6"
            value={geoData}
          />
        </CardContent>
        <CardActions>
          <br /> <br /> <br /> <br />
        </CardActions>
      </Card>
    </div>
  );
}

export default Location;
