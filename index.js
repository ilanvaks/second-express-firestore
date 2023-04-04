import express from "express";
import cors from "cors";

// import CRUD functions 
import { addNewTv, getallTv } from "./src/tvLibrary.js";

const PORT = 3030;

const app = express();
app.use( cors() );
app.use( express.json() );

// get all tv shows 
app.get("/tvshows", getallTv);
//Add tv shows
app.post("/tvshows", addNewTv)

app.listen(PORT => {
  console.log(`Listening on http://localhost:${PORT}`)
})

