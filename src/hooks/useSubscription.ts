import { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Subscription } from '@/types';

export function useSubscription(userId: string | undefined) {
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const unsubscribe = onSnapshot(
      doc(db, 'subscriptions', userId),
      (doc) => {
        if (doc.exists()) {
          setSubscription(doc.data() as Subscription);
        } else {
          setSubscription(null);
        }
        setLoading(false);
      },
      (error) => {
        console.error('Error fetching subscription:', error);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, [userId]);

  return { subscription, loading };
}
</bktAction>

<boltAction type="file" filePath="src/hooks/useJobPreferences.ts">
import { useState, useEffect } from 'react';
import { 
  collection,
  doc,
  setDoc,
  onSnapshot,
  serverTimestamp 
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '@/lib/firebase';
import type { JobPreference } from '@/types';

export function useJobPreferences(userId: string | undefined) {
  const [preferences, setPreferences] = useState<JobPreference | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const unsubscribe = onSnapshot(
      doc(db, 'jobPreferences', userId),
      (doc) => {
        if (doc.exists()) {
          setPreferences(doc.data() as JobPreference);
        } else {
          setPreferences(null);
        }
        setLoading(false);
      }
    );

    return unsubscribe;
  }, [userId]);

  const savePreferences = async (data: Omit<JobPreference, 'id' | 'userId' | 'createdAt' | 'updatedAt'>, resumeFile?: File) => {
    if (!userId) throw new Error('User not authenticated');

    let resumeUrl = data.resumeUrl;

    if (resumeFile) {
      const storageRef = ref(storage, `resumes/${userId}/${resumeFile.name}`);
      await uploadBytes(storageRef, resumeFile);
      resumeUrl = await getDownloadURL(storageRef);
    }

    const preferenceData: JobPreference = {
      ...data,
      userId,
      resumeUrl,
      createdAt: preferences?.createdAt || serverTimestamp() as unknown as Date,
      updatedAt: serverTimestamp() as unknown as Date,
    };

    await setDoc(doc(db, 'jobPreferences', userId), preferenceData);
  };

  return { preferences, loading, savePreferences };
}