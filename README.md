# fablocuk


Fablo REST'i browser uzerinden kullanilmasi


## gerekli seyler

- fablo agi fablo rest ile ayakta olmali

yapacagi islemler

- baglanacagi fablo rest url'sini sormali (bir defa)

- admin'in yapacagi isler
    - user register etmeli
    - diger user islemlerini yapsin

- kullanicinin yapacagi islemler
    - enroll olmali (login olmali)
    - fabricId (id etherdeki address gibi dusunulebilir), fabricSecret ile
        - islem basarili olursa fablo-rest kullanici certi'ini ve privkey'ini kaydeder kullaniciya bu seyleri kullanmasi icin token onder
    
## devam

- En altta Invoke ve Query butonu olacak
- Text Input ile Channel ID alinacak
- Text Input ile chaincode ID girilecek
- Chaincode'dan donecek response text olarak gosterilmeli. 

## next feature
- Data access icin layer yapisi localStorage veya Browser API'sine tek bir interface uzerinden erisilebilsin.
- Sonraki versiyonda localStorage ile adam channel id ve chaincode id'yi yaratir ve dropdown ile secebilir
- Argumanlar localStorage'da kayit edilir ve adamin default inputlari kaydedilmis olur
- Extension business icin ozel config dosyasi olabilir ve methodlar vs otomatik olarak extensiona aktarilir 
