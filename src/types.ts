export interface TemplateOptions {
  header: string;
  result: string;
  footer: string;
  limit: number;
}

export const defaults: TemplateOptions = {
  header: '',
  result: '<div>ROW!</div>',
  footer: '',
  limit: 100,
};
