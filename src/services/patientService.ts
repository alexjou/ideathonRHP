// src/services/patientService.ts


import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where
} from 'firebase/firestore';
import { db } from './Firebase/firebase';

interface Patient {
  id?: string;
  name: string;
  age: number;
  healthStatus: 'crítico' | 'estável' | 'recuperando';
  admissionDate: Date;
  bedNumber: number;
  floor: number;
  room: number;
  expectedDischargeDate?: Date;
  notes?: string;
}

const COLLECTION_NAME = 'patients';

// Get all patients
export const getAllPatients = async (): Promise<Patient[]> => {
  const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Patient));
};

// Get a single patient by ID
export const getPatientById = async (id: string): Promise<Patient | null> => {
  const docRef = doc(db, COLLECTION_NAME, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as Patient;
  } else {
    return null;
  }
};

// Add a new patient
export const addPatient = async (patient: Omit<Patient, 'id'>): Promise<string> => {
  const docRef = await addDoc(collection(db, COLLECTION_NAME), patient);
  return docRef.id;
};

// Update a patient
export const updatePatient = async (id: string, patient: Partial<Patient>): Promise<void> => {
  const docRef = doc(db, COLLECTION_NAME, id);
  await updateDoc(docRef, patient);
};

// Delete a patient
export const deletePatient = async (id: string): Promise<void> => {
  const docRef = doc(db, COLLECTION_NAME, id);
  await deleteDoc(docRef);
};

// Get patients by health status
export const getPatientsByHealthStatus = async (status: Patient['healthStatus']): Promise<Patient[]> => {
  const q = query(collection(db, COLLECTION_NAME), where("healthStatus", "==", status));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Patient));
};

// Get patients by floor
export const getPatientsByFloor = async (floor: number): Promise<Patient[]> => {
  const q = query(collection(db, COLLECTION_NAME), where("floor", "==", floor));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Patient));
};