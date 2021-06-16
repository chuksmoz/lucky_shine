import { Container } from "inversify";
import 'reflect-metadata';
import { getRouteInfo, InversifyExpressServer } from "inversify-express-utils";
import { json, urlencoded } from "body-parser";
import cors from 'cors';

import dotenv from 'dotenv';
import { bindings } from "./presentation/ioc/inversify.config";
dotenv.config();

const swaggerUi = require('swagger-ui-express');
let swaggerDocument = require('../swagger.json');

(async () =>{

  const port = process.env.PORT ||3001;
  const container = new Container();
  await container.loadAsync(bindings);
  const app = new InversifyExpressServer(container);
  app.setConfig(p =>{
    p.use(urlencoded({
        extended: true
      })
    );
    p.use(json());
    p.use( cors());
    p.use(
      '/api-docs',
      swaggerUi.serve, 
      swaggerUi.setup(swaggerDocument)
    );
  });
  
  const server = app.build();
  const routeInfo = getRouteInfo(container);
  //console.log(prettyjson.render({routes : routeInfo}));
  let instance = server.listen(port);
  
  console.log(`Server running at http://127.0.0.1:${port}/`);
  

})();