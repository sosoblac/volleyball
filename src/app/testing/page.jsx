import React from 'react'

import clientPromise from '../../../lib/mongo/index';

async function getTeams() {
    const client = await clientPromise;
    const db = client.db('provolleyball');
    const teams = await db.collection('teams').find({}).toArray();
    console.log(client)
    return JSON.parse(JSON.stringify(teams)); // Convert to plain objects
  }

const page = async ({client}) => {

    const teams = await getTeams();
  return (
    <div style={{marginTop:'200px'}}>
            <h1>TEAMS</h1>
      {/* {teams[0]._id} */}
    </div>
  )
}

export default page
