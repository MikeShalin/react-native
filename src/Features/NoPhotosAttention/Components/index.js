import React from 'react' //через expo нельзя хукать
import { Text } from 'react-native'
import {
  Content,
  Card,
  CardItem,
  Body,
} from 'native-base'

const NoPhotosAttention = ({ children }) => (
  <Content padder>
    <Card transparent>
      <CardItem>
        <Body>
          <Text>
            {children}
          </Text>
        </Body>
      </CardItem>
    </Card>
  </Content>
)

export default NoPhotosAttention
