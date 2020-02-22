<?php
defined('TYPO3_MODE') || die('Access denied.');

/**
 * Add TypoScript
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'Basis tmpl extension');

/**
 * Page TS Config
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:tmpl/Configuration/TsConfig/page.tsconfig">');

/**
 * Add some basic User TS Config
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:tmpl/Configuration/TsConfig/user.tsconfig">');

/**
 * Add rte_ckeditor custom config
 */
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['custom'] = 'EXT:tmpl/Configuration/RTE/Custom.yaml';

/**
 *  Configuration ce for tables
 */
//\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::allowTableOnStandardPages('tx_tmplcemainslider_item');

