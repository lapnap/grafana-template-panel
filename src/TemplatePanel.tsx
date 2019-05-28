// Libraries
import React, {PureComponent} from 'react';

// Types
import {TemplateOptions} from './types';
import {PanelProps} from '@grafana/ui';

export interface Props extends PanelProps<TemplateOptions> {}

export class TemplatePanel extends PureComponent<Props> {
  frameId: number = 0;

  constructor(props: Props) {
    super(props);
  }

  renderTemplate(txt: string, series: any) {
    if (!txt) {
      return;
    }
    return txt; //ReactHtmlParser(txt);
  }

  render() {
    const {options, data} = this.props;

    if (!data || !data.series) {
      return null;
    }

    return (
      <div style={{overflow: 'scroll'}}>
        {data.series.map((series, index) => {
          return (
            <div key={index}>
              {this.renderTemplate(options.header, data)}
              {options.result &&
                series.rows.map((row, idx) => {
                  return <div key={idx}>{this.renderTemplate(options.result, data)}</div>;
                })}
              {this.renderTemplate(options.footer, data)}
            </div>
          );
        })}
      </div>
    );
  }
}
