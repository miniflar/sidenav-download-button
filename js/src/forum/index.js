import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import Separator from 'flarum/components/Separator';
import registerWidget from '../common/registerWidget';

app.initializers.add('miniflar/sidenav-download-button', () => {
  registerWidget(app);

  extend(IndexPage.prototype, 'sidebarItems', function (items) {
    const downloadButtonLink = app.forum.attribute('miniflar-sidenav-download-button.link');
    const addSeparator = app.forum.attribute('miniflar-sidenav-download-button.add_separator');
    const widgetDisabled = app.forum.attribute('miniflar-sidenav-download-button.disable_widget');

    if (downloadButtonLink && !widgetDisabled) {
      if (addSeparator) {
        items.add('separator', Separator.component(), app.forum.attribute('miniflar-sidenav-download-button.separator_order'));
      }
      items.add(
        'downloadButton',
        <a class="Button Button--secondary IndexPage-downloadButton" href={downloadButtonLink}>
          <span class="Button-label">
            <i class="fas fa-download Button-icon"></i>
            {app.translator.trans('miniflar-sidenav-download-button.forum.index.download_button')}
          </span>
        </a>,
        app.forum.attribute('miniflar-sidenav-download-button.button_order')
      );
    }
  });
});
