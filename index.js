const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/products', (req, res) => {
    const products = [
        {id: 1, name:'Xa phong', hinhanh:"https://giaybongro.vn/upload/images/1000918800/73/7299_1621762641.jpg"},
        {id: 2, name: 'Dau goi222'}
    ];
 
    res.json(products);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})