<?php
defined('TYPO3_MODE') or die();


// Additional fields for page
$GLOBALS['TCA']['pages']['columns'] += array(

    'section_class' => array(
        'exclude' => 1,
        'label' => 'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:page.section_class',
        'config' => array(
            'type' => 'select',
            'renderType' => 'selectSingle',
            'items' => array(
                array('LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:page.select.no_class', ''),
                array('LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:page.select.section_media', 'section section-media current'),
                array('LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:page.select.section_map', 'section-map no-bg'),
                array('LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:page.select.section_map_single', 'section-map section-map-single'),
                array('LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:page.select.section_oil', 'section section-oil'),
                array('LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:page.select.section_card', 'section section-card current'),
            ),
            'size' => 1,
            'minitems' => 0,
            'maxitems' => 1,
        ),
    ),

    'container_class' => array(
        'exclude' => 1,
        'label' => 'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:page.container_class',
        'config' => array(
            'type' => 'select',
            'renderType' => 'selectSingle',
            'items' => array(
                array('LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:page.select.no_class', ''),
                array('LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:page.select.container_textpage', 'container textpage-container'),
                array('LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:page.select.container_mediacontainer', 'container media-container'),
                array('LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:page.select.container_mapcontainer', 'container map-container'),
                array('LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:page.select.container_oil_container', 'container oil-container'),
                array('LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:page.select.container_card_container', 'container card-container'),
                //array('LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:page.select.container_mediacontainer_company', 'container media-container company'),
                //array('Some class name', 'some_class_value'),
            ),
            'size' => 1,
            'minitems' => 0,
            'maxitems' => 1,
        ),
    ),

    'show_dealers' => array(
        'label' => 'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:page.show_dealers',
        'exclude' => 1,
        'config' => array (
            'type' => 'check',
            'items' => array(
                array('', '')
            )
        )
    ),

    'show_modal_categories' => array(
        'label' => 'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:page.show_modal_categories',
        'exclude' => 1,
        'config' => array (
            'type' => 'check',
            'items' => array(
                array('', '')
            )
        )
    ),

    'hide_container' => array(
        'label' => 'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:page.hide_container',
        'exclude' => 1,
        'config' => array (
            'type' => 'check',
            'items' => array(
                array('', '')
            )
        )
    ),

    'hide_breadcrumb' => array(
        'label' => 'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:page.hide_breadcrumb',
        'exclude' => 1,
        'config' => array (
            'type' => 'check',
            'items' => array(
                array('', '')
            )
        )
    ),

    'show_section_map' => array(
        'label' => 'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:page.show_section_map',
        'exclude' => 1,
        'config' => array (
            'type' => 'check',
            'items' => array(
                array('', '')
            )
        )
    ),

    'show_section_search_dealer' => array(
        'label' => 'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:page.show_section_search_dealer',
        'exclude' => 1,
        'config' => array (
            'type' => 'check',
            'items' => array(
                array('', '')
            )
        )
    ),

);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes (
    'pages', 'section_class', '1', 'after:title'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes (
    'pages', 'container_class', '1', 'after:section_class'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes (
    'pages', 'hide_container', '1', 'after:container_class'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes (
    'pages', 'show_dealers', '1', 'after:hide_container'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes (
    'pages', 'hide_breadcrumb', '1', 'after:show_dealers'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes (
    'pages', 'show_modal_categories', '1', 'after:hide_breadcrumb'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes (
    'pages', 'show_section_map', '1', 'after:show_modal_categories'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes (
    'pages', 'show_section_search_dealer', '1', 'after:show_section_map'
);
