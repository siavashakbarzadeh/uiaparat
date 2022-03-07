/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const ERROR_HAPPEN = 'app/App/ERROR_HAPPEN';
export const ERROR_CLEAR = 'app/App/ERROR_CLEAR';
export const DRAWER_OPEN = 'app/App/DRAWER_OPEN';

export const NOTIFICATION_SHOW = 'app/App/NOTIFICATION_SHOW';
export const NOTIFICATION_HIDE = 'app/App/NOTIFICATION_HIDE';

export const FILE_UPLOAD = 'app/App/FILE_UPLOAD';
export const FILE_UPLOAD_PROGRESS = 'app/App/FILE_UPLOAD_PROGRESS';
export const FILE_UPLOAD_SUCCESS = 'app/App/FILE_UPLOAD_SUCCESS';
export const FILE_UPLOAD_FAIL = 'app/App/FILE_UPLOAD_FAIL';

export const BANNER_UPLOAD = 'app/App/BANNER_UPLOAD';
export const BANNER_UPLOAD_SUCCESS = 'app/App/BANNER_UPLOAD_SUCCESS';
export const BANNER_UPLOAD_FAIL = 'app/App/BANNER_UPLOAD_FAIL';

export const CREATE_VIDEO = 'app/App/CREATE_VIDEO';
export const CREATE_VIDEO_SUCCESS = 'app/App/CREATE_VIDEO_SUCCESS';
export const CREATE_VIDEO_FAIL = 'app/App/CREATE_VIDEO_FAIL';
export const CREATE_VIDEO_CLEAR = 'app/App/CREATE_VIDEO_CLEAR';

export const UPDATE_VIDEO = 'app/App/UPDATE_VIDEO';
export const UPDATE_VIDEO_SUCCESS = 'app/App/UPDATE_VIDEO_SUCCESS';
export const UPDATE_VIDEO_FAIL = 'app/App/UPDATE_VIDEO_FAIL';
export const UPDATE_VIDEO_CLEAR = 'app/App/UPDATE_VIDEO_CLEAR';

export const LIST_MY_VIDEOS = 'app/App/LIST_MY_VIDEOS';
export const LIST_MY_VIDEOS_SUCCESS = 'app/App/LIST_MY_VIDEOS_SUCCESS';
export const LIST_MY_VIDEOS_FAIL = 'app/App/LIST_MY_VIDEOS_FAIL';

export const DELETE_VIDEO = 'app/App/DELETE_VIDEO';
export const DELETE_VIDEO_SUCCESS = 'app/App/DELETE_VIDEO_SUCCESS';
export const DELETE_VIDEO_FAIL = 'app/App/DELETE_VIDEO_FAIL';
export const DELETE_VIDEO_CLEAR_ERROR_ACTION =
  'app/App/DELETE_VIDEO_CLEAR_ERROR_ACTION';

export const GET_VIDEO = 'app/App/GET_VIDEO';
export const GET_VIDEO_SUCCESS = 'app/App/GET_VIDEO_SUCCESS';
export const GET_VIDEO_FAIL = 'app/App/GET_VIDEO_FAIL';
export const GET_VIDEO_CLEAR = 'app/App/GET_VIDEO_CLEAR';

export const GET_VIDEOS = 'app/App/GET_VIDEOS';
export const GET_VIDEOS_SUCCESS = 'app/App/GET_VIDEOS_SUCCESS';
export const GET_VIDEOS_FAIL = 'app/App/GET_VIDEOS_FAIL';

export const LIKE_OR_DISLIKE_VIDEO = 'app/App/LIKE_OR_DISLIKE_VIDEO';
export const LIKE_OR_DISLIKE_VIDEO_SUCCESS =
  'app/App/LIKE_OR_DISLIKE_VIDEO_SUCCESS';
export const LIKE_OR_DISLIKE_VIDEO_FAIL = 'app/App/LIKE_OR_DISLIKE_VIDEO_FAIL';
export const LIKE_OR_DISLIKE_VIDEO_CLEAR =
  'app/App/LIKE_OR_DISLIKE_VIDEO_CLEAR';

