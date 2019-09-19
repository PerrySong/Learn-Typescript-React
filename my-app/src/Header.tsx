import * as React from 'react';

interface IProps {
  name?: string; // its type can be either string | undefined
}

const Header: React.FC<IProps> = (props: IProps) => (
  <h1>Hello, {props.name}! Welcome to React and TypeScript.</h1>
);

Header.defaultProps = {
  name: 'world',
};

export default Header;