import ComposedMixin from '../ComposedMixin'

export const item = ComposedMixin.create({
  profile: null,
  isFetching: false,
  team1: [],
  team2: [],
  teamsIsFetching: false,
  error: null,
})
export const team1 = [{
  id: 1,
  name: 'team1',
}]
export const team2 = [{
  id: 2,
  name: 'team2',
}]
export const profile = {
  status: 8,
  tournament_name_en: 'United States. NBA',
  tournament_name_ru: 'НБА',
  team1_id: 2,
  team1_name_en: 'Golden State Warriors',
  team1_name_ru: 'Голден Стэйт Уорриорз',
  team1_short_name_en: 'Warriors',
  team1_short_name_ru: 'Уорриорз',
  team2_id: 2976,
}
