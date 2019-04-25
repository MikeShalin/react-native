import React, { Fragment } from 'react' //через expo нельзя хукать
import { View, Button, Text } from 'react-native'
import { compose, lifecycle } from 'recompose'
import { inject, observer } from 'mobx-react'
import {
  Content,
  List,
  ListItem,
} from 'native-base'
import { map } from 'lodash'
import FavoriteItemCard from '../../FavoriteItemCard/Components'

//todo упорядочить по алфовиту
const FavoritePhotosScreen = ({ favoriteStore: { favorite }, ...props }) => (
  <Content>
    <List>
      {
        map(favorite, (name, shortName) => (
          <Fragment key={shortName}>
            <Content>
              <ListItem itemDivider>
                <Text>{shortName}</Text>
              </ListItem>
              {
                map(name, (cards, title) => (
                    <Content key={title}>
                      <ListItem last>
                        <Text>{title}</Text>
                      </ListItem>
                      {
                        map(cards, (card, id) => (
                          <FavoriteItemCard key={id} id={id} {...card}/>
                        ))
                      }
                    </Content>
                  ),
                )
              }
            </Content>
          </Fragment>
        ))
      }
    </List>
  </Content>
)

const FavoritePhotosScreenComposed = compose(
  inject('favoriteStore'),
  observer,
)(FavoritePhotosScreen)

export default FavoritePhotosScreenComposed
