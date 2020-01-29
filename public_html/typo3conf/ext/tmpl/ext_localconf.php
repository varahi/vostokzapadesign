<?php
defined('TYPO3_MODE') || die('Access denied.');

/*
 *  Default TSConfig
 */
if (TYPO3_MODE === 'FE') {
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('
		<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/TSConfig/Page/backend_layouts.ts">
	');
}

/*
 * Backend Layouts
 */
if (TYPO3_MODE === 'BE') {
    $GLOBALS[ 'TYPO3_CONF_VARS' ][ 'SC_OPTIONS' ][ 'BackendLayoutDataProvider' ][$_EXTKEY]
        = T3Dev\Tmpl\DataProvider\BackendLayoutDataProvider::class;

    // Register hook to show preview of tt_content element of CType="fluid_styled_slider" in page module
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['cms/layout/class.tx_cms_layout.php']['tt_content_drawItem']['ce_simple_slider']
        = \T3Dev\Tmpl\Hooks\SliderPreviewRenderer::class;
}