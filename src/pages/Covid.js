import React from "react";
import Covid19 from "../img/covid-19.png";

export default function Covid() {
  return (
    <div>
      <main className="container">
        <div className="covid-container p-4 mb-4 rounded">
          <img src={Covid19} />
        </div>

        <div className="row g-5">
          <div className="col-md-8">
            <h3 className="pb-4 mb-4 fst-italic border-bottom">Covid19</h3>

            <article className="blog-post">
              <h2 className="blog-post-title mb-1">Coronavirus Nedir?</h2>
              <p>
                İlk olarak Çin’in Wuhan bölgesinde, 2019 yılı Aralık ayının
                başında görülüp, bu bölgedeki yetkililer tarafından tanımlandığı
                için gayri resmi Wuhan koronavirüsü adıyla da bilinen yeni
                koronavirüs solunum yolu enfeksiyonuna neden olan ve insandan
                insana geçebilen bulaşıcı bir virüstür.
              </p>
              <p>
                Dünya Sağlık Örgütü (WHO) tarafından virüsün resmi adı
                SARS-CoV-2 (Şiddetli Akut Solunum Sendromu-Koronavirus-2) olarak
                belirlenmiştir. Dünya Sağlık Örgütü virüsün neden olduğu
                hastalığı tanımlamak için COVID-19 terimini kullanmaktadır.
              </p>
              <p>
                30 Ocak 2020'de CoViD-19, Dünya Sağlık Örgütü tarafından küresel
                bir sağlık acil durumu ilan edilmiştir. 11 Mart 2020 tarihinde
                ise virüs pandemi, yani küresel salgın hastalık olarak ilan
                edilmiştir.
              </p>
              <h2>Nasıl Bulaşır?</h2>
              <p>
                Hasta bireylerin öksürmeleri aksırmaları ile ortama saçılan
                damlacıkların solunması ile bulaşır. Hastaların solunum
                parçacıkları ile kirlenmiş yüzeylere dokunulduktan sonra ellerin
                yıkanmadan yüz, göz, burun veya ağıza götürülmesi ile de virüs
                alınabilir. Kirli ellerle göz, burun veya ağıza temas etmek
                risklidir.
              </p>
              <h3>Kimler Daha Fazla Risk Altında?</h3>
              <p>
                COVID-19 enfeksiyonu ile ilgili şimdiye kadar edinilen bilgiler,
                bazı insanların daha fazla hastalanma ve ciddi semptomlar
                geliştirme riski altında olduğunu göstermiştir.{" "}
              </p>
              <ul>
                <li>Vakaların yüzde 80'i hastalığı hafif geçirmektedir.</li>
                <li>
                  Vakaların %20’si hastane koşullarında tedavi edilmektedir.
                </li>
                <li>
                  Hastalık, genellikle 60 yaş ve üzerindeki kişileri daha fazla
                  etkilemektedir.
                </li>
              </ul>
              <p>Hastalıktan En Çok Etkilenen Kişiler</p>
              <ol>
                <li>60 yaş üstü olanlar</li>
                <li>Ciddi kronik tıbbi rahatsızlıkları olan insanlar</li>
                <li>Sağlık Çalışanları</li>
              </ol>
              <h2>Korunma Yolları Nelerdir?</h2>
              <ul>
                <li>
                  El temizliğine dikkat edilmelidir. Eller en az 20 saniye
                  boyunca sabun ve suyla yıkanmalı, sabun ve suyun olmadığı
                  durumlarda alkol bazlı el antiseptiği kullanılmalıdır.
                  Antiseptik veya antibakteriyel içeren sabun kullanmaya gerek
                  yoktur, normal sabun yeterlidir.
                </li>
                <li>
                  Çiğ veya az pişmiş hayvan ürünleri yemekten kaçınılmalıdır.
                  İyi pişmiş yiyecekler tercih edilmelidir.
                </li>
                <li>
                  Eller yıkanmadan ağız, burun ve gözlerle temas edilmemelidir.
                </li>
                <li>
                  Hasta insanlarla temastan kaçınmalıdır (mümkün ise en az 1 m
                  uzakta bulunulmalı).
                </li>
                <li>
                  Öksürme veya hapşırma sırasında burun ve ağız tek kullanımlık
                  kağıt mendil ile örtülmeli, kağıt mendilin bulunmadığı
                  durumlarda ise dirsek içi kullanılmalı, mümkünse kalabalık
                  yerlere girilmemeli, eğer girmek zorunda kalınıyorsa ağız ve
                  burun kapatılmalı, tıbbi maske kullanılmalıdır.
                </li>
                <li>
                  Özellikle hasta insanlarla veya çevreleriyle doğrudan temas
                  ettikten sonra eller sık sık temizlenmelidir
                </li>
                <li>
                  Hastaların yoğun olarak bulunması nedeniyle mümkün ise sağlık
                  merkezlerine gidilmemeli, sağlık kuruluşuna gidilmesi gereken
                  durumlarda diğer hastalarla temas en aza indirilmelidir.
                </li>
              </ul>
              <h2>Yeni Koronavirüs Hastalığı (COVID-19) Ölümcül Müdür?</h2>
              <p>
                Hastalığa yakalanan kişiler üzerinden elde edilen verilere göre,
                hastalık yavaş bir seyir izlemekle birlikte 65 yaş üstü ve
                kronik rahatsızlığı kişilerde genç ve sağlıklı kişilere göre
                daha ağır seyretmekte, neden olduğu solunum yetmezliği
                sendromuyla özellikle bu grupta ölümlere neden olabilmektedir.
              </p>
              <h3>Corona Virüsü (Koronavirüs) Aşısı Bulundu Mu?</h3>
              <p>
                Wuhan Koronavirüsü olarak da anlılan Yeni Koronavirüs
                Hastalığı’nın Çin tarafından yayınlanan genomu temel alınarak
                bir aşı oluşturulması çalışmalarına uluslararası düzeyde
                başlanmıştır. ABD, Avustralya, Çin, İngiltere ve Kanada’da
                çeşitli üniversiteler ile özel kuruluşlar klinik testlere
                başlama aşamasına oldukça yaklaştıklarını açıklamaktadır.
              </p>
            </article>

            <article className="blog-post">
              <h2 className="blog-post-title mb-1">
                Coronavirus (Koronavirüs) Kuluçka Süresi
              </h2>
              <p>
                Koronavirüs belirtileri kişinin bağışıklık sistemi ve yaşına
                bağlı olarak da değişiklik gösterebilir. Fakat elde edilen
                verilere göre kuluçka süresinin, genellikle hastanın enfekte
                olmasından sonraki 2 ila 14 gün içerisinde gerçekleştiği
                yönündedir.
              </p>
              <p>
                Fakat, yapılan gözlemlerde, enfekte kişilerin pek çoğunun 3 ila
                10 gün arasında enfeksiyon belirtilerinin ortaya çıktığı tespit
                edilmiştir.
              </p>
            </article>
          </div>

          <div className="col-md-4">
            <div className="position-sticky">
              <div className="p-4 mb-3 bg-light rounded">
                <h4 className="fst-italic mb-3">COVID-19</h4>
                <p className="mb-0">
                  COVID-19'a yakalanan kişilerin çoğu, hafif ila orta düzeyde
                  semptomlar göstermekte ve özel bir tedaviye ihtiyaç duymadan
                  iyileşmektedir. Bazıları ise ciddi şekilde hastalanmakta ve
                  tıbbi yardıma ihtiyaç duymaktadır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
