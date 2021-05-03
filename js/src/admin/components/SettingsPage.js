import ExtensionPage from 'flarum/components/ExtensionPage';

const translationPrefix = 'miniflar-sidenav-download-button.admin.';

export default class SettingsPage extends ExtensionPage {
  content() {
    return [
      <div className="sideNavButtonPage container">
        <fieldset className="sideNavButtonPage fieldset">
          <div className="sideNavButtonPage-input">
            <legend>{app.translator.trans(translationPrefix + 'settings.button_order_heading')}</legend>
            <div className="helpText">{app.translator.trans(translationPrefix + 'settings.button_order_text')}</div>
            {this.buildSettingComponent({
              type: 'number',
              setting: 'miniflar-sidenav-download-button.button_order',
            })}
            <legend>{app.translator.trans(translationPrefix + 'settings.button_link_heading')}</legend>
            <div className="helpText">{app.translator.trans(translationPrefix + 'settings.button_link_text')}</div>
            {this.buildSettingComponent({
              type: 'url',
              setting: 'miniflar-sidenav-download-button.link',
              placeholder: 'https://example.com',
            })}
          </div>
          {this.submitButton()}
        </fieldset>
      </div>,
    ];
  }

  saveSettings(e) {
    e.preventDefault();

    const url = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

    if (!url.test(this.settings['miniflar-sidenav-download-button.link']())) {
      alert(app.translator.trans(translationPrefix + 'settings.enter_link_message'));
      return;
    }

    super.saveSettings(e);
  }
}
