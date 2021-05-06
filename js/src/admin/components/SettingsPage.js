import ExtensionPage from 'flarum/components/ExtensionPage';

const translationPrefix = 'miniflar-sidenav-download-button.admin.';

export default class SettingsPage extends ExtensionPage {
  content() {
    return [
      <div className="sideNavButtonPage container">
        <fieldset className="sideNavButtonPage fieldset">
          <div className="sideNavButtonPage Form-group">
            {this.buildSettingComponent({
              type: 'number',
              setting: 'miniflar-sidenav-download-button.button_order',
              label: app.translator.trans(translationPrefix + 'settings.button_order_heading'),
              help: app.translator.trans(translationPrefix + 'settings.button_order_text'),
              placeholder: app.forum.attribute('miniflar-sidenav-download-button.button_order'),
            })}
            {this.buildSettingComponent({
              type: 'switch',
              setting: 'miniflar-sidenav-download-button.add_separator',
              label: app.translator.trans(translationPrefix + 'settings.labels.add_separator'),
            })}
            {this.buildSettingComponent({
              type: 'number',
              setting: 'miniflar-sidenav-download-button.separator_order',
              label: app.translator.trans(translationPrefix + 'settings.separator_order_heading'),
              help: app.translator.trans(translationPrefix + 'settings.separator_order_text'),
              placeholder: app.forum.attribute('miniflar-sidenav-download-button.separator_order'),
            })}
            {this.buildSettingComponent({
              type: 'url',
              setting: 'miniflar-sidenav-download-button.link',
              placeholder: 'https://example.com',
              label: app.translator.trans(translationPrefix + 'settings.button_link_heading'),
              help: app.translator.trans(translationPrefix + 'settings.button_link_text'),
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
