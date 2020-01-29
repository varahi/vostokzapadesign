<?php

$_CEKEY  = 'ce_top_container';
$_EXTKEY = 'tmpl';


$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = [
    'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:ce.top_container_title',
    $_CEKEY, 'EXT:tmpl/Ce/' . $_CEKEY . '/Icons/ce_wiz.gif'
];

// make overrides for tt_content columns
$GLOBALS['TCA']['tt_content']['types'][$_CEKEY]['columnsOverrides'] = [
    'bodytext' => [
        'defaultExtras' => 'richtext:rte_transform[mode=ts_css]'
    ],
];

$GLOBALS['TCA']['tt_content']['types'][$_CEKEY]['showitem'] = '
    --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.general;general   
    ,--div--;LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:ce.about_section_div

    ,container_type;LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:ce.top_container_type    
    ,header;LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:ce.top_container_header
    ,bodytext;LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:ce.top_container_bodytext
 
    ,--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.access
    ,--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.visibility;visibility
    ,--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.access;access
    ,--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.extended
   ';

if (\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('gridelements')) {
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes('tt_content', 'tx_gridelements_container, tx_gridelements_columns', $_CEKEY);
}

?>