export const REPUBLISH_VIDEO = 'app/App/REPUBLISH_VIDEO';
export const REPUBLISH_VIDEO_SUCCESS = 'app/App/REPUBLISH_VIDEO_SUCCESS';
export const REPUBLISH_VIDEO_FAIL = 'app/App/REPUBLISH_VIDEO_FAIL';
export const REPUBLISH_VIDEO_CLEAR = 'app/App/REPUBLISH_VIDEO_CLEAR';

export const GET_VIDEO_STATISTICS = 'app/App/GET_VIDEO_STATISTICS';
export const GET_VIDEO_STATISTICS_SUCCESS =
  'app/App/GET_VIDEO_STATISTICS_SUCCESS';
export const GET_VIDEO_STATISTICS_FAIL = 'app/App/GET_VIDEO_STATISTICS_FAIL';

export const CHANGE_VIDEO_STATE = 'app/App/CHANGE_VIDEO_STATE';
export const CHANGE_VIDEO_STATE_SUCCESS = 'app/App/CHANGE_VIDEO_STATE_SUCCESS';
export const CHANGE_VIDEO_STATE_FAIL = 'app/App/CHANGE_VIDEO_STATE_FAIL';
export const CHANGE_VIDEO_STATE_CLEAR = 'app/App/CHANGE_VIDEO_STATE_CLEAR';

export const GET_TAGS = 'app/App/GET_TAGS';
export const GET_TAGS_SUCCESS = 'app/App/GET_TAGS_SUCCESS';
export const GET_TAGS_FAIL = 'app/App/GET_TAGS_FAIL';

export const ADD_TAG = 'app/App/ADD_TAG';
export const ADD_TAG_SUCCESS = 'app/App/ADD_TAG_SUCCESS';
export const ADD_TAG_FAIL = 'app/App/ADD_TAG_FAIL';

export const GET_CATEGORIES = 'app/App/GET_CATEGORIES';
export const GET_CATEGORIES_SUCCESS = 'app/App/GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAIL = 'app/App/GET_CATEGORIES_FAIL';

export const GET_MY_CATEGORIES = 'app/App/GET_MY_CATEGORIES';
export const GET_MY_CATEGORIES_SUCCESS = 'app/App/GET_MY_CATEGORIES_SUCCESS';
export const GET_MY_CATEGORIES_FAIL = 'app/App/GET_MY_CATEGORIES_FAIL';

export const ADD_CATEGORY = 'app/App/ADD_CATEGORY';
export const ADD_CATEGORY_SUCCESS = 'app/App/ADD_CATEGORY_SUCCESS';
export const ADD_CATEGORY_FAIL = 'app/App/ADD_CATEGORY_FAIL';

export const EDIT_CATEGORY = 'app/App/EDIT_CATEGORY';
export const EDIT_CATEGORY_SUCCESS = 'app/App/EDIT_CATEGORY_SUCCESS';
export const EDIT_CATEGORY_FAIL = 'app/App/EDIT_CATEGORY_FAIL';

export const GET_PLAYLISTS = 'app/App/GET_PLAYLISTS';
export const GET_PLAYLISTS_SUCCESS = 'app/App/GET_PLAYLISTS_SUCCESS';
export const GET_PLAYLISTS_FAIL = 'app/App/GET_PLAYLISTS_FAIL';

export const GET_PLAYLIST = 'app/App/GET_PLAYLIST';
export const GET_PLAYLIST_SUCCESS = 'app/App/GET_PLAYLIST_SUCCESS';
export const GET_PLAYLIST_FAIL = 'app/App/GET_PLAYLIST_FAIL';

export const ADD_PLAYLIST = 'app/App/ADD_PLAYLIST';
export const ADD_PLAYLIST_SUCCESS = 'app/App/ADD_PLAYLIST_SUCCESS';
export const ADD_PLAYLIST_FAIL = 'app/App/ADD_PLAYLIST_FAIL';

