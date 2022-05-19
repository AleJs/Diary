import { types } from "../types/types";

const initialState = {
  notes: [],
  active: null,
  loading: false,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };

    case types.notesLoad:
      return {
        ...state,
        notes: [...action.payload],
      };
    case types.notesUpdated:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload.note : note
        ),
      };
    case types.notesDelete:
      return {
        ...state,
        active: null,
        loading: false,
        notes: state.notes.filter((notes) => notes.id !== action.payload.id),
      };
    case types.notesClean:
      return {
        active: null,
        notes: [],
        loading: false,
      };
    case types.notesStartLoading:
      return {
        ...state,
        loading: true,
      };
    case types.notesFinishLoading:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
