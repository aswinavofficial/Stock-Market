var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

const initDb = require("./db").initDb;
const getDb = require("./db").getDb;




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api',function(req,res,next){
  res.send("API")
}


);
// app.use("/api/list", listRouter);
app.get('/api/all', function(req, res, next) {
    const db = getDb();  
    var mongo =db.collection("archives");
    mongo.find({}, { _id : 0 } ).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
    
      res.send(result)
    });

});


app.get('/api/list', function(req, res, next) {
  const db = getDb();  
  var mongo =db.collection("archives");

  mongo.distinct("symbol",{},(function(err, result) {
    if (err) throw err;
    console.log(result);
  //   console.log(result.length)
    res.send(result)
  })
  );

});

app.get('/api/latest', function(req, res, next) {
  const db = getDb();  
  var mongo =db.collection("archives");

  var mysort = { date: -1 , close : -1, volume : -1};
    mongo.find({}, { _id : 0 } ).sort(mysort).limit(501).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);

      res.send(result)
    });

});


// router.get('/company/best2', function(req, res, next) {

//   var query = {};
//   var mysort = { open: -1 };
//     mongo.aggregate([
//       {"$group" : {_id:"$symbol",max : { $max: "$close" }}}
//   ],
//   (function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       
//       res.send(result)
//     }));

// });

app.get('/api/:symbol', function(req, res, next) {
  const db = getDb();  
  var mongo =db.collection("archives");

  var query = {symbol : req.params.symbol};
  mongo.find(query, { _id : 0 } ).sort({date : -1}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    
    res.send(result)
  });

});


app.get('/api/stock/:date',function(req,res,next) {
  const db = getDb();  
  var mongo =db.collection("archives");
  var query ={date : req.params.date}
  console.log(req.params.date)

  mongo.find(query,{ _id : 0,date :0 }).toArray (function(err,result)
  {
      if(err) throw err;
      res.send(result);
  }
    
    );

  });


app.get('/api/chart/:symbol', function(req, res, next) {
  const db = getDb();  
  day1 = req.query.day1;
  day2 = req.query.day2;
  console.log("Day  : "+day1+" "+day2)
  var mongo =db.collection("archives");
  var query = {symbol : req.params.symbol, date : {'$gte': day1,'$lt': day2}};
  mongo.find(query, { _id : 0, date : 1, close : 1 } ).sort({date : -1}).toArray(function(err, result) {
    if (err) throw err;
    var jres={}
    result.forEach(element => {
      jres[element.date]=element.close
      
    });
    console.log(jres)
    res.send(jres)
  });

});


app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname) + '/public/index.html');
});

//app.use('/api/archives', archivesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.send("404")
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = 3004;

initDb(function (err) {
  app.listen(port, function (err) {
      if (err) {
          throw err; //
      }
      console.log("API Up and running on port " + port);
  });
});















// module.exports = app;
