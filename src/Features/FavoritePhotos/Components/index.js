import React, { Fragment } from 'react' //через expo нельзя хукать
import { View, Button, Text } from 'react-native'
import { compose, lifecycle } from 'recompose'
import { inject, observer } from 'mobx-react'
import {
  Container,
  Header,
  Content,
  Accordion,
  List,
  ListItem,
} from 'native-base'
import { map } from 'lodash'
import FavoriteItemCard from '../../FavoriteItemCard/Components'

//favoriteStore
//) {
//     return (
const dataArray = [
  { title: 'First Element', content: 'Lorem ipsum dolor sit amet' },
  { title: 'Second Element', content: 'Lorem ipsum dolor sit amet' },
  { title: 'Third Element', content: 'Lorem ipsum dolor sit amet' },
]
const FavoritePhotosScreen = (props) => (
  <Content>
    <Text>Favorite Photos Screen</Text>
    <Content>
      <List>
        {
          map(props.favoriteStore.favorite, (name, shortName) => (
            <Fragment key={shortName}>
              {
                console.log('store',shortName )
              }
              <Content>
                <ListItem itemDivider>
                  <Text>{shortName}</Text>
                </ListItem>
                {
                  map(name, (cards, title) => (
                      <Content key={title}>
                        {
                          console.log('cards',{ title, cards } )
                        }
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
    <Button
      title="Go to Details"
      onPress={() => props.navigation.navigate('Home')}
    />
  </Content>
)

const FavoritePhotosScreenComposed = compose(
  inject('favoriteStore'),
  lifecycle({
    componentDidMount() {
      // this.props.photosStore.fetchPhotos(10)
    },
  }),
  observer,
)(FavoritePhotosScreen)

export default FavoritePhotosScreenComposed
