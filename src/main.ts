import '@blocksuite/presets/themes/affine.css';

import { AffineSchemas } from '@blocksuite/blocks';
import { EdgelessEditor } from '@blocksuite/presets';
import { DocCollection, Schema, Text } from '@blocksuite/store';

// 1. Create schema and doc collection
const schema = new Schema().register(AffineSchemas);
const collection = new DocCollection({ schema });
collection.meta.initialize();

// 2. Create a new doc
const doc = collection.createDoc();

// 3. Create the EdgelessEditor and attach to DOM first
const editor = new EdgelessEditor();
editor.doc = doc;
document.getElementById('app')!.appendChild(editor);

// 4. Load doc and initialize block structure
doc.load(() => {
  const pageId = doc.addBlock('affine:page', {});
  doc.addBlock('affine:surface', {}, pageId);
  const noteId = doc.addBlock('affine:note', {}, pageId);
  doc.addBlock('affine:paragraph', { text: new Text('') }, noteId);
});
