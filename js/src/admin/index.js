import SettingsPage from './components/SettingsPage';

const translationPrefix = 'miniflar-sidenav-download-button.admin.';

app.initializers.add('miniflar/sidenav-download-button', () => {
  app.extensionData
    .for('miniflar-sidenav-download-button')
    .registerPage(SettingsPage)
    .registerPermission(
      {
        icon: 'fas fa-eye',
        label: app.translator.trans(translationPrefix + 'permissions.view_download_button_label'),
        permission: 'miniflar-sidenav-download-button.viewDownloadButton',
        allowGuest: true,
      },
      'view'
    );
});
