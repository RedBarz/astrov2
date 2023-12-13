import { getDB } from '../lib/connect';

const getCarsList = async() => {
    const db = await getDB();
    const cars = await (await db.collection("Cars")).find({}).toArray();
    return cars;
}


export default getCarsList;