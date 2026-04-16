/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { promises as fs } from 'fs';
import path from 'path';
import { exec, execFile } from 'child_process';
declare const execAsync: typeof exec.__promisify__;
declare const execFileAsync: typeof execFile.__promisify__;
export interface RunPocResult {
    stdout: string;
    stderr: string;
    error?: string;
    isSecurityError?: boolean;
}
export declare function runPoc({ filePath, }: {
    filePath: string;
}, dependencies?: {
    fs: typeof fs;
    path: typeof path;
    execAsync: typeof execAsync;
    execFileAsync: typeof execFileAsync;
}): Promise<RunPocResult>;
export {};
