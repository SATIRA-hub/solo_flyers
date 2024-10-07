import {createClient} from '@sanity/client';

export const client = createClient({
  projectId: '078j9hfv',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-10-07',
});
