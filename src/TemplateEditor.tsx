// Libraries
import React, {PureComponent, ChangeEvent} from 'react';

// Components
import {PanelEditorProps, PanelOptionsGroup, FormField} from '@grafana/ui';

// Types
import {TemplateOptions} from './types';

export class TemplateEditor extends PureComponent<PanelEditorProps<TemplateOptions>> {
  onHeaderChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.onOptionsChange({...this.props.options, header: event.target.value});
  };
  onFooterChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.onOptionsChange({...this.props.options, footer: event.target.value});
  };
  onResultChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.onOptionsChange({...this.props.options, result: event.target.value});
  };

  render() {
    const {options} = this.props;
    const labelWidth = 6;

    return (
      <PanelOptionsGroup title="Templates">
        <FormField
          label="Header"
          labelWidth={labelWidth}
          onChange={this.onHeaderChange}
          value={options.header}
          type="text"
        />

        <FormField
          label="Result"
          labelWidth={labelWidth}
          onChange={this.onResultChange}
          value={options.result}
          type="text"
        />

        <FormField
          label="Footer"
          labelWidth={labelWidth}
          onChange={this.onFooterChange}
          value={options.footer}
          type="text"
        />
      </PanelOptionsGroup>
    );
  }
}
