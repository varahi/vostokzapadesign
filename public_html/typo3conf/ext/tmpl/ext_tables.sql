CREATE TABLE pages (
	section_class varchar(255) DEFAULT '' NOT NULL,
	container_class varchar(255) DEFAULT '' NOT NULL,
	show_dealers int(11) unsigned DEFAULT '0' NOT NULL,
  show_modal_categories int(11) unsigned DEFAULT '0' NOT NULL,
	hide_container int(11) unsigned DEFAULT '0' NOT NULL,
	hide_breadcrumb int(11) unsigned DEFAULT '0' NOT NULL,
  show_section_map int(11) unsigned DEFAULT '0' NOT NULL,
  show_section_search_dealer int(11) unsigned DEFAULT '0' NOT NULL,
);

#
# Table structure for table 'tt_content'
#
CREATE TABLE tt_content (
	container_type varchar(255) DEFAULT '0' NOT NULL,
);


# additional fields for news
CREATE TABLE tx_news_domain_model_news (
	in_action smallint(5) unsigned DEFAULT '0' NOT NULL,
);

# seo filed for news
CREATE TABLE tx_news_domain_model_news (
	tx_csseo int(11) unsigned NOT NULL default '0',
);

# seo filed for catalog
CREATE TABLE tx_fuchscatalog_domain_model_item (
	tx_csseo int(11) unsigned NOT NULL default '0',
);

# seo filed for dealers
CREATE TABLE tx_fuchsdealers_domain_model_dealer (
	tx_csseo int(11) unsigned NOT NULL default '0',
);

