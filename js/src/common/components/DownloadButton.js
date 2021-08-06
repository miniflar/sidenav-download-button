import Widget from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';

export default class DownloadButton extends Widget {
  className() {
    return 'AfruxWidgets-Widget--flat';
  }

  content() {
    const downloadButtonLink = app.forum.attribute('miniflar-sidenav-download-button.link');

    if (downloadButtonLink) {
      return (
        <div className="MiniFLAR-DownloadButtonWidget">
          <a class="Button Button--secondary IndexPage-downloadButton" href={downloadButtonLink}>
            <span class="Button-label">
              <i class="fas fa-download Button-icon"></i>
              {app.translator.trans('miniflar-sidenav-download-button.forum.index.download_button')}
            </span>
          </a>
        </div>
      );
    }
  }
}
