import React from 'react';
import { Header as SemanticHeader, Grid } from 'semantic-ui-react';
import { HeaderWithFloatWrapper } from './headerWithFloat.style';

export default (props) => {
  const { titleText, headerSize } = props;

  return (
    <HeaderWithFloatWrapper>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column floated='left' textAlign="left">
            <SemanticHeader as={headerSize}>{titleText}</SemanticHeader>
          </Grid.Column>
          <Grid.Column floated='right' textAlign="right">
            {props.children}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </HeaderWithFloatWrapper>
  );

};