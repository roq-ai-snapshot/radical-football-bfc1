import { ParentPlayerInterface } from 'interfaces/parent-player';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ParentInterface {
  id?: string;
  name: string;
  user_id: string;
  created_at?: Date;
  updated_at?: Date;
  parent_player?: ParentPlayerInterface[];
  user?: UserInterface;
  _count?: {
    parent_player?: number;
  };
}

export interface ParentGetQueryInterface extends GetQueryInterface {
  filter: {
    id?: string;
    name?: string;
    user_id?: string;
  };
}
