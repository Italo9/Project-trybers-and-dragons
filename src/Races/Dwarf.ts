import Race from './Race';

export default class Dwarf extends Race {
  public _maxLifePoints: number;
  private static _instanceCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._instanceCounter += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._instanceCounter;
  }
}