import React from 'react';
import { Li, Div } from './styles';

ListItem.propTypes = {
  item: React.PropTypes.any.isRequired,
};

function ListItem({ item }) {
  return (
    <Li>
      <Div>
        {item}
      </Div>
    </Li>
  );
}

export default ListItem;
