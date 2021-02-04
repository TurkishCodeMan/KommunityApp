<template>
  <div class="d-flex justify-content-center align-items-center special flex-column p-5">
      <div class="header text-center">
          <h3>Özelliklerimiz</h3>
          <p>Siz ve topluluklarınız için akıllı çözümler sunuyoruz.</p>
      </div>
      <div class="d-flex justify-content-between w-100 p-4">
          <div class="create-activity">
              <i class="far fa-bell icon alarm"></i>
              <h6><strong>Etkinlikler Organize Edin</strong></h6>
              <p>Sonraki etkinliğinizi oluşturun ve LCV yapın, üstelik her zaman ücretsiz.</p>
          </div>
            <div class="create-activity">
              <i class="far fa-smile icon smile"></i>
              <h6><strong>Sınırlı Kontenjan</strong></h6>
              <p>Sonraki etkinliğinizi oluşturun ve LCV yapın, üstelik her zaman ücretsiz.</p>
          </div>
           <div class="create-activity">
              <i class="fas fa-bolt icon bolt"></i>
              <h6><strong>Konuşmacı Çağrısı</strong></h6>
              <p>Sonraki etkinliğinizi oluşturun ve LCV yapın, üstelik her zaman ücretsiz.</p>
          </div>
      </div>
         <div class="d-flex justify-content-between w-100 p-4">
          <div class="create-activity">
              <i class="fas fa-volume-up icon volume"></i>
              <h6><strong>Bildirimler</strong></h6>
              <p>Topluluğunuzun etkinlikleri ve planları hakkında üyelerinize e-posta göndermeyi unutmayın.</p>
          </div>
            <div class="create-activity">
         <i class="fas fa-comment-dots icon comment"></i>
              <h6><strong>Fotoğraflar & Konuşmalar ve Sunumlar</strong></h6>
              <p>Etkinliklerinizden sonra etkinlik sayfanıza videolar, sunumlar ve fotoğraflar yükleyin.</p>
          </div>
           <div class="create-activity">
            <i class="fas fa-comment-dots icon comment"></i>
              <h6><strong>Hiçbir şeyi kaçırmayın!</strong></h6>
              <p>Favori topluluklarınızı, etkinliklerinizi ve takip ettiğiniz kişileri anasayfanızda görün.</p>
          </div>
      </div>


    <button class="btn btn-yellow m-4">Tüm Özellikleri Keşfedin</button>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url("../../../assets/css/style.css");
.icon{
    font-size: 40px;
    margin-bottom: 0.8rem;
}
.alarm{
    color: #44B9D9;
}
.smile{
    color:#E8B5AF;
}
.bolt{
    color:#FFBC00;
}
.volume{
    color:#224FE1;
}
.comment{
    color:#B6E2CB;
}
.special {
  background-color: #ebf0f4;
}
</style>