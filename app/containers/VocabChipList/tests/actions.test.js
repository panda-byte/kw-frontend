import {
  defaultAction,
} from '../actions';
import {
  DEFAULT_ACTION,
} from '../constants';

describe('VocabChipList actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      expect(defaultAction()).toEqual({ type: DEFAULT_ACTION });
      expect(defaultAction()).toMatchSnapshot();
    });
  });
});
