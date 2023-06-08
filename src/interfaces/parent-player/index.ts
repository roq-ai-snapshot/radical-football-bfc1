import { ParentInterface } from 'interfaces/parent';
import { PlayerInterface } from 'interfaces/player';
import { GetQueryInterface } from 'interfaces';

export interface ParentPlayerInterface {
  id?: string;
  parent_id: string;
  player_id: string;
  created_at?: Date;
  updated_at?: Date;

  parent?: ParentInterface;
  player?: PlayerInterface;
  _count?: {};
}

export interface ParentPlayerGetQueryInterface extends GetQueryInterface {
  filter: {
    id?: string;
    parent_id?: string;
    player_id?: string;
  };
}
