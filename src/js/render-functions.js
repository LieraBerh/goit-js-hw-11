function pictureTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li><img src="${webformatURL}" alt='${tags}'/>
  <p class="coin-title">${symbol}</p>
  <p class="coin-price">${(+price).toFixed(2)}</p></li>
  
`;
}
