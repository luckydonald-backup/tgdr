import * as React from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import SearchInputIcon from './SearchInputIcon';

const InputWrapper = styled(Flex).attrs({
  alignItems: 'center',
  height: 40,
  width: 1,
})`
  position: relative;
  min-width: 0;
`;

const Input = styled.input.attrs({
  type: 'text',
})`
  height: 40px;
  max-width: 100%;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  margin: 0;
  padding: 0 40px 0 16px;
  font-size: 14px;
  color: #666;
  background-color: #f2f2f2;
  border: none;
  border-radius: 8px;
  outline: none;
  box-sizing: border-box;

  :focus,
  :active {
    outline: none;
    border: none;
    background-color: #f0f0f0;
  }

  ::placeholder {
    font-style: italic;
    color: #888;
  }
`;

interface IProps {
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): Promise<void> | void;
}

const SearchInput: React.SFC<IProps> = ({ value, onChange }) => (
  <InputWrapper height={40} width={1} alignItems="center">
    <Input placeholder="Search..." value={value} onChange={onChange} />
    <SearchInputIcon />
  </InputWrapper>
);

export default SearchInput;
