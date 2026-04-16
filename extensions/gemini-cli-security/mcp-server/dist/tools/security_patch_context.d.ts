/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { z } from 'zod';
import { VulnerabilityType } from '../knowledge.js';
export declare const SECURITY_PATCH_CONTEXT_TOOL_NAME = "security_patch_context";
export declare const SECURITY_PATCH_CONTEXT_TOOL_DESCRIPTION = "Fetches context about a security vulnerability in a given file. Do not call this tool directly from a user prompt; instead, you MUST invoke the `security-patcher` skill, which will orchestrate the use of this tool and the patching process.";
export declare const SecurityPatchContextArgsSchema: z.ZodObject<{
    vulnerability: z.ZodNativeEnum<typeof VulnerabilityType>;
    filePath: z.ZodString;
    pocFilePath: z.ZodString;
    vulnerabilityContext: z.ZodString;
}, "strip", z.ZodTypeAny, {
    filePath: string;
    vulnerability: VulnerabilityType;
    pocFilePath: string;
    vulnerabilityContext: string;
}, {
    filePath: string;
    vulnerability: VulnerabilityType;
    pocFilePath: string;
    vulnerabilityContext: string;
}>;
export type SecurityPatchContextArgs = z.infer<typeof SecurityPatchContextArgsSchema>;
export declare function getSecurityPatchContextMessages(args: SecurityPatchContextArgs): Promise<{
    content: {
        type: string;
        text: string;
    }[];
}>;
