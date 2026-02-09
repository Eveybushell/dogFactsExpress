import express from 'express';
import dogFacts from './dog_facts-1.js';

const app = express();
const PORT = 3000;



app.get('/facts', (req, res) => {

    if (req.query.number){

        if (req.query.number !== null) {
            const amount = Number(req.query.number);
            if (!Number.isInteger(amount)) {
                // Use 'id' as an integer
                res.send("fact amount must be a number")
            }
}
        const factNumber = req.query.number
        const facts = selectUniqueItemsWithSet(dogFacts, factNumber)
        return res.json({
        facts: facts,
        success: true
    });
    }

    return res.json({
        facts: dogFacts,
        success: true
    });
});

app.get('/facts')


app.use((req, res) => {
    res.status(404);
    res.send("404 - Not Found")
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is successfully running, and app is listening on port "+ PORT);
    else
        console.log("Error occured, server can't start", error);
    }
);

function selectUniqueItemsWithSet(arr, numToSelect) {
  const selectedIndices = new Set();
  while (selectedIndices.size < numToSelect) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    selectedIndices.add(randomIndex);
  }

  const result = Array.from(selectedIndices).map(index => arr[index]);
  return result;
}