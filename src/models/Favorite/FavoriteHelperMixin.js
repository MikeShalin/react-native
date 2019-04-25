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

      self.addLastPhoto({ short, id, name: photo.name })
    },
    removeFavorite({ short, name, id }) {
      self.favorite = omit(self.favorite, `${short}.${name}.${id}`)
      if (isEmpty(get(self.favorite, `${short}.${name}`))) {
        self.favorite = omit(self.favorite, `${short}.${name}`)
      }
      if (isEmpty(get(self.favorite, short))) {
        self.favorite = omit(self.favorite, short)
      }
    },
    addLastPhoto(photo) {
      self.lastPhoto = photo
    },
    handleUndo() {
      const lastPhoto = self.lastPhoto
      self.addLastPhoto(null)
      self.removeFavorite(lastPhoto)
    },
  }))

export default FavoriteHelperMixin
