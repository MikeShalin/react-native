import React, { Fragment } from 'react' //через expo нельзя хукать
import { Text } from 'react-native'
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react'
import {
  Content,
  List,
  ListItem,
} from 'native-base'
import { map, isEmpty } from 'lodash'
import FavoriteItemCard from '../../FavoriteItemCard/Components'
import NoPhotosAttention from '../../NoPhotosAttention/Components'
import { NO_PHOTOS_ATTENTION } from '../../../constants'

const FavoritePhotosScreen = ({ favoriteStore: { favorite } }) => (
  <Content>
    <List>
      {
        isEmpty(favorite)
          ? <NoPhotosAttention>{NO_PHOTOS_ATTENTION}</NoPhotosAttention>
          : map(favorite, (name, shortName) => (
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
