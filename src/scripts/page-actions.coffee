# Set the color of the content links to template color
links = document.getElementsByTagName('a')
i = 0
while i < links.length
  if links[i].href
    links[i].className += textColor
  i++
