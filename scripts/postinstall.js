#! /usr/bin/env node
import { writeFileSync } from 'fs';
import { resolve } from 'path';

writeFileSync(resolve(process.cwd(), 'session.json'), '{}');
