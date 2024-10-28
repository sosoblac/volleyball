import clientPromise from '../../../lib/mongo/index';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('volleyballDB');
  const teams = await db.collection('teams').find({}).toArray();
  res.json(teams);
}