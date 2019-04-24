import { types } from 'mobx-state-tree'
import { omit, isEmpty, get } from 'lodash'

const FavoriteHelperMixin = types
  .model('FavoriteHelperMixin')
  .actions(self => ({
    addFavorite({ short, id, ...photo }) {
      const subName = get(self.favorite, [short, photo.name])

      /** Если в favorites есть это имя добавляем в объект наше фото **/
      if (subName) {
        self.favorite = {
          ...self.favorite,
          [short]: {
            [photo.name]: {
              [id]: photo,
              ...subName,
            },
          },
        }
      } else {
        /** Если в favorites нет такого имени - добавляем объект **/

        self.favorite = {
          ...self.favorite,
          [short]: {
            [photo.name]: { [id]: photo },
          },
        }
      }
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
