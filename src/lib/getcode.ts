import fs from "fs/promises";
import path from "path";

export interface ComponentMetadata {
  name: string;
  category: string;
  description: string;
  props: Array<{
    name: string;
    type: string;
    description: string;
    code?: boolean;
    faded?: boolean;
  }>;
}

/**
 * Reads the source code of a component file
 */
export async function readComponentCode(filePath: string): Promise<string> {
  try {
    const code = await fs.readFile(filePath, 'utf-8');
    return code;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return '';
  }
}

/**
 * Extracts component metadata from JSDoc comments
 */
export function extractComponentMetadata(code: string): ComponentMetadata {
  // Default values
  let name = 'Unknown';
  let category = 'General';
  let description = 'No description available';
  const props: ComponentMetadata['props'] = [];

  // Extract JSDoc comments
  const jsDocMatch = code.match(/\/\*\*([\s\S]*?)\*\//);
  if (jsDocMatch) {
    const jsDoc = jsDocMatch[1];
    
    // Extract @component name
    const nameMatch = jsDoc.match(/@component\s+(.+)/);
    if (nameMatch) name = nameMatch[1].trim();
    
    // Extract @category
    const categoryMatch = jsDoc.match(/@category\s+(.+)/);
    if (categoryMatch) category = categoryMatch[1].trim();
    
    // Extract @description
    const descMatch = jsDoc.match(/@description\s+(.+)/);
    if (descMatch) description = descMatch[1].trim();
    
    // Extract @prop definitions
    const propMatches = jsDoc.match(/@prop\s+(\w+)\s+(\w+)\s+(.+)/g);
    if (propMatches) {
      propMatches.forEach(propMatch => {
        const [, propName, propType, propDesc] = propMatch.match(/@prop\s+(\w+)\s+(\w+)\s+(.+)/) || [];
        if (propName && propType && propDesc) {
          props.push({
            name: propName,
            type: propType,
            description: propDesc.trim(),
            code: true
          });
        }
      });
    }
  }

  // If no JSDoc, try to extract from component name
  if (name === 'Unknown') {
    const exportMatch = code.match(/export\s+(?:const|function)\s+(\w+)/);
    if (exportMatch) name = exportMatch[1];
  }

  return { name, category, description, props };
}

/**
 * Scans a directory for component files and returns their metadata
 */
export async function scanComponentDirectory(dirPath: string): Promise<Record<string, any>> {
  const components: Record<string, any> = {};
  
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      
      if (entry.isDirectory()) {
        // Recursively scan subdirectories
        const subComponents = await scanComponentDirectory(fullPath);
        Object.assign(components, subComponents);
      } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) {
        // Skip index files and demo files
        if (entry.name === 'index.tsx' || entry.name.includes('demo')) {
          continue;
        }
        
        const code = await readComponentCode(fullPath);
        const metadata = extractComponentMetadata(code);
        
        // Create component key from file path
        const componentKey = path.relative(path.join(process.cwd(), 'src/components/ui'), fullPath)
          .replace(/\\/g, '/')
          .replace(/\.(tsx|ts)$/, '')
          .toLowerCase()
          .replace(/[^a-z0-9]/g, '-');
        
        components[componentKey] = {
          ...metadata,
          code,
          filePath: fullPath
        };
      }
    }
  } catch (error) {
    console.error(`Error scanning directory ${dirPath}:`, error);
  }
  
  return components;
}

/**
 * Builds the component registry dynamically
 */
export async function buildDynamicRegistry(): Promise<Record<string, any>> {
  const uiComponentsPath = path.join(process.cwd(), 'src/components/ui');
  return await scanComponentDirectory(uiComponentsPath);
}
