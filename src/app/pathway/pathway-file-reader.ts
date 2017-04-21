import { Pathway } from './pathway';

export class PathwayFileReader {
  static readPathwayFile(file: File) {
    return new Promise((resolve, reject) => {
      var myReader:FileReader = new FileReader();

      myReader.onloadend = function(e){
        let fileContent : any = JSON.parse(myReader.result);
        resolve(new Pathway(fileContent));
      }

      myReader.readAsText(file);
    })
  }
}
