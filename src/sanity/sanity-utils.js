import { client } from "./client";

export async function getFlyers() {
  return client.fetch(`*[_type == "mes"] | order(fecha desc){ 
    ...,
    flyers[]{
      "dimensions": asset->metadata.dimensions,
      _key,
      asset->{
        _id,
        url
      }
    }
  }`);
}
