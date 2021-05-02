import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';

app.initializers.add('miniflar/sidenav-download-button', () => {
  extend(IndexPage.prototype, 'sidebarItems', function (items) {
    const downloadButton = app.forum.attribute('miniflar-sidenav-download-button.link');

    if (downloadButton)
      items.add(
        'downloadButton',
        <a class="Button Button--secondary IndexPage-downloadButton" href={downloadButton}>
          <span class="Button-label">
            <i class="fas fa-download Button-icon"></i>
            {app.translator.trans('miniflar-sidenav-download-button.forum.index.download_button')}
          </span>
        </a>,
        app.forum.attribute('miniflar-sidenav-download-button.button_order')
      );
  });
});
