/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
export var VulnerabilityType;
(function (VulnerabilityType) {
    VulnerabilityType["ScanDeps"] = "scan_deps";
    VulnerabilityType["PathTraversal"] = "path_traversal";
    VulnerabilityType["Other"] = "other";
})(VulnerabilityType || (VulnerabilityType = {}));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const KNOWLEDGE_BASE_DIR = path.join(__dirname, 'knowledge');
/**
 * Loads the knowledge base article for a specific vulnerability.
 */
export async function loadKnowledge(vulnerability) {
    const safeVulnerability = vulnerability.replace(/[^a-z0-9_]/gi, '');
    const filePath = path.join(KNOWLEDGE_BASE_DIR, `${safeVulnerability}.md`);
    try {
        const content = await fs.readFile(filePath, 'utf-8');
        return content;
    }
    catch (error) {
        if (error.code === 'ENOENT') {
            return `No specific knowledge base article found for vulnerability: ${vulnerability}. please rely on your general security knowledge.`;
        }
        throw error;
    }
}
