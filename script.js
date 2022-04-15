function verificar(){
  var date = new Date()
  var ano = date.getFullYear()
  var fano = window.document.getElementById("txtano")
  var res = window.document.getElementById("res")

  if (fano.value < 1910 || fano.value > ano){
    window.alert(`Esse ano é inválido. Tente outro.`)
    res.innerHTML = `<p>Esse ano é <strong>inválido</strong>. Tente outro.</p>`
  } else {
    var fsex = window.document.getElementsByName("sex")
    var idade = ano - Number(fano.value)
    var genero = ""
    if (fsex[0].checked) {
      genero = "Homem"
      if (idade >= 0 && idade < 3){
        res.innerHTML = `<p>Achamos um ${genero} com ${idade} anos de idade.</p>`
        res.innerHTML += `<img src="imagens/baby_men.jpg" alt="">`
      } else if (idade >= 3 && idade < 12) {
        res.innerHTML = `<p>Achamos um ${genero} com ${idade} anos de idade.</p>`
        res.innerHTML += `<img src="imagens/kid_men.jpg" alt="">`
      } else if (idade >= 12 && idade < 18) {
        res.innerHTML = `<p>Achamos um ${genero} com ${idade} anos de idade.</p>`
        res.innerHTML += `<img src="imagens/yong_men.jpg" alt="">`
      } else if (idade >= 18 && idade < 60) {
        res.innerHTML = `<p>Achamos um ${genero} com ${idade} anos de idade.</p>`
        res.innerHTML += `<img src="imagens/adult_men.jpg" alt="">`
      } else {
        res.innerHTML = `<p>Achamos um ${genero} com ${idade} anos de idade.</p>`
        res.innerHTML += `<img src="imagens/old_men.jpg" alt="">`
      }
    } else if (fsex[1].checked) {
      genero = "Mulher"
      if (idade >= 0 && idade < 3){
        res.innerHTML = `<p>Achamos um ${genero} com ${idade} anos de idade.</p>`
        res.innerHTML += `<img src="imagens/baby_woman.jpg" alt="">`
      } else if (idade >= 3 && idade < 12) {
        res.innerHTML = `<p>Achamos um ${genero} com ${idade} anos de idade.</p>`
        res.innerHTML += `<img src="imagens/kid_woman.jpg" alt="">`
      } else if (idade >= 12 && idade < 18) {
        res.innerHTML = `<p>Achamos um ${genero} com ${idade} anos de idade.</p>`
        res.innerHTML += `<img src="imagens/yong_woman.jpg" alt="">`
      } else if (idade >= 18 && idade < 60) {
        res.innerHTML = `<p>Achamos um ${genero} com ${idade} anos de idade.</p>`
        res.innerHTML += `<img src="imagens/adult_woman.jpg" alt="">`
      } else {
        res.innerHTML = `<p>Achamos um ${genero} com ${idade} anos de idade.</p>`
        res.innerHTML += `<img src="imagens/old_woman.jpg" alt="">`
      }
    }
  }
}