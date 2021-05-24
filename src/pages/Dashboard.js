import React from "react";
import Location from "../components/Location";
import CheckBoxes from "../components/CheckBoxes";
import PersonalNotes from "../components/PersonalNotes";

function Dashboard() {
  return (
    <div>
      <div class="main">
        <div class="container">
          <div class="row">
            <h1>Dashboard</h1>
            <div class="col-md-4">
              <CheckBoxes />
            </div>
            <div class="col-md-4">
              <PersonalNotes />
            </div>
            <div class="col-md-4">
              <Location />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
