/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
export declare enum VulnerabilityType {
    ScanDeps = "scan_deps",
    PathTraversal = "path_traversal",
    Other = "other"
}
/**
 * Loads the knowledge base article for a specific vulnerability.
 */
export declare function loadKnowledge(vulnerability: string): Promise<string>;
