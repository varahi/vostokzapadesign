### Update Default Page
UPDATE pages
SET backend_layout = 'pagets__1'
WHERE tx_fed_page_controller_action = 'Devcompany.VostokzapadesignSite->homePage';


UPDATE pages
SET backend_layout = 'pagets__1'
WHERE tx_fed_page_controller_action_sub = 'Devcompany.VostokzapadesignSite->homePage';


UPDATE pages
SET backend_layout = 'pagets__2'
WHERE tx_fed_page_controller_action_sub = 'Devcompany.VostokzapadesignSite->innerPage';


UPDATE pages
SET backend_layout = 'pagets__2'
WHERE tx_fed_page_controller_action_sub = 'Devcompany.VostokzapadesignSite->innerPage';
