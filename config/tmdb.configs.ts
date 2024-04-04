type MediaType = {
  movie: string;
  tv: string;
};

type MediaCategory = {
  popular: string;
  top_rated: string;
};

const mediaType: MediaType = {
  movie: "movie",
  tv: "tv",
};

const mediaCategory: MediaCategory = {
  popular: "popular",
  top_rated: "top_rated",
};

const backdropPath = (imgEndpoint?: string): string => imgEndpoint ? `https://image.tmdb.org/t/p/original${imgEndpoint}` : '';

const posterPath = (imgEndpoint?: string): string => imgEndpoint ? `https://image.tmdb.org/t/p/w500${imgEndpoint}` : '';

const youtubePath = (videoId?: string | number): string => videoId ? `https://www.youtube.com/embed/${videoId}?controls=0` : '';

const tmdbConfigs = {
  mediaType,
  mediaCategory,
  backdropPath,
  posterPath,
  youtubePath,
};

export default tmdbConfigs;
