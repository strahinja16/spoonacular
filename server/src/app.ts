import * as express from 'express'
import { Application } from 'express'

class App {
  public app: Application;
  public port: number;

  constructor(appInit: { port: number; middlewares: any; routes: any; }) {
    this.app = express();
    this.port = appInit.port;

    this.middlewares(appInit.middlewares);
    this.routes(appInit.routes)
  }

  private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
    middleWares.forEach(middleWare => {
      this.app.use(middleWare)
    })
  }

  private routes(routes: { forEach: (arg0: (routes: any) => void) => void; }) {
    routes.forEach(router => {
      this.app.use(router.path, router.routes)
    })
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the http://localhost:${this.port}`)
    })
  }
}

export default App
