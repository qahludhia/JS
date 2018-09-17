function itungBmi(tb, bb){
  var hasil = bb/(tb/100*tb/100)
  console.log(hasil)

  if (hasil < 17) {
    return "Lo kurang makan";
  } else if (hasil === 18.5 || hasil < 25) {
    return "Sehat uga lau";
  } else if (hasil > 27) {
    return "Kebanyakan makan enak";  
  }
}

console.log(itungBmi(170, 20))
