import { infoProgress } from '../shared/user-form-info.model';

export class UserInfo {
  public name: string;
  public description: string;
  public imagePath: string;
  public infoprogress: infoProgress[];

  constructor(name: string, desc: string, imagePath: string, infoprogress: infoProgress[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.infoprogress = infoprogress;
  }
}
