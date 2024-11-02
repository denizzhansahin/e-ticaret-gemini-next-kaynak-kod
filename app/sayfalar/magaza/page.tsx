"use client";

import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';
import app_firebase from '../../firebaseConfig';
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import Image from 'next/image';
import Link from "next/link";

const storage = getStorage(app_firebase);
const db = getFirestore(app_firebase);

interface Item {
    ID: string;
    arka_plan_ayrilmis_gorsel_adi: string;
    orijinal_gorsel_adi: string;
    urun_adi: string;
    urun_fiyat: string;
    urun_ilgi_cekici: string;
    urun_kategori: string;
    urun_marka: string;
    urun_model: string;
    urun_ozellikler: string;
    yolo_gorsel_adi: string;
    yolo_gorsel_bilgisi: string;
    yolo_gorsel_kategori: string;
    imageUrl: string | null;
}

async function gorselIndir(yol?: string): Promise<string | null> {
    if (!yol) return null;
    try {
        const storageRef = ref(storage, yol);
        const url = await getDownloadURL(storageRef);
        return url;
    } catch (error) {
        console.error('Error getting download URL:', error);
        return null;
    }
}

const Magaza: React.FC = () => {
    const [urunler, setUrunler] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUrunler = async () => {
            try {
                const urunlerRef = collection(db, "urunVeri");
                const snapshot = await getDocs(urunlerRef);
                const urunlerData = snapshot.docs.map((doc) => ({
                    ID: doc.id,
                    ...doc.data(),
                })) as Item[];

                const urunlerWithUrls = await Promise.all(
                    urunlerData.map(async (urun) => {
                        const imageUrl = await gorselIndir(urun.arka_plan_ayrilmis_gorsel_adi);
                        return { ...urun, imageUrl };
                    })
                );

                setUrunler(urunlerWithUrls);
            } catch (error) {
                console.error("Error fetching items:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUrunler();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center space-x-4 mb-4">
                <Link href="/">
                    <h1 className="text-2xl font-bold">Anasayfa</h1>
                </Link>
                <Link href="/magaza">
                    <h1 className="text-2xl font-bold">Mağaza</h1>
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {urunler.map((urun) => (
                    <div key={urun.ID} className="border p-4 rounded shadow-sm">
                        {urun.imageUrl ? (
                            <Image
                                src={urun.imageUrl}
                                alt={urun.urun_adi}
                                width={200}
                                height={200}
                                className="mb-4"
                            />
                        ) : (
                            <p>Image not available</p>
                        )}
                        <h2 className="text-xl font-semibold">{urun.urun_adi}</h2>
                        <p className="text-gray-700">{urun.urun_ilgi_cekici}</p>
                        <p className="font-bold">{urun.urun_fiyat}</p>
                        <p className="text-sm text-gray-600"><span className="font-bold">Kategori</span> : {urun.urun_kategori}</p>
                        <p className="text-sm text-gray-600"><span className="font-bold">Marka</span> :  {urun.urun_marka}</p>
                        <p className="text-sm text-gray-600"><span className="font-bold">Model</span> :  {urun.urun_model}</p>
                        <p className="text-sm text-gray-600"><span className="font-bold">Özellikleri</span> :  {urun.urun_ozellikler}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Magaza;
