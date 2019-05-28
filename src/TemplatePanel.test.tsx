import React from 'react';
import {shallow} from 'enzyme';
import {TemplatePanel, Props} from './TemplatePanel';

const setup = (propOverrides?: object) => {
  const props: Props = {
    height: 300,
    width: 300,
    options: {
      min: 100,
      max: 300,
      speed: 100,
    },
  } as Props; // partial

  Object.assign(props, propOverrides);

  const wrapper = shallow(<TemplatePanel {...props} />);
  const instance = wrapper.instance() as TemplatePanel;

  return {
    instance,
    wrapper,
  };
};

describe('Render Panel with basic options', () => {
  it('should render', () => {
    const {wrapper} = setup();
    expect(wrapper).toBeDefined();
    //expect(wrapper).toMatchSnapshot();
  });
});
