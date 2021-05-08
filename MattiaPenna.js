import Courage;

class MattiaPenna {

  constructor() {
    this.name = Mattia;
    this.yearOfBirth = 1994;
    this.nationality = Italian;
  }


  function resist (): Courage {
    if (this.isSad && this.feelDiscomfort) {
      console.group();
      console.log("Resist");
      console.log("You can go through this");
      console.groupEnd();
      this.clearMind();
      return new Courage();
    }
  }


  function clearMind (): void {
    let mind = this.MindBin;
    mind.clear();
  }

  function chill (): void {
    this.breathDeeply()
    this.clearMind()
    console.log("Nothing really matter")
  }



}
