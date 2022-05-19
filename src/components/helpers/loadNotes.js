import { db } from "../../firebase/firebase-config";

export const loadNotes = async (uid) => {
  const notesDb = await db
    .collection(`${uid}/journal/notes`)
    .orderBy("date", "desc")
    .get();
  const notes = [];
  notesDb.forEach((notesDb) => {
    notes.push({
      id: notesDb.id,
      ...notesDb.data(),
    });
  });

  return notes;
};
