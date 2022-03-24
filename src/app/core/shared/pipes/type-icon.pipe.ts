import { Pipe, PipeTransform } from '@angular/core';
import { TypeName } from '../../models';

@Pipe({
  name: 'typeIcon'
})
export class TypeIconPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case TypeName.Bug:
        return "assets/type-icons/bug.png";
      case TypeName.Dark:
        return "assets/type-icons/dark.png";
      case TypeName.Dragon:
        return "assets/type-icons/dragon.png";
      case TypeName.Eletric:
        return "assets/type-icons/eletric.png";
      case TypeName.Fairy:
        return "assets/type-icons/fairy.png";
      case TypeName.Fighting:
        return "assets/type-icons/fighting.png";
      case TypeName.Fire:
        return "assets/type-icons/fire.png";
      case TypeName.Flying:
        return "assets/type-icons/flying.png";
      case TypeName.Ghost:
        return "assets/type-icons/ghost.png";
      case TypeName.Grass:
        return "assets/type-icons/grass.png";
      case TypeName.Ground:
        return "assets/type-icons/ground.png";
      case TypeName.Ice:
        return "assets/type-icons/ice.png";
      case TypeName.Normal:
        return "assets/type-icons/normal.png";
      case TypeName.Poison:
        return "assets/type-icons/poison.png";
      case TypeName.Psychic:
        return "assets/type-icons/psychic.png";
      case TypeName.Rock:
        return "assets/type-icons/rock.png";
      case TypeName.Steel:
        return "assets/type-icons/steel.png";
      case TypeName.Unknown:
        return "assets/type-icons/unknown.png";
      case TypeName.Water:
        return "assets/type-icons/water.png";
      default: 
        return "assets/type-icons/unknown.png";
    }
  }

}


