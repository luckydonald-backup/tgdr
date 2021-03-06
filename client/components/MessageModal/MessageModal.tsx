import * as React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Flex } from '@rebass/grid';
import { prop } from 'styled-tools';
import Icon from '../elements/Icon';
import Button from '../elements/Button';
import Divider from '../elements/Divider';

const IconBox = styled(Flex).attrs({
  alignItems: 'center',
  alignSelf: 'center',
  justifyContent: 'center',
})`
  width: 80px;
  height: 80px;
  border: 4px solid ${prop('color')};
  border-radius: 100%;

  ${media.lessThan('470px')`
    width: 60px;
    height: 60px;
    border-width: 3px;
  `};
`;

const Title = styled.h2`
  margin: 0 0 4px;
  padding: 0;
  font-size: 26px;
  font-weight: 500;

  ${media.lessThan('470px')`
    margin-bottom: 3px;
    font-size: 20px;
  `};
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 19px;

  ${media.lessThan('470px')`
    margin-bottom: 3px;
    font-size: 16px;
  `};
`;

interface IMessageModal {
  closeModal?: () => void;
  text: string;
  title: string;
  type?: 'error' | 'pending' | 'success';
}

const MessageModal: React.SFC<IMessageModal> = ({
  closeModal,
  text,
  title,
  type,
}) => {
  let iconName;
  let color;

  switch (type) {
    case 'success':
      iconName = 'check';
      color = '#81C784';
      break;

    case 'pending':
      iconName = 'timerSand';
      color = '#FFD54F';
      break;

    case 'error':
      iconName = 'close';
      color = '#E57373';
      break;

    default:
      break;
  }

  return (
    <>
      <Flex alignItems="center">
        <Flex flex="0 0 0" width={[100]} mx={[3, 4]}>
          <IconBox color={color}>
            <Icon name={iconName} fill={color} size={54} />
          </IconBox>
        </Flex>
        <Flex flexDirection="column">
          <Title>{title}</Title>
          <Text>{text}</Text>
        </Flex>
      </Flex>
      <Divider my={[3, 4]} />
      <Button onClick={closeModal} modalSecondary>
        Ok
      </Button>
    </>
  );
};

MessageModal.defaultProps = {
  closeModal: () => undefined,
  type: 'error',
};

export default MessageModal;
