window.addEventListener('load', function () {
  let my_tags = document.querySelectorAll('.my-tags')
  let avatar = document.querySelector('#avatar')
  let neko = document.querySelector('#neko')
  let currentBgColor;
  for (let i = 0; i < my_tags.length; i++) {
    my_tags[i].addEventListener('mouseover', function () {
      currentBgColor = this.style.backgroundColor
      console.log(currentBgColor);
      this.style.backgroundColor = this.style.color
      this.style.color = '#fff'
      neko.style.color = this.style.backgroundColor
    })
    my_tags[i].addEventListener('mouseleave', function () {
      this.style.color = this.style.backgroundColor
      this.style.backgroundColor = currentBgColor
    })
    my_tags[i].addEventListener('click', function () {
      avatar.style.backgroundColor = this.style.backgroundColor
    })
  }
})