import {PanelPlugin} from '@grafana/ui';

import {TemplateEditor} from './TemplateEditor';
import {TemplatePanel} from './TemplatePanel';
import {TemplateOptions, defaults} from './types';

export const plugin = new PanelPlugin<TemplateOptions>(TemplatePanel)
  .setDefaults(defaults)
  .setEditor(TemplateEditor);
