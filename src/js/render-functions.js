function pictureTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
<li>
<a class="gallery-link" href="${largeImageURL}">
<img src="${webformatURL}" alt='${tags}'/>
<p class="coin-title">Likes: ${likes}</p>
<p class="coin-price">Views: ${views}</p>
<p class="coin-title">Comments: ${comments}</p>
<p class="coin-price"> Downloads: ${downloads}</p></a>
</li>`;
}
export function picturesTemplate(arr) {
  return arr.map(pictureTemplate).join('');
}
