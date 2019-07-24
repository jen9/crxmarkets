import React from 'react';
import { mount, configure } from 'enzyme';
import SearchInput from '../SearchInput';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it("should render SearchInput", () => {
    const callback = jest.fn();
    const searchInput = mount(<SearchInput requestSearch={callback} />);
    expect(searchInput.find('input').length).toBe(1);
    expect(callback).toHaveBeenCalledTimes(1);
});
