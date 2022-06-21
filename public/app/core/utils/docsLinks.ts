import { DocsId } from '@grafana/data';

// TODO: Documentation links
const DOCS_LINKS: Record<DocsId, string> = {
  [DocsId.Transformations]: 'https://mosaicoo.com/docs/mosaicoo/latest/panels/transformations',
  [DocsId.FieldConfig]: 'https://mosaicoo.com/docs/mosaicoo/latest/panels/field-configuration-options/',
  [DocsId.FieldConfigOverrides]:
    'https://mosaicoo.com/docs/mosaicoo/latest/panels/field-configuration-options/#override-a-field',
};

export const getDocsLink = (id: DocsId) => DOCS_LINKS[id];
