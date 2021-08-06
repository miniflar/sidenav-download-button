import Widgets from 'flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets';

import DownloadButton from './components/DownloadButton';

export default function (app) {
  new Widgets()
    .add({
      key: 'downloadButton',
      component: DownloadButton,

      // Can be a callback that returns a boolean value.
      // example: () => app.forum.attribute('myCustomExtension.mySetting')
      isDisabled: false,

      // Is this a one time use widget ? leave true if you don't know.
      isUnique: true,

      // The following values are default values that can be changed by the admin.
      placement: 'end',
      position: 1,
    })
    .extend(app, 'miniflar-sidenav-download-button');
}
