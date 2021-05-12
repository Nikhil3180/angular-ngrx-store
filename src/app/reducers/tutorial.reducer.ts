import { Action } from '@ngrx/store';
import {Tutorial} from './../model/tutorial.model';
import * as TutorialActions from './../actions/tutorials.actions';

const InitialState: Tutorial = {
    name: 'Initial State',
    url : 'http://google.com'
}

export function reducer(state : Tutorial[] = [InitialState], action: TutorialActions.Actions){
    switch(action.type){
        case TutorialActions.ADD_TUTORIAL:
            return [...state,action.payload];
        case TutorialActions.REMOVE_TUTORIAL:
            state.splice(action.payload, 1)
            return state;
        default :
            return state;
    }
}