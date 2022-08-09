import { EnergyType } from '../Energy';
import Archetypes from './Archetype';

export default class Mage extends Archetypes {
  public lifeDamage: EnergyType;
  private static _instanceCounter = 0;

  constructor(name: string) {
    super(name);
    this.lifeDamage = 'mana';
    Mage._instanceCounter += 1;
  }

  public get energyType(): EnergyType {
    return this.lifeDamage;
  }

  static createdArchetypeInstances(): number {
    return Mage._instanceCounter;
  }
}