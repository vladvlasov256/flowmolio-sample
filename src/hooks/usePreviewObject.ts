import Graph from '../data/flowmolio.json';
import { ColorNodeData, ColorRole, ImageNodeData, PreviewObject, TextNodeData } from 'flowmolio';

export const usePreviewObject = (): PreviewObject => {
  return {
    svg: Graph.svg,
    connections: Graph.edges.map((edge) => ({
      sourceNodeId: edge.source,
      sourceField: edge.sourceHandle,
      targetNodeId: edge.target,
    })),
    nodes: Graph.nodes
    .filter(node => ['textLayout', 'imageLayout', 'colorNode'].includes(node.type || ''))
    .map(node => {
      switch (node.type) {
        case 'textLayout':
          return {
            id: node.id,
            type: 'text',
            elementId: node.data.textElementId
          } as TextNodeData;
        
        case 'imageLayout':
          return {
            id: node.id,
            type: 'image',
            elementId: (node.data as any).imageElementId
          } as ImageNodeData;
        
        case 'colorNode':
          const data = node.data as any
          return {
            id: node.id,
            type: 'color',
            color: (node.data as any).selectedColor || '',
            enabledRoles: {
              [ColorRole.FILL]: data.enabledRoles?.[ColorRole.FILL] ?? false,
              [ColorRole.STROKE]: data.enabledRoles?.[ColorRole.STROKE] ?? false,
              [ColorRole.STOP_COLOR]: data.enabledRoles?.[ColorRole.STOP_COLOR] ?? false
            }
          } as ColorNodeData;
          
        default:
          // This should never happen due to the filter above
          throw new Error(`Unknown node type: ${node.type}`);
      }
    })
  }
}