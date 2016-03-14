import express from 'express';
import  Api from './db/API';
import bodyParser from 'body-parser';
import path from'path';


let app = express();

let api = Api;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  next();
});

app.use("/api", api);

/*app.get('/*',  (req, res) => {
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      // You can also check renderProps.components or renderProps.routes for
      // your "not found" component or route respectively, and send a 404 as
      // below, if you're using a catch-all route.
      res.status(200).send(renderToString(<RouterContext {...renderProps} />))
    } else {
      res.status(404).send('Not found')
    }
  })
});*/

app.use("/p/:name", (req, res) => {
  let p = req.params.name;
  res.send("Hello Express from api:"+p);
});

/*app.use( (req, res, next) => {
  var err = new Error('The Page cannot be found');
  err.status = 404;
  next(err);
});*/

app.listen(3000, ()=> {
  console.log ("server listening on port 3000");
});
