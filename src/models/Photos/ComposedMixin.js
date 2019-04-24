import { types } from 'mobx-state-tree'

import PhotosApiMixin from './PhotosApiMixin'
import PhotosHelperMixin from './PhotosHelperMixin'
import DataMixin from './DataMixin'

const ComposedMixin = types.compose(
  PhotosApiMixin,
  PhotosHelperMixin,
  DataMixin,
)

export default ComposedMixin