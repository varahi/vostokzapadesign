<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

\TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
	'T3Dev.' . $_EXTKEY,
	'T3devcarousel',
	array(
		'Item' => 'list',
		
	),
	// non-cacheable actions
	array(
		'Item' => '',
		
	),
		\TYPO3\CMS\Extbase\Utility\ExtensionUtility::PLUGIN_TYPE_CONTENT_ELEMENT
);


\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig ('

mod.wizards.newContentElement.wizardItems.common.elements.t3devcarousel_t3devcarousel {
    icon = sysext/core/Resources/Public/Icons/T3Icons/default/default-not-found.svg
    title = Карусель
    description = Slick Карусель
    tt_content_defValues {
        CType = t3devcarousel_t3devcarousel
    }
}
mod.wizards.newContentElement.wizardItems.common.show := addToList(t3devcarousel_t3devcarousel)

');