<?php

$_CEKEY  = 'ce_about_section';
$_EXTKEY = 'tmpl';


$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = [
    'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:ce.about_section_title',
    $_CEKEY, 'EXT:tmpl/Ce/' . $_CEKEY . '/Icons/ce_wiz.gif'
];

// make overrides for tt_content columns
$GLOBALS['TCA']['tt_content']['types'][$_CEKEY]['columnsOverrides'] = [
    'bodytext' => [
        'defaultExtras' => 'richtext:rte_transform[mode=ts_css]'
    ],
    'image' => [
        'config' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::getFileFieldTCAConfig(
            'image',
            [
                'appearance' => [
                    'createNewRelationLinkTitle' => 'LLL:EXT:cms/locallang_ttc.xlf:images.addFileReference',
                    'fileUploadAllowed' => FALSE,
                ],
                'foreign_types' => [
                    '0' => [
                        'showitem' => '
							--palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPaletteSimple,
							--palette--;;filePalette'
                    ],
                    '1' => [
                        'showitem' => '
							--palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPaletteSimple,
							--palette--;;filePalette'
                    ],
                    \TYPO3\CMS\Core\Resource\File::FILETYPE_TEXT => [
                        'showitem' => '
							--palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPaletteSimple,
							--palette--;;filePalette'
                    ],
                    \TYPO3\CMS\Core\Resource\File::FILETYPE_IMAGE => [
                        'showitem' => '
							--palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPaletteSimple,
							--palette--;;filePalette'
                    ],
                    \TYPO3\CMS\Core\Resource\File::FILETYPE_APPLICATION => [
                        'showitem' => '
							--palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPaletteSimple,
							--palette--;;filePalette'
                    ],
                ],
                'maxitems' => 1,
                'minitems' => 0
            ],
            $GLOBALS['TYPO3_CONF_VARS']['GFX']['imagefile_ext']
        ),
    ],
];

$GLOBALS['TCA']['tt_content']['types'][$_CEKEY]['showitem'] = '
    --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.general;general
    
    ,--div--;LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:ce.about_section_div
    ,image;LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:ce.about_section_image
    ,bodytext;LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:ce.about_section_bodytext
    ,header_link;LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:ce.about_section.video_link
    
    ,--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.access
    ,--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.visibility;visibility
    ,--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.access;access
    ,--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.extended
   ';

if (\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('gridelements')) {
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes('tt_content', 'tx_gridelements_container, tx_gridelements_columns', $_CEKEY);
}

?>