export const GET_FOLLOWING_LIST = 'app/App/GET_FOLLOWING_LIST';
export const GET_FOLLOWING_LIST_SUCCESS = 'app/App/GET_FOLLOWING_LIST_SUCCESS';
export const GET_FOLLOWING_LIST_FAIL = 'app/App/GET_FOLLOWING_LIST_FAIL';

export const UNFOLLOW_CHANNEL = 'app/App/UNFOLLOW_CHANNEL';
export const UNFOLLOW_CHANNEL_SUCCESS = 'app/App/UNFOLLOW_CHANNEL_SUCCESS';
export const UNFOLLOW_CHANNEL_FAIL = 'app/App/UNFOLLOW_CHANNEL_FAIL';

export const FOLLOW_CHANNEL = 'app/App/FOLLOW_CHANNEL';
export const FOLLOW_CHANNEL_SUCCESS = 'app/App/FOLLOW_CHANNEL_SUCCESS';
export const FOLLOW_CHANNEL_FAIL = 'app/App/FOLLOW_CHANNEL_FAIL';

export const GET_COMMENT_LIST = 'app/App/GET_COMMENT_LIST';
export const GET_COMMENT_LIST_SUCCESS = 'app/App/GET_COMMENT_LIST_SUCCESS';
export const GET_COMMENT_LIST_FAIL = 'app/App/GET_COMMENT_LIST_FAIL';

export const POST_COMMENT = 'app/App/POST_COMMENT';
export const POST_COMMENT_SUCCESS = 'app/App/POST_COMMENT_SUCCESS';
export const POST_COMMENT_FAIL = 'app/App/POST_COMMENT_FAIL';

export const REMOVE_COMMENT = 'app/App/REMOVE_COMMENT';
export const REMOVE_COMMENT_SUCCESS = 'app/App/REMOVE_COMMENT_SUCCESS';
export const REMOVE_COMMENT_FAIL = 'app/App/REMOVE_COMMENT_FAIL';

export const ACCEPT_COMMENT = 'app/App/ACCEPT_COMMENT';
export const ACCEPT_COMMENT_SUCCESS = 'app/App/ACCEPT_COMMENT_SUCCESS';
export const ACCEPT_COMMENT_FAIL = 'app/App/ACCEPT_COMMENT_FAIL';

export const GET_CHANNEL_STATISTICS = 'app/App/GET_CHANNEL_STATISTICS';
export const GET_CHANNEL_STATISTICS_SUCCESS =
  'app/App/GET_CHANNEL_STATISTICS_SUCCESS';
export const GET_CHANNEL_STATISTICS_FAIL =
  'app/App/GET_CHANNEL_STATISTICS_FAIL';
export const GET_CHANNEL_STATISTICS_CLEAR =
  'app/App/GET_CHANNEL_STATISTICS_CLEAR';

export const GET_CHANNEL_INFO = 'app/App/GET_CHANNEL_INFO';
export const GET_CHANNEL_INFO_SUCCESS = 'app/App/GET_CHANNEL_INFO_SUCCESS';
export const GET_CHANNEL_INFO_FAIL = 'app/App/GET_CHANNEL_INFO_FAIL';
export const GET_CHANNEL_INFO_CLEAR = 'app/App/GET_CHANNEL_INFO_CLEAR';

export const UPDATE_CHANNEL_INFO = 'app/App/UPDATE_CHANNEL_INFO';
export const UPDATE_CHANNEL_INFO_SUCCESS =
  'app/App/UPDATE_CHANNEL_INFO_SUCCESS';
export const UPDATE_CHANNEL_INFO_FAIL = 'app/App/UPDATE_CHANNEL_INFO_FAIL';

export const UPDATE_CHANNEL_SOCIALS = 'app/App/UPDATE_CHANNEL_SOCIALS';
export const UPDATE_CHANNEL_SOCIALS_SUCCESS =
  'app/App/UPDATE_CHANNEL_SOCIALS_SUCCESS';
