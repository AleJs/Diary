import Swal from "sweetalert2";

import { db } from "../../firebase/firebase-config";
import { types } from "../../types/types";
import { loadNotes } from "../helpers/loadNotes";
import { uploadFile } from "../helpers/uploadFile";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

    dispatch(activeNote(doc.id, newNote));
    dispatch(StartLoadingNotes(uid));
  };
};

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});

export const StartLoadingNotes = (uid) => {
  return async (dispatch) => {
    dispatch(startLoadingNotes());
    const notes = await loadNotes(uid);
    await dispatch(finishLoadingNotes());
    dispatch(setNotes(notes));
  };
};

export const EditNote = (note) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    if (note.url === undefined) {
      delete note.url;
    }
    const newNote = { ...note };
    delete newNote.id;

    await db
      .doc(`${uid}/journal/notes/${note.id}`)
      .update(newNote)
      .then(() => {})
      .catch((error) => {
        console.error("Error writing dcument: ", error);
      });
    dispatch(refreshNote(note.id, newNote));
    // Swal.fire("Saved", note.title, "success");
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "has been saved successfully",
      showConfirmButton: false,

      timer: 1500,
    });
  };
};

export const refreshNote = (id, note) => ({
  type: types.notesUpdated,
  payload: {
    id,
    note: {
      id,
      ...note,
    },
  },
});

export const startUpload = (file, getState) => {
  return async (dispatch, getState) => {
    const activeNote = getState().notes.active;

    Swal.fire({
      title: "uploading...",
      text: "Please Waiit!!",
      width: "25rem",
      allowOutsideClick: false,
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    const pictureUrl = await uploadFile(file);
    activeNote.url = pictureUrl;
    dispatch(EditNote(activeNote));
    Swal.close();
  };
};

export const startSupr = (id) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;

    await db.doc(`${uid}/journal/notes/${id}`).delete();
    dispatch(deleteNote(id));
  };
};
export const deleteNote = (id) => ({
  type: types.notesDelete,
  payload: {
    id,
  },
});

export const logoutNote = () => ({
  type: types.notesClean,
});

export const startLoadingNotes = () => ({
  type: types.notesStartLoading,
});

export const finishLoadingNotes = () => ({
  type: types.notesFinishLoading,
});
