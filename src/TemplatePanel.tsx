// Libraries
import React, {PureComponent} from 'react';

//import Handlebars from 'handlebars';
import Mustache from 'mustache';
// import sanitizeHtml from 'sanitize-html';

// Types
import {TemplateOptions} from './types';
import {PanelProps} from '@grafana/ui';

export interface Props extends PanelProps<TemplateOptions> {}
interface State {
  // header?: Handlebars.TemplateDelegate<any>,
  // result?: Handlebars.TemplateDelegate<any>,
  // footer?: Handlebars.TemplateDelegate<any>,
}

export class TemplatePanel extends PureComponent<Props, State> {
  frameId: number = 0;

  constructor(props: Props) {
    super(props);

    // const {options} = props;
    this.state = {
      // header: (options.header) ? Handlebars.compile(options.header) : undefined,
      // result: (options.result) ? Handlebars.compile(options.result) : undefined,
      // footer: (options.footer) ? Handlebars.compile(options.footer) : undefined,
    };
  }

  componentDidUpdate(oldProps: Props) {
    const {options} = this.props;
    if (options != oldProps.options) {
      this.setState({
        // header: (options.header) ? Handlebars.compile(options.header) : undefined,
        // result: (options.result) ? Handlebars.compile(options.result) : undefined,
        // footer: (options.footer) ? Handlebars.compile(options.footer) : undefined,
      });
    }
  }

  renderTemplate(template: string, value: any, key: string) {
    if (!template) {
      return;
    }
    const txt = Mustache.render(template, value);
    const html = txt; // sanitizeHtml(txt);
    return <div key={key} dangerouslySetInnerHTML={{__html: html}} />;
  }

  render() {
    const {data, options} = this.props;

    if (!data || !data.series) {
      return null;
    }

    const {header, footer, result} = options;

    return (
      <div style={{overflow: 'scroll'}}>
        {data.series.map((series, index) => {
          return (
            <div key={index}>
              {this.renderTemplate(header, series, 'head')}
              {result &&
                series.rows.map((row, index) => {
                  return this.renderTemplate(result, row, `row-${index}`);
                })}
              {this.renderTemplate(footer, series, 'foot')}
            </div>
          );
        })}
      </div>
    );
  }
}
