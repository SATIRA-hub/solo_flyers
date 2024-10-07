import { client } from "./client";

export async function getPosts() {
  return client.fetch(`*[_type == "post"] | order(date desc) { ... }`);
}
