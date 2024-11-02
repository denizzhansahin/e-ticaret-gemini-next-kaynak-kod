"use client";
import { useEffect, useState } from "react";
import { ref, update, onValue } from "firebase/database";
import { database } from "./firebase";
import Image from "next/image";

import axios from "axios";


import Github from "./github.png"
import Linkedin from "./linkedin.png"


import Logomuz from "./logomuz.jpeg"

import Link from "next/link";


import { ChangeEvent } from "react"; // Import ChangeEvent type


export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [site, setSite] = useState(""); // site değişkeni için state


  // site değişkenini Firebase'den almak için useEffect kullanıyoruz
  useEffect(() => {
    const dbRef = ref(database, "/site"); // "site" verisinin bulunduğu yol
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setSite(data); // site değişkenini ayarla
        console.log("Site Değeri:", data); // Konsola yazdır
      }
    });
  }, []);

  const handleFetchData = async () => {
    alert("Görsel işlenmeye başladı, burada ister bekle ister bekleme, mağaza bölümüne tıklarsan en geç 5 dakika içinde yükler, neden 5 dakika diye sorarsan, canımız sıkıldı kodu öyle yazdık :) jqjkhfqwuehfqwıuehfqwuıeh");

    const ngrokUrl = site; // Gerçek ngrok URL'nizi buraya koyun

    const response = await axios.get(ngrokUrl, {
      headers: {
        'ngrok-skip-browser-warning': 'true' // Bu başlığı ayarlayın
      }
    });

    // Yanıtı kontrol et
    console.log("Gelen yanıt:", response.data);

    if (response.status >= 200 && response.status < 300) {
      alert("Görsel işlenmeye başladı, burada ister bekle ister bekleme, mağaza bölümüne tıklarsan en geç 5 dakika içinde yükler, neden 5 dakika diye sorarsan, canımız sıkıldı kodu öyle yazdık :) jqjkhfqwuehfqwıuehfqwuıeh");
      console.log("İstek başarılı, yanıt durumu:", response.status);
      //alert("İstek başarılı, görüntü işleme başlıyor veya bitti");
    } else {
      alert("Sunucumuz kapalı olabilir, her zaman açık tutumuyoruz, çünkü çok para gidiyor");
      //alert("İstek başarılı, görüntü işleme başlıyor veya bitti");
      throw new Error("Ağ yanıtı uygun değil: " + response.statusText);
    }

  };



  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Use optional chaining to avoid errors
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        // Check if reader.result is a string
        if (typeof reader.result === 'string') {
          const base64String = reader.result.split(",")[1]; // Now it's safe to use split

          try {
            const updates = {
              base64: base64String,
            };

            const dbRef = ref(database, "/");
            await update(dbRef, updates);
            alert("Görsel başarıyla yüklendi!");
            handleFetchData();

          } catch (error) {
            console.error("Görsel yükleme hatası:", error);
            alert("Görsel yükleme hatası");
          }
        } else {
          console.error("reader.result is not a string");
        }
      };
      reader.readAsDataURL(file);
      setImage(URL.createObjectURL(file));
    }
  };

  return (<>
    <div className="flex items-center space-x-4">
      <Link href="/">
        <h1 className="text-2xl font-bold mb-4">Anasayfa</h1>
      </Link>
      <Link href="sayfalar/magaza">
        <h1 className="text-2xl font-bold mb-4">Mağaza</h1>
      </Link>
    </div>
    <div className="flex min-h-screen text-gray-800">

      {/* Sol Bölüm: Açıklamalar ve GitHub & LinkedIn Linkleri */}
      <div className="w-1/2 p-10 space-y-6 bg-white shadow-lg">
        <h1 className="text-4xl font-extrabold text-purple-800">Proje Hakkında</h1>

        <a
          href="https://github.com/denizzhansahin/e-ticaret-gemini-next-kaynak-kod"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-purple-600 hover:underline"
        >
          <Image src={Github} alt="GitHub" width={20} height={20} />
          Projemizin GitHub Adresi ve Tüm Kodlarına Bakmak için Tıklayın
        </a>

        <Image src={Logomuz} alt="GitHub" width={300} height={300} />
        <p className="text-lg text-gray-700 leading-relaxed">
          Bu uygulama, yüklediğiniz ürün görseli üzerinden analiz yaparak
          ürünün adı, markası, modeli, fiyatı, ve teknik özelliklerini (boyut, ağırlık, renk, malzeme)
          otomatik olarak tespit eder. <span className="font-semibold">Gemini AI</span> teknolojisini kullanarak, ürününüzün
          en iyi şekilde tanıtılması için profesyonel ve etkileyici bir içerik metni oluşturur.
          Online pazarlama ve e-ticaret dünyasında, ürün tanıtımınız artık çok daha kolay!

          Dikkat! Biz ücretsiz bir Python çalıştıran bir sunucu kullanıyoruz. Bütçemiz olmadığı için kısıtlı çalıştırmaktayız, yani her zaman açık değil. Sistemin nasıl çalıştığını merak ediyorsanız lütfen GitHub adresimize gidiniz.
        </p>



        <h2 className="text-2xl font-bold text-purple-700 mt-8">Geliştiriciler</h2>
        <ul className="space-y-4">
          <li>
            <a
              href="https://github.com/denizzhansahin/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-600 hover:underline"
            >
              <Image src={Github} alt="GitHub" width={20} height={20} />
              Denizhan Şahin - GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/denizzhan-sahin/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-600 hover:underline"
            >
              <Image src={Linkedin} alt="LinkedIn" width={20} height={20} />
              Denizhan Şahin - LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/OmerSarlavuk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-600 hover:underline"
            >
              <Image src={Github} alt="GitHub" width={20} height={20} />
              Ömer Şarlavuk - GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/%C3%B6mer-%C5%9Farlavuk-34004525a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-600 hover:underline"
            >
              <Image src={Linkedin} alt="LinkedIn" width={20} height={20} />
              Ömer Şarlavuk - LinkedIn
            </a>
          </li>
        </ul>
      </div>

      {/* Sağ Bölüm: Görsel Yükleme Alanı */}
      <div className="w-1/2 p-10 flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-purple-800 text-white shadow-lg">
        <div className="bg-purple-500 p-10 rounded-lg shadow-md w-full max-w-lg text-center">
          <h1 className="text-3xl font-bold mb-4">Ürün Görselinizi Hemen Yükleyin!</h1>
          <p className="text-lg mb-6 leading-relaxed text-gray-200">
            Tek bir tıklamayla ürününüz hakkında tüm detaylara erişin! Görsel yükleyin ve otomatik analiz
            ile ürününüzü anında tanıtıma hazır hale getirelim.
          </p>

          <div className="flex justify-center mb-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="upload"
            />
            <label
              htmlFor="upload"
              className="cursor-pointer bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:bg-gray-100"
            >
              Görsel Yükle
            </label>
          </div>

          {image && (
            <div className="mt-6">
              <img src={image} alt="Yüklenen Görsel" className="rounded-lg shadow-lg max-h-80 mx-auto" />
            </div>
          )}
        </div>

        {/* site değişkeninin değerini yazdır */}
        {site && (
          <div className="mt-4 text-center text-lg text-white">
            Site Değeri: {site}
          </div>
        )}
      </div>
    </div>
  </>
  );
}