export const UPDATE_CHANNEL_SOCIALS_FAIL =
  'app/App/UPDATE_CHANNEL_SOCIALS_FAIL';

export const UPDATE_CHANNEL_USERINFO = 'app/App/UPDATE_CHANNEL_USERINFO';
export const UPDATE_CHANNEL_USERINFO_SUCCESS =
  'app/App/UPDATE_CHANNEL_USERINFO_SUCCESS';
export const UPDATE_CHANNEL_USERINFO_FAIL =
  'app/App/UPDATE_CHANNEL_USERINFO_FAIL';
export const UPDATE_CHANNEL_USERINFO_CLEAR =
  'app/App/UPDATE_CHANNEL_USERINFO_CLEAR';

export const UPDATE_CHANNEL_USERINFO_CONFIRM =
  'app/App/UPDATE_CHANNEL_USERINFO_CONFIRM';
export const UPDATE_CHANNEL_USERINFO_CONFIRM_SUCCESS =
  'app/App/UPDATE_CHANNEL_USERINFO_CONFIRM_SUCCESS';
export const UPDATE_CHANNEL_USERINFO_CONFIRM_FAIL =
  'app/App/UPDATE_CHANNEL_USERINFO_FAIL';

export const CHANNEL_BANNER_UPLOAD = 'app/App/CHANNEL_BANNER_UPLOAD';
export const CHANNEL_BANNER_UPLOAD_SUCCESS =
  'app/App/CHANNEL_BANNER_UPLOAD_SUCCESS';
export const CHANNEL_BANNER_UPLOAD_FAIL = 'app/App/CHANNEL_BANNER_UPLOAD_FAIL';

export const GET_USER_ME = 'app/App/GET_USER_ME';
export const GET_USER_ME_SUCCESS = 'app/App/GET_USER_ME_SUCCESS';
export const GET_USER_ME_FAIL = 'app/App/GET_USER_ME_FAIL';

export const UNREGISTER_USER = 'app/App/UNREGISTER_USER';
export const UNREGISTER_USER_SUCCESS = 'app/App/UNREGISTER_USER_SUCCESS';
export const UNREGISTER_USER_FAIL = 'app/App/UNREGISTER_USER_FAIL';

export const GET_USERS = 'app/App/GET_USERS';
export const GET_USERS_SUCCESS = 'app/App/GET_USERS_SUCCESS';
export const GET_USERS_FAIL = 'app/App/GET_USERS_FAIL';

export const UPDATE_USER = 'app/App/UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'app/App/UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAIL = 'app/App/UPDATE_USER_FAIL';

export const RESET_USER_PASSWORD = 'app/App/RESET_USER_PASSWORD';
export const RESET_USER_PASSWORD_SUCCESS =
  'app/App/RESET_USER_PASSWORD_SUCCESS';
export const RESET_USER_PASSWORD_FAIL = 'app/App/RESET_USER_PASSWORD_FAIL';

export const DELETE_USER = 'app/App/DELETE_USER';
export const DELETE_USER_SUCCESS = 'app/App/DELETE_USER_SUCCESS';
export const DELETE_USER_FAIL = 'app/App/DELETE_USER_FAIL';

export const LOGOUT_ACTION = 'app/App/LOGOUT_ACTION';
export const LOGOUT_ACTION_SUCCESS = 'app/App/LOGOUT_ACTION_SUCCESS';
export const LOGOUT_ACTION_FAIL = 'app/App/LOGOUT_ACTION_FAIL';

export const GET_CATEGORIZED_VIDEOS = 'app/App/GET_CATEGORIZED_VIDEOS';
export const GET_CATEGORIZED_VIDEOS_SUCCESS =
  'app/App/GET_CATEGORIZED_VIDEOS_SUCCESS';
export const GET_CATEGORIZED_VIDEOS_FAIL =
  'app/App/GET_CATEGORIZED_VIDEOS_FAIL';
