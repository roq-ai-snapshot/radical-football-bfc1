import { ParentPlayerInterface } from 'interfaces/parent-player';
import { AcademyInterface } from 'interfaces/academy';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  name: string;
  status: string;
  academy_id: string;
  user_id: string;
  created_at?: Date;
  updated_at?: Date;
  parent_player?: ParentPlayerInterface[];
  academy?: AcademyInterface;
  user?: UserInterface;
  _count?: {
    parent_player?: number;
  };
}

export interface PlayerGetQueryInterface extends GetQueryInterface {
  filter: {
    id?: string;
    name?: string;
    status?: string;
    academy_id?: string;
    user_id?: string;
  };
}
