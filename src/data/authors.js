import data from "$data/authors.csv";

const makeSlug = (str) => str.toLowerCase().replace(/\//g, '_').replace(/ /g, '-');

const clean = data.map((d) => ({
  id: d.id,
  name: d.name,
  slug: makeSlug(d.name),
  position: d.position,
  social: d.social,
  url: d.url,
  bio: d.bio
}));

export default clean;