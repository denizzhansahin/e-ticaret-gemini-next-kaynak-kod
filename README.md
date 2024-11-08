![Gemini_Generated_Image_bq8eifbq8eifbq8e](https://github.com/user-attachments/assets/da31c257-a126-472e-8fda-1dfd0372fa65)


Kısa YouTube - 1 DK Video : https://www.youtube.com/watch?v=N2tdlw3Y6uk 

Detaylı YouTube Video Açıklama : https://www.youtube.com/watch?v=XSnxymlDqRE

Web Sitesi : https://e-ticaret-nextjs-gemini-python.vercel.app/


Bu uygulama, yüklediğiniz ürün görseli üzerinden analiz yaparak ürünün adı, markası, modeli, fiyatı, ve teknik özelliklerini (boyut, ağırlık, renk, malzeme) otomatik olarak tespit eder. Gemini AI teknolojisini kullanarak, ürününüzün en iyi şekilde tanıtılması için profesyonel ve etkileyici bir içerik metni oluşturur. Online pazarlama ve e-ticaret dünyasında, ürün tanıtımınız artık çok daha kolay! Dikkat! Biz ücretsiz bir Python çalıştıran bir sunucu kullanıyoruz. Bütçemiz olmadığı için kısıtlı çalıştırmaktayız, yani her zaman açık değil.


Bu projede, yapay zeka ve modern web teknolojileri kullanılarak görüntü işleme, nesne tanıma, görüntü iyileştirme ve ürün verisi oluşturma gibi çok aşamalı işlemler entegre bir sistem içinde gerçekleştirilmiştir. Projenin amacı, kullanıcıların yüklediği görseller üzerinden ürün bilgilerini otomatik olarak elde edip mağaza görünümünde sergilemektir. Sistem; YOLO, Hugging Face, Google Gemini API, NextJS, Python, NGROK, Google Firebase gibi farklı teknolojilerden oluşan karmaşık bir altyapı üzerine inşa edilmiştir.

Projeye ilk adımda, kullanıcılar NextJS kullanılarak hazırlanmış web sitesi üzerinden ürün görsellerini yüklemektedir. NextJS, modern ve performanslı bir arayüz sunarak kullanıcı deneyimini iyileştirir ve kullanıcıların projeye görsellerini sorunsuz bir şekilde yüklemelerine olanak tanır. Yüklenen görseller, kullanıcı dostu bir arayüz aracılığıyla Base64 formatına dönüştürülerek Google Firebase Realtime Database üzerine gönderilir. Bu işlem, Firebase'in hızlı ve güvenli veri işleme özelliklerinden yararlanarak kullanıcı verilerinin gerçek zamanlı bir veritabanında depolanmasını sağlar.

İkinci aşamada, Python tabanlı bir sunucu devreye girer. Bu sunucu, Google Colab ortamında çalışmakta olup NGROK sayesinde internete bir alan adı ile bağlanır. NGROK, Google Colab üzerinde çalışan sunucunun internete açılmasını sağlayarak dışarıdan HTTP istekleri almasını mümkün kılar. Bu çözüm, kullanıcıların Colab ortamında ücretsiz bir şekilde sistemle etkileşimde bulunmasını sağlar. Google Firebase Realtime Database üzerinden sunucuya gelen her bir görsel, öncelikle Base64 formatından PNG formatına dönüştürülerek işlenmeye hazır hale getirilir. Burada NGROK ile doğrudan Google Colab ortamına Base64 verisi göndermedik çünkü ücretsiz NGROK sürümünde HTTP GET limiti vardı. Biz ise Base64 verisini Google Colab ortamına Google Firebase üzerinden yüklemek ve geri kalan tüm süreci yönetmek için HTTP GET kısmını tetikleme amacı için kullandık.

Sunucu tarafında, görüntü işleme işlemleri sırasıyla gerçekleştirilir. İlk olarak YOLO modeli kullanılarak görseldeki nesneler tespit edilir. YOLO (You Only Look Once), yüksek hız ve doğrulukla nesne tanıma yapabilen bir model olarak bu projede önemli bir rol oynar.  Bu işlemden sonra, Hugging Face üzerinden indirilen özel bir model kullanılarak arka plan kaldırma işlemi yapılır. Arka plan kaldırma, görselin odak noktasını ürüne çevirerek mağaza görünümünde daha profesyonel bir sunum sağlar.

Görselin arka planı kaldırıldıktan sonra, ürünün özelliklerini belirlemek amacıyla Google Gemini API devreye girer. Gemini API, gelişmiş doğal dil işleme ve görüntü işleme özellikleri ile görseldeki ürün hakkında bilgi sağlar. Ürün adı, marka, model, fiyat, özellikler, kategori gibi detaylı bilgiler API üzerinden alınır. Bu bilgiler, kullanıcı deneyimini zenginleştirmek ve mağaza görünümünde ürünün özelliklerini doğru bir şekilde sunmak amacıyla kullanılır.

Elde edilen tüm veriler Firebase Firestore Database üzerinde saklanır. Firestore, esnek bir veritabanı yapısı sunarak bu bilgilerin dinamik bir şekilde düzenlenmesini ve yönetilmesini kolaylaştırır. Bu işlem süreci, ürünün bilgilerini ve işlenmiş görsellerini Firebase Storage üzerine kaydedilmesi ile son bulur. Firebase Storage, görsellerin güvenli ve hızlı bir şekilde saklanmasını sağlarken, mağaza görünümü için gerekli olan tüm görsel ve metin verilerini bir arada tutar.

Sistemin kullanıcı tarafındaki mağaza görünümü, yine NextJS ile geliştirilmiş olup kullanıcıların kendi ürünlerini ve diğer ürünleri görmesine olanak tanır. Kullanıcılar, web arayüzünden ürünlerinin özelliklerini, fiyatlarını ve açıklamalarını inceleyebilir. Bu özellik, projeye kullanıcı dostu bir e-ticaret deneyimi kazandırarak sistemin hem kullanışlı hem de işlevsel bir ürün yönetim platformu olarak kullanılabilmesini sağlar.

Bu projeyi ücretsiz olarak çalıştırmak için, Vercel aracılığıyla ücretsiz web hosting sağlanmıştır. Vercel, NextJS tabanlı web uygulamasının performansını artırır ve kullanıcı deneyimini iyileştirir. Python tabanlı sunucu için NGROK üzerinden bir alan adı sağlanmış ve Google Colab ortamında ücretsiz yapay zeka işlemleri yapılmıştır. Firebase, veritabanı ve dosya depolama hizmetlerini güvenilir bir altyapı ile sağlarken, projenin ücretsiz ve sürekli çalışabilir olmasını destekler.

Projede ayrıca FLASK ve CORS kullanılarak NGROK üzerinden gelen HTTP isteklerini yönetmek üzere özel bir API geliştirilmiştir. Bu API, kullanıcıların görsellerini yüklemesiyle tetiklenen HTTP GET isteklerini otomatik olarak işler. Gelen istekler, API modülü tarafından incelenip sırasıyla Gemini ve diğer yapay zeka işlemleri yürütülerek son kullanıcıya gerekli bilgiler sağlanır. Bu yapı, sistemin ölçeklenebilirliğini ve esnekliğini artırarak kullanıcıların verimli bir şekilde işlem yapabilmelerine imkan tanır. 

Proje genel olarak, yapay zeka destekli bir ürün bilgi yönetim sistemi olarak çalışmakta ve kullanıcıların görseller üzerinden kapsamlı ürün bilgisi elde etmesine imkan tanımaktadır.

## Kullandığımız Teknolojiler


| ![full](https://github.com/user-attachments/assets/a9c4497b-fda5-47bd-bfc0-b8e5d88158d2) | ![4a2be73b1e2efb44355436c40bf496dd](https://github.com/user-attachments/assets/40951cec-aee7-49e0-aa66-f6dcc220caaf) | ![Python-logo-notext svg](https://github.com/user-attachments/assets/e34a1a09-93b1-4c7a-9211-91b9edcf77ae) |
| --- | --- | --- |
| ![indir](https://github.com/user-attachments/assets/ff90bbc2-ae5a-400a-b097-60e63e15d8e2) | ![hf-logo](https://github.com/user-attachments/assets/2bf47839-6170-4bf6-93be-68e7b1226c7c) | ![Gemini_language_model_logo](https://github.com/user-attachments/assets/124143ef-75d4-449f-b5d6-e0e05901e80c) |
| ![6411ffa0b395a44345ed2b1a_Frame 1](https://github.com/user-attachments/assets/cadfa772-6aae-45f3-b9b9-f5ee94fd8662) | ![Google_Colaboratory_SVG_Logo svg](https://github.com/user-attachments/assets/cdf76d03-25f3-41d4-8de3-d96778ccb7a8) | ![logo-vertical](https://github.com/user-attachments/assets/aa416db5-6858-454c-b65a-b6caf328256d) |
| ![vercel](https://github.com/user-attachments/assets/3a1d3ebd-a7c7-494e-851b-f0698272af31) | ![flask-icon-1594x2048-84mjydzf](https://github.com/user-attachments/assets/15345dfe-d5f6-48e2-865d-5081a059478b) |  |





## Geliştiriciler

DENİZHAN ŞAHİN :

https://github.com/denizzhansahin

https://www.linkedin.com/in/denizzhan-sahin/


ÖMER ŞARLAVUK : 

https://github.com/OmerSarlavuk


https://www.linkedin.com/in/omersarlavuk/






## BAŞLANGIÇ
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# e-ticaret-gemini-next-kaynak-kod
