import { types } from 'mobx-state-tree'

const CollectionHelperMixin = types
  .model('CollectionHelperMixin')
  .actions(self => ({
    addFavorite(photos) {
      self.photos = photos
    },
    removeFavorite(fetchState) {
      self.isFetching = fetchState
    },
  }))

export default CollectionHelperMixin
