### Upgrade from 7 to 8
1. Run upgrade wizard in Install Tool
2. Go to Database analyzer and fix some tables
3. Go to Scheduler and run tmpl_migration:migratepagelayouts:migratepagelayouts 
4. Create directory fileadmin/news_import and import tt_news records
5. Include EXT:tmpl in base extension, fluid_styled_content, fancybox, 
6. Change base url domain config.baseURL =
7. Remove EXT:vostokzapad_design from static
8. Go to news page and configure for plugin tx_news

on pages 333, 434 make detail pages

On page 27 need to setting plugin tx_news
Items per page
