import Courage;
import Confidence;

const CORE_VALUES = [
  honesty,
  strength,
  action
];

class MattiaPenna {

  constructor() {
    this.name = Mattia;
    this.yearOfBirth = 1994;
    this.nationality = Italian;
    this.mindBin = New Mind(CORE_VALUES);
  }

  function mary () {
    let mind = this.mindBin;
    mind.addThoughtListener('Mary', event => {
      console.log(event.thoughtOrigin);
      let currentMindset = "Fun, Lust and Love";
      mind.OverrideLastThought(currentMindset);
    })
  }

  function ogniLasciataEPersa (event) {
    if (event.opportunity && event.interest) {
      console.info("Ogni lasciata è persa");
      console.info("If I don't do this I'll never know");
      this.isInAlteredState = true;
      let confidence = this.chill();
      return this.sayHello(event, confidence);
    }
  }

  function sayHello (e: Event, c: Confidence) {
    this.mount(c)
    switch(e.interactionLang) {
      case 'it':
        return 'Ciao!';
      case 'es':
        return 'Hola!';
      default:
        return 'Hello!';
    }
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
    let mind = this.mindBin;
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
