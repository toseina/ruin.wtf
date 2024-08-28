const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const whitelist = ['1009241974143987723', '691678041927319553'];

// endpoint
app.get('/api/check', (req, res) => {
    const id = req.query.id;

    if (whitelist.includes(id)) {
        res.json({ whitelisted: true });
    } else {
        res.json({ whitelisted: false });
    }
});

app.listen(port, () => {
    console.log(`server running on https://ruin.wtf:${port}`)
})