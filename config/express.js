const express = require('express');
const morgan = require('morgan');
const compress =  require('compression');
const bodyPraser = require('body-parser');
const methodOverride = require('method-override');

module.exports =() =>{
    var app = express();
    if (process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'));

    }else if (process.env.NODE_ENV === 'production'){
    app.use(compress());
}

app.use(bodyPraser.urlencoded({
    extended:true
}));

app.use(bodyPraser.json());
app.use(methodOverride());
app.set('views','./app/views');
app.set('view engine','ejs');
app.use('/', require('../app/routes/index.server.routes.js'));
//require('../app/routes/index.server.routes.js')(app);
app.use(express.static('./public'));
app.use(express.static("./node.modules"));
return app;
};

