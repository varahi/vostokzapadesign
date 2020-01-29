<?php
defined('TYPO3_MODE') || die('Access denied.');

/**
 * Page TS Config
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig
('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:tmpl/Configuration/TSConfig/page.ts">');

/**
 * add some basic User TS Config
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig
('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:tmpl/Configuration/TSConfig/user.ts">');

/**
 * Main Typoscript
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('tmpl', 'Configuration/TypoScript', 'Site Template');

/*
$iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(
    \TYPO3\CMS\Core\Imaging\IconRegistry::class
);
$iconRegistry->registerIcon(
    'default-icon',
    \TYPO3\CMS\Core\Imaging\IconProvider\BitmapIconProvider::class,
    ['source' => 'EXT:tmpl/Resources/Public/Icons/edu.gif']
);
*/
