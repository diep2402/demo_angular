import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Status } from '../model/status.model';
import { User } from '../model/user.model'

export interface typeStore {
    isLoading: boolean;
    listStatus?: Status[];
    listUsers?: User[];
    error?: String
}

