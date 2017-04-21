export class Pathway {
  mapContent : any;
  reactions : object;
  nodes : object;

  constructor(fc : any) {
    this.mapContent = fc;

    this.reactions = fc[1].reactions;
    this.nodes = fc[1].nodes;
  }
}
