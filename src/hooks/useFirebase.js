import { initializeApp } from 'firebase/app'
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    updateDoc,
} from 'firebase/firestore/lite'

export default function useFirebase() {
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FB_API_KEY,
    authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FB_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FB_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FB_APP_ID,
  }

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  const jobCollection = collection(db, 'jobs')

  async function getJobs() {
    const jobsSnapshot = await getDocs(jobCollection)
    const jobList = jobsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    return jobList
  }

  async function getJob(id) {
    const docRef = doc(db, 'jobs', id)
    const docSnap = await getDoc(docRef)
    return docSnap.data()
  }

  async function createJob(job) {
    await addDoc(jobCollection, job)
  }

  async function updateJob(id, job) {
    const docRef = doc(db, 'jobs', id)
    await updateDoc(docRef, job)
  }

  async function deleteJob(id) {
    const docRef = doc(db, 'jobs', id)
    await deleteDoc(docRef)
  }

  return { getJobs, getJob, updateJob, createJob, deleteJob }
}
