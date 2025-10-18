let vizeNotu = 0;
let finalNotu = 0;
let bütünlemeNotu = 0;
let ortalamaNotu = 0;

let yeniSatır = "\r\n";
let girilenNot = prompt(
  "1-Vize notunuzu giriniz:" +
    yeniSatır +
    "2-Final notunuzu giriniz:" +
    yeniSatır +
    "3-Bütünleme notunuzu giriniz:" +
    yeniSatır +
    "4-Çıkış"
);

switch (girilenNot) {
  case "1":
    vizeNotu = Number(prompt("Vize notunu giriniz:"));
    alert("Vize notu kaydedildi:" + vizeNotu);

  case "2":
    finalNotu = Number(prompt("Final notunu giriniz:"));
    let ortalamaNotu = vizeNotu * 0.4 + finalNotu * 0.6;
    if (ortalamaNotu >= 60) {
      alert("Geçtiniz:" + ortalamaNotu);
      break;
    } else {
      alert("Bütünlemeye kaldınız:" + ortalamaNotu);
    }

  case "3":
    bütünlemeNotu = Number(prompt("Bütünleme notunu giriniz:"));
    ortalamaNotu = vizeNotu * 0.4 + bütünlemeNotu * 0.6;
    if (ortalamaNotu >= 60) {
      alert("Tebrikler geçtiniz:" + ortalamaNotu);
    } else {
      alert("Başaramadınız , seneye görüşmek üzere:" + ortalamaNotu);
    }
    break;
  default:
    alert("geçerli bir işlem yapınız");
}
