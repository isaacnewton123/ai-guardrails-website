import { type OramaDocument, sync } from 'fumadocs-core/search/orama-cloud';
import * as fs from 'node:fs/promises';
import { OramaCloud } from '@orama/core';

// the path of pre-rendered `static.json`
const filePath = '.next/server/app/static.json.body';

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

async function main() {
  const orama = new OramaCloud({
    projectId: requireEnv('NEXT_PUBLIC_ORAMA_PROJECT_ID'),
    apiKey: requireEnv('ORAMA_PRIVATE_API_KEY'),
  });

  const content = await fs.readFile(filePath);
  const records = JSON.parse(content.toString()) as OramaDocument[];

  await sync(orama, {
    index: requireEnv('NEXT_PUBLIC_ORAMA_DATASOURCE_ID'),
    documents: records,
  });

  console.log(`search updated: ${records.length} records`);
}

void main();
