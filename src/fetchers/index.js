import { GiphyFetch } from "@giphy/js-fetch-api";

const gf = new GiphyFetch("KOpBi18I6n9WLqFmZAt6vLgrPln2HIii");

export async function fetchGifs({ q, options }) {
  const { data: gifs } = await gf.search(q, options);
  return gifs;
}

export async function fetchTrending(params = {}) {
  const { data: gifs } = await gf.trending(params);
  return gifs;
}

export async function fetchGif(id) {
  const { data: gif } = await gf.gif(id);

  return gif;
}

export async function fetchGifRelated(id, options) {
  const { data: gifs } = await gf.related(id, options);
  return gifs;
}
