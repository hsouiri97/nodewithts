import express from "express";
import { Request, Response } from "express";

export default class Server {
  constructor(private port: number) {}

  public start(): void {
    const app = express();

    app.get("/", (req: Request, resp: Response) => {
      resp.send("<h1> Hamza</h1>");
    });

    app.listen(this.port, () => {
      console.log("server started");
    });
  }
}
