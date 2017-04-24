export class Pathway {
  mapContent : any;
  reactions : object;
  nodes : object;
  name : string;

  constructor(fc : any) {
    this.mapContent = fc;

    this.name = fc[0].map_name;
    this.reactions = fc[1].reactions;
    this.nodes = fc[1].nodes;
  }
}
