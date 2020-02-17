<?php

$tmp_t3devcarousel_columns = array(

	'item' => array(
		'exclude' => 1,
		'label' => 'LLL:EXT:t3devcarousel/Resources/Private/Language/locallang_db.xlf:tx_t3devcarousel_domain_model_slider.item',
		'config' => array(
			'type' => 'inline',
			'foreign_table' => 'tx_t3devcarousel_domain_model_item',
			'foreign_field' => 'slider',
			'foreign_sortby' => 'sorting',
			'maxitems' => 9999,
			'appearance' => array(
				'collapseAll' => 0,
				'levelLinksPosition' => 'top',
				'showSynchronizationLink' => 1,
				'showPossibleLocalizationRecords' => 1,
				'useSortable' => 1,
				'showAllLocalizationLink' => 1
			),
		),

	),

);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content',$tmp_t3devcarousel_columns);
