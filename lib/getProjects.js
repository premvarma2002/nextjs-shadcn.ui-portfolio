import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function fetchProjects() {
  const colRef = collection(db, "projects");
  const snapshot = await getDocs(colRef);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
}