import { types } from 'mobx-state-tree'
import { omit, isEmpty, get } from 'lodash'

const FavoriteHelperMixin = types
  .model('FavoriteHelperMixin')
  .actions(self => ({
    addFavorite(photos) {
      self.photos = photos
    },
    removeFavorite({ short, name, id }) {
      self.favorite = omit(self.favorite, `${short}.${name}.${id}`)
      //todo какую нибудь рекрсию или цикл
      if (isEmpty(get(self, ['favorite', short, name]))) {
        self.favorite = omit(self.favorite, `${short}.${name}`)
      }
      if (isEmpty(get(self, ['favorite', short]))) {
        self.favorite = omit(self.favorite, `${short}`)
      }
    },
  }))

export default FavoriteHelperMixin
