export enum IconsEnum {
  DELETE = 'delete',
  EDIT = 'edit_square',
  MENU = 'menu',
  SEARCH = 'search',
  FILTER = 'filter_alt',
  COPY = 'move_group',
  ARROW_BACK = 'arrow_back_ios',
  ARROW_FORWARD = 'arrow_forward_ios',
  ADD = 'add',
  SCISSOR = 'content_cut',
  LOGOUT = 'logout',
}

export type IconsType = `${(typeof IconsEnum)[keyof typeof IconsEnum]}`
