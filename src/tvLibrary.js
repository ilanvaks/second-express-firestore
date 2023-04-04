import {db} from "./dbConnect.js";

export function addNewTv(req, res) {
  const newTv = req.body;
  //CREATE (C from crud) add new tv show
  db.collection("tvShow")
    .add(newTv)
    .then( doc => res.status(201).send(`New Tv Added: ${doc.id}`))
    .catch( err => res.status(500).send(err) )
}


export async function getallTv(req,res) {
  const collection = await db.collection("tvshows").get()
    .get()
    .catch(err => res.status(500).send(err) )

    const tvshowList = collection.docs.map(
      tvshow => ( {... tvshow.data(), id: tvshow} )
    )
}