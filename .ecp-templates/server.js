const express = require('express');
const epcConfig =  require('./.ecpconfig.js'); //by default it is port 400
let app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.get('/', (req, res) => {
    let indexRender = {
        'title': {
            'innerHTML': 'ECP - Project'
        },
        'h1': {
            'innerHTML': 'ECP Project Template'
        }
    }
    res.render('index', {indexRender});
});

app.listen(epcConfig.PORT, () => {
    console.log(`ECP running on http://localhost:${epcConfig.PORT}`);
})