import Courage;
import Confidence;

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

  función iAmCreator (): Confidence {
    let obviousStatement = "I am creating all this"
    let lessObviousStatement = "I can create everything I want to see"
    console.warn(obviousStatement)
    console.warn(lessObviousStatement)
    return new Confidence()
  }

  function clearMind (): void {
    let mind = this.MindBin;
    mind.clear();
  }

  function chill (): mixed {
    this.breathDeeply()
    this.clearMind()
    console.log("Nothing really matter")
    if (this.isInAlteredState) {
    return this.iAmCreator()
    }
  }

}
