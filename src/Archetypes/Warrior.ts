import { EnergyType } from '../Energy';
import Archetypes from './Archetype';

export default class Warrior extends Archetypes {
  public lifeDamage: EnergyType;
  private static _instanceCounter = 0;

  constructor(name: string) {
    super(name);
    this.lifeDamage = 'stamina';
    Warrior._instanceCounter += 1;
  }

  public get energyType(): EnergyType {
    return this.lifeDamage;
  }

  static createdArchetypeInstances(): number {
    return Warrior._instanceCounter;
  }
}