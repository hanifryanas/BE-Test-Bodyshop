require('dotenv').config();
const app = require('express')();
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');

app.use(bodyParser.json());

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => console.log('DB is connected'))
    .catch((err) => console.log(err));


app.use('/user', require('./routes/user.routes'));
app.use('/product', require('./routes/product.routes'));

const port = process.env.PORT;

app.listen(port, () => {
    console.log('Server started on port ' + port);
} );