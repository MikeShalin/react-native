import { types } from 'mobx-state-tree'

const cameraType = types.model({
  id: types.number,
  name: types.string,
  rover_id: types.number,
  full_name: types.string,
})

const camerasType = types.frozen({
  name: types.string,
  full_name: types.string,
})

const roverType = types.model({
  id: types.number,
  name: types.string,
  landing_date: types.string,
  launch_date: types.string,
  status: types.string,
  max_sol: types.number,
  max_date: types.string,
  total_photos: types.number,
  cameras: types.array(camerasType),
})

const photoType = types.model({
  id: types.number,
  sol: types.number,
  camera: cameraType,
  img_src: types.string,
  earth_date: types.string,
  rover: roverType,
})

const DataMixin = types
  .model('DataMixin', {
    photos: types.array(photoType),
    isFetching: types.boolean,
    error: types.union(types.string, types.null),
  })

export default DataMixin
