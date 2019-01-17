import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface Service {
  id: number;
  title: string;
  text: string;
  image: string;
  services?: Service[];
  // icon: IconDefinition;
}
