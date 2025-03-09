import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from "./sanity/schemas"  
import { structureTool } from 'sanity/structure';


const config = defineConfig({
    projectId: 'itontg9m',
    dataset: 'production',
    title: 'Personal Website',
    apiVersion: '2025-03-09',
    basePath: '/admin',
    plugins: [deskTool(), structureTool()],
    schema: { types: schemas }
})

export default config;
